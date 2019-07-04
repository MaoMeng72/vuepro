import axios from 'axios';
import{VIEW_NAV,UPDATE_LIST,UPDATE_DETAIL} from './types';

export default {
    [VIEW_NAV]:({state,commit},payload)=>{commit(VIEW_NAV,payload)},

    [UPDATE_LIST] : async ({state,commit},payload)=>{
        let res = await axios({url:'http://rap2api.taobao.org/app/mock/223098/alonemall'})
        commit(UPDATE_LIST,res.data.alone);
    },

    [UPDATE_DETAIL] : async ({state,commit},payload)=>{
        let res = await axios({url:'http://rap2api.taobao.org/app/mock/223098/alonemall'})
        commit(UPDATE_DETAIL,res.data.alone[payload]);
    },

};