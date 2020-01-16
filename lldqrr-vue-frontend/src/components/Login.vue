<template>
    <v-app id="login">
        <v-content>
            <v-container class="fill-height" fluid>
                <v-row align="center" justify="center">
                    <v-col cols="12" sm="8" md="4">
                        <v-card class="elevation-12">
                            <v-toolbar color="primary" dark flat>
                                <v-toolbar-title>Login</v-toolbar-title>
                                <v-spacer/>
                            </v-toolbar>
                            <v-card-text>
                                <v-form>
                                    <v-text-field
                                            v-model="user.email"
                                            label="Email"
                                            prepend-icon="mdi-account"
                                            type="email"
                                    />
                                    <v-text-field
                                            v-model="user.password"
                                            label="Password"
                                            prepend-icon="mdi-lock"
                                            type="password"
                                    />
                                </v-form>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer/>
                                <md-dialog class="registerDialog" :md-active.sync="isRegisterOpen">
                                    <h1 style="margin-bottom: 0.5em">Registrieren</h1>
                                    <md-field>
                                        <label>Email</label>
                                        <md-input v-model="user.email"></md-input>
                                    </md-field>
                                    <md-field>
                                        <label>Passwort</label>
                                        <md-input type="password" v-model="user.password"></md-input>
                                    </md-field>
                                    <md-button class="md-dense md-raised md-primary"
                                               style="width: 150px; margin-left: 0" @click="registerToApp()">
                                        Registrieren
                                    </md-button>
                                </md-dialog>

                                <md-button class="md-dense md-raised md-primary" @click="isRegisterOpen = true">
                                    Registrieren
                                </md-button>
                                <md-button @click="login()" class="md-dense md-raised md-primary">Login</md-button>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    import firebase from 'firebase';
    import "firebase/auth"
    import Cookies from 'js-cookie'

    export default {
        data: function () {
            return {
                error: "",
                isRegisterOpen: false,
                loggedInUser: {},
                user: {
                    email: "",
                    password: "",
                },
            }
        },
        methods: {
            registerToApp() {
                firebase
                    .auth()
                    .createUserWithEmailAndPassword(this.user.email, this.user.password)
                    .then(response => {
                        Cookies.set("userId", response.user.uid);
                        this.$store.loggedIn = true;
                        this.$router.push('/home');
                    })
                    // eslint-disable-next-line no-unused-vars
                    .catch(err => {
                        this.error = "Es ist ein Fehler aufgetreten. Das Passwort muss mind 6 Stellen haben!";
                    });
            },
            login() {
                firebase
                    .auth()
                    .signInWithEmailAndPassword(this.user.email, this.user.password)
                    .then(response => {
                        Cookies.set("userId", response.user.uid);
                        this.$store.loggedIn = true;
                        this.$router.push('/home');
                    })
                    // eslint-disable-next-line no-unused-vars
                    .catch(err => {
                        this.error = "Es ist ein Fehler aufgetreten. Das Passwort muss mind 6 Stellen haben!";
                    });
            }
        }
    }
</script>

<style>
    .registerDialog {
        padding: 3em 3em 1em 3em;
        height: 21em;
        width: 40em;
    }
</style>