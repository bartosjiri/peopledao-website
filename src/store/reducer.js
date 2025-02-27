
import { SET_LAST_PRICE, SET_MARKET_CAP,SET_TOTAL_CIRCULATING, SET_ACCOUNT, SET_WALLET_CONNECT
} from './actionTypes';


const defaultState = {
last_price:0,
market_cap:0,
total_circulating:0,
account:'',
wallet_connect:false,

}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
if (action.type === SET_LAST_PRICE) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.last_price = action.value;
    // console.log("recucern SET_LAST_PRICE action.value : " + action.value)
    return newState;
}
if (action.type === SET_MARKET_CAP) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.market_cap = action.value;
    // console.log("recucern SET_MARKET_CAP action.value : " + action.value)
    return newState;
}
if (action.type === SET_TOTAL_CIRCULATING) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.total_circulating = action.value;
    // console.log("recucern SET_TOTAL_CIRCULATING action.value : " + action.value)
    return newState;
}

if (action.type === SET_ACCOUNT) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.account = action.value;
    console.log("recucern SET_ACCOUNT action.value : " + action.value)
    return newState;
}

if (action.type === SET_WALLET_CONNECT) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.wallet_connect = action.value;
    console.log("recucern SET_WALLET_CONNECT action.value : " + action.value)
    return newState;
}

return state;
}