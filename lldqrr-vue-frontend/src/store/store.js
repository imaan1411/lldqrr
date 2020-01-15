import Vue from "vue"
import Vuex from "vuex"
import { vuexfireMutations,  } from 'vuexfire'
import {lldqrrdb} from '@/firebaseConfig'
import Cookies from 'js-cookie'

Vue.use(Vuex);

    let id = 1;
    if(getCookie("userId")) {
        lldqrrdb.child(Cookies.get("userId")).child("Bill").on("value", a => {
            // eslint-disable-next-line no-unused-vars
            a.forEach(childSnapshot => {
                id++;
            });
        });
    }

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

function getCookie(name) {
    let dc = document.cookie;
    let prefix = name + "=";
    let begin = dc.indexOf("; " + prefix);
    if (begin === -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    }
    else
    {
        begin += 2;
        var end = document.cookie.indexOf(";", begin);
        if (end === -1) {
            end = dc.length;
        }
    }
    return decodeURI(dc.substring(begin + prefix.length, end));
}
