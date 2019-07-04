import Vue from "vue";
import vuex from "vuex";
Vue.use(vuex);

import actions from "./store/actions";
import mutations from "./store/mutations";
import state from "./store/state";
import getters from "./store/getters";

let store = new vuex.Store({
    actions,mutations,state,getters
})

export default  store;