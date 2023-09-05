const initialState = {
    count: 0,


};

const counterReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'INCREMENTO':
            return{
                count: state.count+1,
            };
        case 'DESCREMENTO':
            return{
                count: state.count -1,
            };
        default:
            return state;

    }

};
export default counterReducer;