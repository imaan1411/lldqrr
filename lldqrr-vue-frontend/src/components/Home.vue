<template>
    <div class="container">
        <header style="margin: 2em">
            <h1>Liste QRR</h1>
            <md-icon @click.native="$router.push('/create')" class="md-size-3x icon">add_circle_outline</md-icon>
        </header>
        <div v-if="isData">
            <md-table v-model="bill" md-sort="firstname" md-sort-order="desc" md-card>
                <md-table-row @click="navigateToDetailPage(item.id)" slot="md-table-row" slot-scope="{ item }">
                    <md-table-cell md-label="Id" md-sort-by="id">{{ item.id }}</md-table-cell>
                    <md-table-cell md-label="Vorname" md-sort-by="firstName">{{ item.firstName }}</md-table-cell>
                    <md-table-cell md-label="Nachname" md-sort-by="lastname">{{ item.lastname }}</md-table-cell>
                    <md-table-cell md-label="Betrag" md-sort-by="amount">{{ item.amount }}</md-table-cell>
                    <md-table-cell md-label="Währung" md-sort-by="currency">{{ item.currency }}</md-table-cell>
                    <md-table-cell md-label="Aktion">
                        <div @click="navigateToEditPage(item.id)" class="icon" style="float: left; padding-right: 1em"
                             @click.stop="first = true">
                            <md-icon>create</md-icon>
                        </div>
                        <div @click.stop="deleteRow(item.id)" class="icon" style="float: left">
                            <md-icon>delete</md-icon>
                        </div>
                    </md-table-cell>
                </md-table-row>
            </md-table>
        </div>
        <div v-else style="text-align: center; height: 10em; margin-top: 5em">
            <h2>Sie haben noch keine Einträge getätigt!</h2>
            <h3>Klicken Sie auf das Plus um eine Rechnung zu erstellen</h3>
        </div>
        <footer style="margin-top: 1em">
            <button @click="logout()">
                <md-icon>input</md-icon>
            </button>
        </footer>
    </div>
</template>

<script>
    import firebase from 'firebase';
    import "firebase/auth"
    import Cookies from 'js-cookie'
    import {lldqrrdb} from '@/firebaseConfig'

    export default {
        name: "Home",
        created() {
            var ref = lldqrrdb.orderByKey().equalTo(Cookies.get("userId"));
            ref.on("child_added", snap => {
                if (snap.key === Cookies.get("userId")) {
                    let returnArr = [];
                    let that = this;
                    lldqrrdb.orderByKey().equalTo(Cookies.get("userId")).once('value', snapshot => {
                        snapshot.forEach(childSnapshot => {
                            returnArr.push(childSnapshot.val());
                            that.list = returnArr;
                        });
                        let billArray = JSON.parse(JSON.stringify(that.list[0].valueOf()));
                        for (let key in billArray.Bill) {
                            let value = billArray.Bill[key];
                            that.bill.push(value);
                        }
                    });
                    that.isData = true;
                } else {
                    this.isData = false;
                }
            });
        },
        data() {
            return {
                isData: false,
                list: {},
                bill: [],
                second: false,
                first: false
            }
        },

        methods: {
            logout: function () {
                if (!Cookies.get("userId").empty) {
                    firebase.auth().signOut();
                    this.$store.loggedIn = false;
                    Cookies.remove("userId");
                    this.$router.push("/");
                }
            },
            navigateToDetailPage: function (id) {
                this.$router.push("/detail/" + id);
            },
            navigateToEditPage: function (id) {
                this.$router.push("/edit/" + id);
            },
            deleteRow: id => {
                if (id != null) {
                    var userBills = lldqrrdb.child(Cookies.get("userId")).child("Bill");
                    if (userBills != null) {
                        userBills.orderByChild("id").equalTo(id).once("value", snap => {
                            snap.forEach(snapchild => {
                                userBills.child(snapchild.key).remove();
                            });
                            location.reload();
                        });
                    }
                }
            },
        }
    }
</script>

<style scoped>
    .container {
        max-width: 100em;
        display: grid;
        grid-template-rows: repeat(3, auto);
    }

    header {
        display: grid;
        grid-template-columns: 90% 10%;
    }

    .icon:hover {
        cursor: pointer;
    }
</style>