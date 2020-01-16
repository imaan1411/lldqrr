<template>
    <div class="container">
        <h1 class="mainTitle">Rechnung erfassen</h1>
        <div class="receiverContainer">
            <md-card style="margin: 3em 0">
                <md-card-header>
                    <div class="md-title">Rechnungssteller</div>
                </md-card-header>

                <md-card-expand>
                    <md-card-actions style="float: right" md-alignment="space-between">
                        <md-card-expand-trigger>
                            <md-button class="md-icon-button">
                                <md-icon>keyboard_arrow_down</md-icon>
                            </md-button>
                        </md-card-expand-trigger>
                    </md-card-actions>
                    <md-card-expand-content>
                        <md-card-content v-if="this.$route.params.id">
                            <md-field>
                                <label>Vorname</label>
                                <md-input v-model="bill.firstName"></md-input>
                            </md-field>
                            <md-field>
                                <label>Nachname</label>
                                <md-input v-model="bill.lastname"></md-input>
                            </md-field>
                            <md-field>
                                <label>Strasse</label>
                                <md-input v-model="bill.creditorStreet"></md-input>
                            </md-field>
                            <md-field>
                                <label>Hausnummer</label>
                                <md-input v-model="bill.creditorBuildingNumber"></md-input>
                            </md-field>
                            <md-field>
                                <label>Stadt</label>
                                <md-input v-model="bill.creditorCity"></md-input>
                            </md-field>
                            <md-field>
                                <label>PLZ</label>
                                <md-input v-model="bill.creditorPostalCode"></md-input>
                            </md-field>
                            <md-field>
                                <label>Land</label>
                                <md-input v-model="bill.creditorLand"></md-input>
                            </md-field>
                        </md-card-content>
                        <md-card-content v-else>
                            <md-field>
                                <label>Vorname</label>
                                <md-input v-model="bill.firstName"></md-input>
                            </md-field>
                            <md-field>
                                <label>Nachname</label>
                                <md-input v-model="bill.lastname"></md-input>
                            </md-field>
                            <md-field>
                                <label>Strasse</label>
                                <md-input v-model="bill.creditorStreet"></md-input>
                            </md-field>
                            <md-field>
                                <label>Hausnummer</label>
                                <md-input v-model="bill.creditorBuildingNumber"></md-input>
                            </md-field>
                            <md-field>
                                <label>Stadt</label>
                                <md-input v-model="bill.creditorCity"></md-input>
                            </md-field>
                            <md-field>
                                <label>PLZ</label>
                                <md-input v-model="bill.creditorPostalCode"></md-input>
                            </md-field>
                            <md-field>
                                <label>Land</label>
                                <md-input v-model="bill.creditorLand"></md-input>
                            </md-field>
                        </md-card-content>
                    </md-card-expand-content>
                </md-card-expand>
            </md-card>
            <md-card>
                <md-card-header>
                    <div class="md-title">Rechnungsinformation</div>
                </md-card-header>

                <md-card-expand>
                    <md-card-actions style="float: right" md-alignment="space-between">
                        <md-card-expand-trigger>
                            <md-button class="md-icon-button">
                                <md-icon>keyboard_arrow_down</md-icon>
                            </md-button>
                        </md-card-expand-trigger>
                    </md-card-actions>

                    <md-card-expand-content>
                        <md-card-content v-if="this.$route.params.id">
                            <md-field>
                                <label>Amount</label>
                                <md-input v-model="bill.amount"></md-input>
                            </md-field>
                            <md-field>
                                <label>Währung</label>
                                <md-input v-model="bill.currency"></md-input>
                            </md-field>
                            <md-field>
                                <label>Referenz Typ</label>
                                <md-input v-model="bill.referenceType"></md-input>
                            </md-field>
                            <md-field>
                                <label>Referenz Nummer</label>
                                <md-input v-model="bill.referenceNumber"></md-input>
                            </md-field>
                            <md-field>
                                <label>Strukturierte Zahlungs Info</label>
                                <md-input v-model="bill.structuredPaymentInfo"></md-input>
                            </md-field>
                            <md-field>
                                <label>Unstrukturierte Zahlungs Info</label>
                                <md-input v-model="bill.unstructuredPaymentInfo"></md-input>
                            </md-field>
                            <md-field>
                                <label>QR Typ</label>
                                <md-input v-model="bill.qrType"></md-input>
                            </md-field>
                            <md-field>
                                <label>Version</label>
                                <md-input v-model="bill.version"></md-input>
                            </md-field>
                        </md-card-content>
                        <md-card-content v-else>
                            <md-field>
                                <label>Amount</label>
                                <md-input v-model="bill.amount"></md-input>
                            </md-field>
                            <md-field>
                                <label>Währung</label>
                                <md-input v-model="bill.currency"></md-input>
                            </md-field>
                            <md-field>
                                <label>Referenz Typ</label>
                                <md-input v-model="bill.referenceType"></md-input>
                            </md-field>
                            <md-field>
                                <label>Referenz Nummer</label>
                                <md-input v-model="bill.referenceNumber"></md-input>
                            </md-field>
                            <md-field>
                                <label>Strukturierte Zahlungs Info</label>
                                <md-input v-model="bill.structuredPaymentInfo"></md-input>
                            </md-field>
                            <md-field>
                                <label>Unstrukturierte Zahlungs Info</label>
                                <md-input v-model="bill.unstructuredPaymentInfo"></md-input>
                            </md-field>
                            <md-field>
                                <label>QR Typ</label>
                                <md-input v-model="bill.qrType"></md-input>
                            </md-field>
                            <md-field>
                                <label>Version</label>
                                <md-input v-model="bill.version"></md-input>
                            </md-field>
                        </md-card-content>
                    </md-card-expand-content>
                </md-card-expand>
            </md-card>
        </div>
        <div class="qrCodeContainer">
            <h2>QR Code</h2>
            <div id="qrcode"></div>
            <md-button style="width: 250px" @click="createQRCode()" class="md-dense md-raised">Generiere QR Code
            </md-button>
            <div style="position: relative">
                <md-dialog-confirm
                        :md-active.sync="confirmAbort"
                        md-content="Sind Sie sicher, dass Sie abbrechen möchten? </br> Ihre Änderungen werden nicht gespeichert."
                        md-confirm-text="Ja"
                        md-cancel-text="Nein"
                        @md-confirm="navigateToHome"
                />
                <md-button class="md-dense md-raised" style="position: absolute; bottom: 0"
                           @click="checkIfUserInputIsNull()">Abbrechen
                </md-button>
                <md-button class="md-dense md-raised md-primary"
                           style="position: absolute; bottom: 0; margin-left: 10em" @click="createBillOrUpdateBill()">
                    Speichern
                </md-button>
            </div>
        </div>
    </div>
