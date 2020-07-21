import React from 'react';
import EmitterComponent from './emitter';
import {connect} from 'react-redux';
import styles from '../styles/formTest.module.css';

class EmitterContainerComponent extends React.Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className={styles.container}>
                    {   
                        this.props.emitterArray.map((val) =>{
                            // console.log(key);
                            return (<EmitterComponent key={val.key} myKey={val}></EmitterComponent>);
                        })
                    }

                </div>
        );
    }

}
const mapStateToProps = (state) => {
    const {emitterReducers} = state;
    console.log(state);
    return {
        emitterArray: emitterReducers.emitterArray
    }
}

export default connect(mapStateToProps)(EmitterContainerComponent);