import * as types from './types';
let mutations = {
    [types.VIEW_NAV]:(state,payload)=> state.bNav = payload,
    [types.UPDATE_LIST]:(state,payload)=> state.list = payload,
    [types.UPDATE_DETAIL]:(state,payload)=> state.detail = payload

}

export default mutations;