<template>
    <div class="container">
        <div class="detailReceiverContainer">

            <router-link to="/home"><md-button class="md-dense md-raised md-primary" style="width: 1em; margin: 6px 0 16px 0">Zurück</md-button></router-link>
            <h2 style="margin-bottom: 8px">Empfangsschein</h2>
            <div>
                <b>Konto / Zahlbar an</b>
                <p>{{receiver.iban}}</p>
                <p>{{receiver.firstName}} {{receiver.lastName}}</p>
                <p>{{receiver.address}}</p>
                <p>{{receiver.postCode}} {{receiver.city}}</p>
            </div>
            <div style="margin-top: 7px">
                <b>Zahlbar durch</b>
                <p>{{biller.firstName}} {{biller.lastName}}</p>
                <p>{{biller.address}}</p>
                <p>{{biller.postCode}} {{biller.city}}</p>
            </div>
            <div>
                <div>
                    <div style="float: left; padding-right: 1em;">
                        <b>Währung</b><br>
                        {{money.currency}}
                    </div>
                    <div style="float: left">
                        <b>Betrag</b><br>
                        {{money.amount}}
                    </div>
                </div>
            </div>
        </div>

        <div class="qrCodeDetailContainer">
            <div></div>
            <div><h2>Zahlteil</h2></div>
            <div><div style="background: cadetblue; height: 250px; width: 250px; text-align: center">Qr Code plaeholder</div></div>
            <div>
                <div>
                    <div style="float: left; padding-right: 1em">
                        <b>Währung</b><br>
                        {{money.currency}}
                    </div>
                    <div style="float: left;">
                        <b>Betrag</b><br>
                        {{money.amount}}
                    </div>
                </div>
            </div>
        </div>

        <div class="secondPartContainer">
            <div></div>
            <div>
                <b>Konto / Zahlbar an</b>
                <p>{{receiver.iban}}</p>
                <p>{{receiver.firstName}} {{receiver.lastName}}</p>
                <p>{{receiver.address}}</p>
                <p>{{receiver.postCode}} {{receiver.city}}</p>
            </div>
            <div>
                <b>Zusätzliche Informationen</b><br>
                {{message}}
            </div>
            <div style="margin-top: 7px">
                <b>Zahlbar durch</b>
                <p>{{biller.firstName}} {{biller.lastName}}</p>
                <p>{{biller.address}}</p>
                <p>{{biller.postCode}} {{biller.city}}</p>
            </div>
            <div style="text-align: right">

                <md-button class="md-dense md-raised" style="width: 1em;">Döwnlöäd</md-button>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        // TODO: Daten aus DB anzeigen
        // TODO: QR Code generieren
        // TODO: Download der Daten implementieren (wenn keine Zeit, Fehlermeldung ist noch nicht implementiert)
        // TODO: Wenn noch spass daran, Teil Money auf gleiche höhe bringen
        // TODO: id in url mitgeben 
        name: "Detail",
        data: function () {
            return {
                receiver: {
                    firstName: "iman",
                    lastName: "lünsmann",
                    iban: "CH58 0079 1123 00008 8904 2",
                    address: "Himmelreich 25",
                    postCode: "6005",
                    city: "Luzern"
                },
                biller: {
                    firstName: "colin",
                    lastName: "dillier",
                    address: "Himmelreich 10",
                    postCode: "6005",
                    city: "Zöri"
                },
                money: {
                    currency: "CHF",
                    amount: "6666666666669"
                },
                message: "Rechnung Nr 3, Alkohol "

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
    }

    .qrCodeDetailContainer {
        display: grid;
        grid-template-rows: 52px repeat(3, auto);
    }

    .secondPartContainer {
        display: grid;
        grid-template-rows: 52px repeat(4, auto);
    }

</style>