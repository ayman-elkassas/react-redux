import {createStore} from 'redux'

//todo:create Reducer like mutation in vuex
//todo:every return reducer set this data as value of state
//todo:then in next deal with state last return value is the value of current state
//* is a js function return updated state
const reducer=(state=[],action)=>{
    if(action.type==="split"){
        return action.payload.split(' ')
    }else if(action.type==="addName"){
        state.push(action.payload)
    }
    return state
}

//todo:create store
//*should store contain at least one reducer
const store=createStore(reducer)

//todo:getFunction() like getter in vuex
// console.log(store.getState());

//todo:Action -> should be as the following syntax
const action={
    type:"split",
    payload:"ahmed mohamed"
}

store.dispatch(action)

console.log(store.getState());

const newAction={
    type:"addName",
    payload:"ali"
}

store.dispatch(newAction)

console.log(store.getState());

