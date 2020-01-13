import Vue from "vue"
import Vuex from "vuex"
import { vuexfireMutations,  } from 'vuexfire'
import {dbb} from '@/firebaseConfig'

Vue.use(Vuex);


export default new Vuex.Store({
    mutations: {
        ...vuexfireMutations,
        createBill(state, bill) {
            state.bill = bill;
            dbb.child("Bill").push(bill);
        },
    },
    actions: {

    },
    state: {
        bill: {
            test: {
              asdf: "asdf"
            },
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
        userr: {
            userId: "1234",
                userDetail: {
                    firstName: "cedi",
                    lastName: "brütsch"
                },
                bill: {
                    iban: "CH1234"
                }
        },
        loggedIn: false
    },
});