import React from 'react';
import ListenerComponent from './listerner';
import {connect} from 'react-redux';
import {addEmitter,addListener} from '../redux/actions';
import ListenerContainerComponent from './listenerContainer';
import EmitterContainerComponent from './emitterContainer';
import styles from '../styles/formTest.module.css';
import {SocketClientClass} from '../services/socket';
class FormTest extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            connectionURL:'',
        }
        this.upDateFieldValue = this.upDateFieldValue.bind(this);
    }
    
    upDateFieldValue({target}) {
        this.setState({[target.id]:target.value});
    }

    connectToSocket = (url)=> {
        this.socketClient = new SocketClientClass(url);
         
    }

    disconnectFromSocket = () =>{
        console.log(this.socketClient.getSocket().disconnect());   
    }

    createListeners = () =>{
        this.props.createListeners();
        // this.setState({listenerArray:this.props.listenerArray});
    }

    createEmitters = () => {
        this.props.createEmitters();
    }


    render() {
        // console.log(this.props);
        return (
            <div className={styles.formTest}>
                <div className={styles.urlarea}>
                <label>Connection URL:{this.state.connectionURL}</label>
                <br></br>
                <input id="connectionURL" type="text" value={this.state.connectionURL} onChange={this.upDateFieldValue}></input>
                <br></br>
                <input type="button" value="CONNECT" onClick={()=>{this.connectToSocket(this.state.connectionURL)}}></input>
                <input type="button" value="DISCONNECT" onClick={()=>{this.disconnectFromSocket()}}></input>
                
                <br></br>
                <input type="button" value="ADD LISTNER" onClick={()=>{this.createListeners()}}></input>
                <input type="button" value="ADD EMITTER" onClick={()=>{this.createEmitters()}}></input>
                </div>
                <div className={styles.containerarea}>                
                    <div className={styles.listenerArea}><ListenerContainerComponent></ListenerContainerComponent></div>
                    <div className={styles.emitterArea}><EmitterContainerComponent></EmitterContainerComponent></div>
                </div>

            </div>
        );

    }


}

const mapDispatchToProps = (dispatch) => {
    return {
            createListeners: () => {dispatch(addListener())},
            createEmitters: () => {dispatch(addEmitter())}
            }
};



export default connect(null,mapDispatchToProps)(FormTest);