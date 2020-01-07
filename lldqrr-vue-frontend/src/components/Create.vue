<template>
    <div class="container">
        <h1 class="mainTitle">Rechnung erfassen</h1>
        <div class="receiverContainer">
            <h2>Empfänger</h2>
            <md-field>
                <label>Vorname</label>
                <md-input v-model="receiver.firstName"></md-input>
            </md-field>
            <md-field>
                <label>Name</label>
                <md-input v-model="receiver.lastName"></md-input>
            </md-field>
            <md-field>
                <label>IBAN</label>
                <md-input v-model="receiver.iban"></md-input>
            </md-field>
            <md-field>
                <label>Mitteilung an den Empfänger</label>
                <md-input v-model="receiver.message"></md-input>
            </md-field>
            <h2>Rechnungssteller</h2>
            <md-field>
                <label>IBAN</label>
                <md-input v-model="sender.iban"></md-input>
            </md-field>
        </div>
        <div class="qrCodeContainer">
            <h2>QR Code</h2>
            <div style="background: cadetblue; height: 250px; width: 250px; text-align: center">QR Code Placeholder</div>
            <div style="position: relative">
                <md-dialog-confirm
                        :md-active.sync="confirmAbort"
                        md-content="Sind Sie sicher, dass Sie abbrechen möchten? </br> Ihre Änderungen werden nicht gespeichert."
                        md-confirm-text="Ja"
                        md-cancel-text="Nein"
                        @md-confirm="navigateToHome"
                />
                <md-button class="md-dense md-raised" style="position: absolute; bottom: 0" @click="confirmAbort = true">Abbrechen</md-button>
                <md-button class="md-dense md-raised md-primary" style="position: absolute; bottom: 0; margin-left: 10em">Speichern</md-button>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        // TODO: Validierung der Inputfelder
        // TODO: abfrage kommt nur wenn Daten eingegeben worden sind
        // TODO: QR Code generieren
        // TODO: Funktionalität für Speichern implementieren
        name: "Create",
        data: function () {
            return {
                receiver: {
                    firstName: "",
                    lastName: "",
                    iban: "",
                    message: ""
                },
                sender: {
                    iban: ""
                },
                confirmAbort: false
            }
        },
        methods: {
            navigateToHome: function () {
                this.$router.push("/home");
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
        grid-template-rows: 5em 15em 10em;
    }

    .container {
        max-width: 100em;
        display: grid;
        grid-template-columns: 33.3% 33.3% 33.3%;
    }
</style>