import React from 'react';
import ListenerComponent from './listerner';
import {connect} from 'react-redux';
import styles from '../styles/formTest.module.css';

class ListnerContainerComponent extends React.Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className={styles.container}>
            
                    {   
                        this.props.listenerArray.map((val) =>{
                            // console.log(key);
                            return (<ListenerComponent key={val.key} myKey={val}></ListenerComponent>);
                        })
                    }

                </div>
        );
    }

}
const mapStateToProps = (state) => {
    const {listenerReducers} = state;
    console.log(state);
    return {
        listenerArray: listenerReducers.listenerArray
    }
}

export default connect(mapStateToProps)(ListnerContainerComponent);