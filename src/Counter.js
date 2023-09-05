import React from 'react';
import { connect } from 'react-redux';

const Counter = (props) => {
    return(
        <div>
            <h1>Contator Redux</h1>
            <p>Contagem: {props.count}</p>
            <button onClick={props.incremento}>Adicionar</button>
            <button onClick={props.decremento}>Desadicionar</button>
        </div>
    );

};

const mapState = (state) => {
    return{
        count: state.count,

    };
};

const mapAssociate = (dispatch)=>{
    return{
        incremento: () => dispatch({type: 'INCREMENTO'}),
        decremento: () => dispatch({type: 'DESCREMENTO'}),
    };
};

export default connect(mapState, mapAssociate)(Counter);