import React from 'react';
import {connect} from 'react-redux';
import {removeEmitter} from '../redux/actions';
import {SocketClientClass} from '../services/socket';
import styles from '../styles/emitter.module.css';
class EmitterComponent extends React.Component{

    constructor(props){
        super(props);
        console.log(props);
        this.state = {
            message:'',
            emitter_event:''
        }
        
    }
    
    emitEvent = () => {
        this.socketClient = new SocketClientClass(); 
        this.socketClient.getSocket().emit(this.state.emitter_event,{data:this.state.message});
    }
    
    removeEmitter = () =>{
        this.props.removeEmitter(this.props.myKey.key);
    }    

    render() {
        
        return(
            <div className={styles.holderArea}>
                <div className={styles.emitterFieldHolder}>
                    <div className={styles.emitterField +' '+styles.leftAligned}>EmitterEvent:{this.state.emitter_event}</div>
                    <div className={styles.emitterField +' '+styles.rightAligned}><input type="text" value={this.state.emitter_event} onChange={(event)=>{this.setState({emitter_event:event.target.value})}}></input></div>
                </div>
                <div className={styles.emitterFieldHolder}>
                    <div className={styles.emitterField +' '+styles.leftAligned}>Message:{this.state.message}</div>
                    <div className={styles.emitterField +' '+styles.rightAligned}><textarea value={this.state.message} onChange={(event)=>{this.setState({message:event.target.value})}}></textarea></div>
                </div>
                <div className={styles.emitterFieldHolder}>
                    <div className={styles.emitterField +' '+styles.leftAligned}><input type="button" value="EMIT" onClick={()=>{this.emitEvent()}}></input></div>
                    <div className={styles.emitterField +' '+styles.rightAligned}><input type="button" value="REMOVE" onClick={this.removeEmitter}></input></div>
                </div>
            </div>


        );


    }



}

const mapDispatchToProps = (dispatch) => {
   return { 
       removeEmitter : (index) => { dispatch(removeEmitter(index))}
    }
}


export default connect(null,mapDispatchToProps)(EmitterComponent)
