export default function exampleReducer(state=[],action) {
    switch(action.type){
        case 'CREATE_EXAMPLE':
         return [...state,Object.assign({},action.payload)];
        default:
         return state;
    }
}