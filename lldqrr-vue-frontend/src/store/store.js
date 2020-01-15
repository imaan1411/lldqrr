import Vue from "vue"
import Vuex from "vuex"
import { vuexfireMutations,  } from 'vuexfire'
import {lldqrrdb} from '@/firebaseConfig'
import Cookies from 'js-cookie'

Vue.use(Vuex);

    let id = 1;
    lldqrrdb.child(Cookies.get("userId")).child("Bill").on("value", a => {
        // eslint-disable-next-line no-unused-vars
        a.forEach(childSnapshot => {
            id++;
        });
    });

export default new Vuex.Store({
    mutations: {
        ...vuexfireMutations,
        createBill(state, bill) {
            state.bill = bill;
            let withBillId = {id, ...state.bill};
            lldqrrdb.child(Cookies.get("userId")).child("Bill").push(withBillId);
        },
    },
    actions: {
    },
    state: {
        bill: {
            id: "",
            amount: "",
            currency: "",
            creditorBuildingNumber: "",
            creditorCity: "",
            creditorLand: "",
            creditorPostalCode: "",
            creditorStreet: "",
            creditorFirstName: "",
            creditorLastName: "",
            qrType: "",
            referenceNumber: "",
            referenceType: "",
            structuredPaymentInfo: "",
            unstructuredPaymentInfo: "",
            version: ""
        },
        loggedIn: false
    },
});