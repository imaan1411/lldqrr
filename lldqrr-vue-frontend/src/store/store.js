import Vue from "vue"
import Vuex from "vuex"
import { vuexfireMutations,  } from 'vuexfire'
import {dbb} from '@/firebaseConfig'
import Cookies from 'js-cookie'

Vue.use(Vuex);

export default new Vuex.Store({
    mutations: {
        ...vuexfireMutations,
        createBill(state, bill) {
            state.bill = bill;
            dbb.child(Cookies.get("userId")).child("Bill").push(state.bill);
        },
    },
    actions: {

    },
    state: {
        bill: {
            billId: "",
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