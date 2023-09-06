import React from 'react';
import { connect } from 'react-redux';

const Counter = (props) => {
    return(
        <div className='w-screen h-screen flex flex-col bg-zinc-400 items-center justify-center'>
            <div className='flex-col flex bg-zinc-500 items-center rounded-xl w-4/12'>
                <h1>Contator Redux</h1>
                <h2 className='font-semibold text-lg p-6'>Contagem: {props.count}</h2>
                <div className='flex flex-row items-center justify-center pb-4 gap-10'>
                    <button onClick={props.incremento} className='px-4 py-2 bg-green-500 rounded' >Adicionar</button>
                    <button onClick={props.decremento} className='px-4 py-2 bg-red-500 rounded' >Desadicionar</button>
                </div>
            </div>
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