</template>


<script>
    import Cookies from 'js-cookie'
    import {lldqrrdb} from '@/firebaseConfig'

    export default {
        name: "Create",
        data: function () {
            return {
                bill: {},
                confirmAbort: false,
                obj: {},
            }
        },
        methods: {
            createBillOrUpdateBill: function () {
                if (this.$route.params.id) {
                    let userBills = lldqrrdb.child(Cookies.get("userId")).child("Bill");
                    if (userBills != null) {
                        userBills.orderByChild("id").equalTo(this.$route.params.id).once("value", snap => {
                            snap.forEach(snapchild => {
                                userBills.child(snapchild.key).update(this.bill);
                            });
                        });
                    }
                } else {
                    this.$store.commit('createBill', this.bill);
                }
                this.navigateToHome();
            },
            navigateToHome: function () {
                this.$router.push("/home");
            },
            checkIfUserInputIsNull: function () {
                if (this.checkPropertys(this.bill)) {
                    this.navigateToHome();
                } else {
                    this.confirmAbort = true;
                }
            },
            checkPropertys: function (obj) {
                for (let key in obj) {
                    if (obj[key] !== null && obj[key] != "")
                        return false;
                }
                return true;
            },
            createQRCode: function () {
                const qrCodeEle = document.getElementById("qrcode");
                while (qrCodeEle.firstChild) {
                    qrCodeEle.removeChild(qrCodeEle.firstChild);
                }
                // eslint-disable-next-line no-undef
                new QRCode(qrCodeEle, {
                    text: this.generateString(),
                    width: 250,
                    height: 250,
                    colorDark: "#000000",
                    colorLight: "#ffffff",
                    // eslint-disable-next-line no-undef
                    correctLevel: QRCode.CorrectLevel.H
                });
            },
            generateString: function () {
                let obj = this.bill.valueOf();
                let arr = [];
                for (let key in obj) {
                    if (obj.hasOwnProperty(key)) {
                        arr.push(key + ':' + obj[key]);
                    }
                }
                return arr.join(',');
            }
        }
    }
</script>

<style scoped>
    .mainTitle {
        grid-column: 2;
        grid-row: 1;
        text-align: center;
    }

    .receiverContainer {
        grid-column: 1;
        grid-row: 2;
        display: grid;
        grid-template-rows: repeat(7, auto);
    }

    .qrCodeContainer {
        grid-column: 3;
        grid-row: 2;
        display: grid;
        grid-template-rows: 5em 20em 3em 5em;
    }

    .container {
        max-width: 100em;
        display: grid;
        grid-template-columns: 33.3% 33.3% 33.3%;
    }

    @media (max-width: 819px) {
        .container {
            display: grid;
            grid-template-columns: auto auto;
            grid-template-rows: auto;
        }
    }

    @media (max-width: 420px) {
        .container {
            display: grid;
            grid-template-columns: auto;
            grid-template-rows: auto;
        }
    }
</style>