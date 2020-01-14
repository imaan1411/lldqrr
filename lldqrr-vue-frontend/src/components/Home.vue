<template>
    <div class="container">
        <header style="margin: 2em">
            <h1>Liste QRR</h1>
            <md-icon @click.native="$router.push('/create')" class="md-size-3x icon">add_circle_outline</md-icon>
        </header>
        <div>
            <md-table v-model="bill" md-sort="firstname" md-sort-order="desc" md-card>
                <md-table-row @click="navigateToDetailPage()" slot="md-table-row" slot-scope="{ item }">
                    <md-table-cell md-label="Vorname" md-sort-by="firstName">{{ item.firstName }}</md-table-cell>
                    <md-table-cell md-label="Nachname" md-sort-by="lastname">{{ item.lastname }}</md-table-cell>
                    <md-table-cell md-label="Betrag" md-sort-by="amount">{{ item.amount }}</md-table-cell>
                    <md-table-cell md-label="Währung" md-sort-by="currency">{{ item.currency }}</md-table-cell>
                    <md-table-cell md-label="Aktion">
                        <div class="icon" style="float: left" @click.stop="editBill()">
                            <md-icon>create</md-icon>
                        </div>
                        <div class="icon" style="float: left" @click.stop="deleteBill()">
                                <md-icon>delete</md-icon>
                        </div>
                    </md-table-cell>
                </md-table-row>
            </md-table>
        </div>
        <footer style="margin-top: 1em">
            <button @click="logout()"><md-icon>input</md-icon></button>
        </footer>
    </div>
</template>

<script>
    import firebase from 'firebase';
    import "firebase/auth"
    import Cookies from 'js-cookie'
    import {dbb} from '@/firebaseConfig'

    export default {
        // TODO: Löschen und Editieren implementieren
        name: "Home",
        created() {
            let returnArr = [];
            let that = this;
            dbb.on('value', function(snapshot) {
                snapshot.forEach(childSnapshot => {
                    returnArr.push(childSnapshot.val());
                    that.list = returnArr;
                });
                let billArray = JSON.parse(JSON.stringify(that.list[0].valueOf()));
                for(let key in billArray.Bill) {
                    let value = billArray.Bill[key];
                    that.bill.push(value);
                }
            });
        },
        data () {
            return {
                list: {},
                bill: [],
            }
        },

        methods: {
            logout: function() {
                if (!Cookies.get("userId").empty) {
                    firebase.auth().signOut();
                    this.$store.loggedIn = false;
                    Cookies.remove("userId");
                    this.$router.push("/");
                }
            },

            navigateToDetailPage: function () {
                this.$router.push("/detail");
            },
            editBill: function () {
                this.$router.push("/edit");
            },
            deleteBill: function () {
                this.$router.push("/delete");
            }
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