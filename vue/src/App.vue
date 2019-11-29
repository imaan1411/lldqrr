<template>
    <v-app>
        <v-content>
            <login/>
            <home/>

        </v-content>
    </v-app>
</template>

<script>
    import Login from "./components/Login";
    import Home from "./components/Home";

    export default {
        name: 'App',

        components: {
            Login,
            Home
        },

        data: () => ({



        }),
    };
</script>
