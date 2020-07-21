import React from 'react';
import {connect} from 'react-redux';
import {removeListener} from '../redux/actions';
import {SocketClientClass} from '../services/socket';
import styles from '../styles/element.module.css';
class ListenerComponent extends React.Component{

    constructor(props){
        super(props);
        console.log(props);
        this.state = {
            message:'',
            listener_event:''
        }
        
    }
    
    startListening = () => {
        this.socketClient = new SocketClientClass();
        this.socketClient.getSocket().on(this.state.listener_event,(data)=>{
            console.log("Received");
            this.setState({message:JSON.stringify(data)});
        });
    }
    
    removeListener = () =>{
        this.props.removeListener(this.props.myKey.key);
    }    

    render() {
        
        return(
            <div className={styles.holderArea}>
                <div className={styles.listenerConfigurationArea}>
                <div style={{flex:1}}>ListenerEvent:</div>
                <div style={{flex:3}}><input style={{width:"100%"}} type="text" value={this.state.listener_event} onChange={(event)=>{this.setState({listener_event:event.target.value})}}></input></div>
                <div style={{flex:1}}><input type="button" value="LISTEN" onClick={()=>{this.startListening()}}></input></div>
                <div style={{flex:1}}><input type="button" value="REMOVE" onClick={this.removeListener}></input></div>
                </div>
                <div className={styles.listenerMesssageArea} >Message:{this.state.message}</div>
                
            </div>


        );


    }



}

const mapDispatchToProps = (dispatch) => {
   return { 
       removeListener : (index) => { dispatch(removeListener(index))}
    }
}


export default connect(null,mapDispatchToProps)(ListenerComponent)
