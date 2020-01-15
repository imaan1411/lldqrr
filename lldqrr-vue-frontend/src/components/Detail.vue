<template>
    <div class="container">
        <div class="detailReceiverContainer">
            <router-link to="/home"><md-button class="md-dense md-raised md-primary toHomeBtn">Zurück</md-button></router-link>
            <h2 style="margin-bottom: 8px">Empfangsschein</h2>
            <div>
                <b>Konto / Zahlbar an</b>
                <p>CH58 2155 1125 3356 0010 2</p>
                <p>{{receiver.firstName}} {{receiver.lastName}}</p>
                <p>{{receiver.address}}</p>
                <p>{{receiver.postCode}} {{receiver.city}}</p>
            </div>
            <div style="margin-top: 7px">
                <b>Zahlbar durch</b>
                <p>{{bill.firstName}} {{bill.lastName}}</p>
                <p>{{bill.creditorStreet}} {{bill.creditorBuildingNumber}}</p>
                <p>{{bill.creditorPostalCode}} {{bill.creditorCity}}</p>
            </div>
            <div>
                <div>
                    <div style="float: left; padding-right: 1em;">
                        <b>Währung</b><br>
                        {{bill.currency}}
                    </div>
                    <div style="float: left">
                        <b>Betrag</b><br>
                        {{bill.amount}}
                    </div>
                </div>
            </div>
        </div>

        <div class="qrCodeDetailContainer">
            <div></div>
            <div><h2>Zahlteil</h2></div>
            <div @click="createQRCode()">
                <p v-if="!qrCodeVisible">clicke hier um den QR Code zu sehen</p>

                <div id="qrcode"></div>
            </div>
            <div>
                <div style="margin-top: 1em">
                    <div style="float: left; padding-right: 1em;">
                        <b>Währung</b><br>
                        {{bill.currency}}
                    </div>
                    <div style="float: left;">
                        <b>Betrag</b><br>
                        {{bill.amount}}
                    </div>
                </div>
            </div>
        </div>

        <div class="secondPartContainer">
            <div></div>
            <div>
                <b>Konto / Zahlbar an</b>
                <p>CH58 2155 1125 3356 0010 2</p>
                <p>{{receiver.firstName}} {{receiver.lastName}}</p>
                <p>{{receiver.address}}</p>
                <p>{{receiver.postCode}} {{receiver.city}}</p>
            </div>
            <div>
                <b>Zusätzliche Informationen</b><br>
                {{bill.structuredPaymentInfo}}
            </div>
            <div style="margin-top: 7px">
                <b>Zahlbar durch</b>
                <p>{{bill.firstName}} {{bill.lastName}}</p>
                <p>{{bill.creditorStreet}} {{bill.creditorBuildingNumber}}</p>
                <p>{{bill.creditorPostalCode}} {{bill.creditorCity}}</p>
            </div>
            <div style="text-align: right">
                <md-button class="md-dense md-raised" style="width: 1em;">Döwnlöäd</md-button>
            </div>
        </div>
    </div>
</template>

<script>
    import Cookies from 'js-cookie'
    import {lldqrrdb} from '@/firebaseConfig'

    export default {
        // TODO: Download der Daten implementieren (wenn keine Zeit, Fehlermeldung ist noch nicht implementiert)
        // TODO: Wenn noch spass daran, Teil Money auf gleiche höhe bringen
        name: "Detail",
        mounted() {
            let that = this;
            lldqrrdb.child(Cookies.get("userId")).child("Bill").on("value", snap => {
                snap.forEach(snapChild => {
                    //let i = 0;
                    lldqrrdb.child(Cookies.get("userId")).child("Bill").child(snapChild.key)
                        .on("value", a => {
                            that.obj = a.val();
                            if (that.obj.id == this.$route.params.id){
                                that.bill = that.obj;
                            }
                        });
                });
            });
        },
        data: function () {
            return {
                obj: {},
                bill: {},
                qrCodeVisible: false,
                receiver: {
                    firstName: "iman",
                    lastName: "lünsmann",
                    iban: "CH58 0079 1123 00008 8904 2",
                    address: "Himmelreich 25",
                    postCode: "6005",
                    city: "Luzern"
                },
            }
        },
        methods: {
            createQRCode: function() {
                this.qrCodeVisible = true;
                // eslint-disable-next-line no-undef
                new QRCode(document.getElementById("qrcode"),  {
                    text: this.generateString(),
                    width: 250,
                    height: 250,
                    colorDark : "#000000",
                    colorLight : "#ffffff",
                    // eslint-disable-next-line no-undef
                    correctLevel : QRCode.CorrectLevel.H
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
            },
            click: function() {
                // eslint-disable-next-line no-console
                console.log("asdf")
            }

        }
    }
</script>

<style scoped>
    div p {
        margin-bottom: 0;
    }

    .container {
        max-width: 100em;
        display: grid;
        grid-template-columns: 33.3% 33.3% 33.3%;
    }

    .detailReceiverContainer {
        display: grid;
        grid-template-rows: repeat(5, auto);
        border-right: 1px solid;
        margin-right: 2em;
    }

    .qrCodeDetailContainer {
        display: grid;
        grid-template-rows: 66px repeat(3, auto);
    }

    .secondPartContainer {
        display: grid;
        grid-template-rows: 52px repeat(4, auto);
    }

    .toHomeBtn {
        width: 1em;
        margin: 6px 0 16px 0;
    }
</style>