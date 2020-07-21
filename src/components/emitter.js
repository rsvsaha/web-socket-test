import React from 'react';
import {connect} from 'react-redux';
import {removeEmitter} from '../redux/actions';
import {SocketClientClass} from '../services/socket';
import styles from '../styles/element.module.css';
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
        console.log(this.state.emitter_event);
        this.socketClient.getSocket().emit(this.state.emitter_event,{data:this.state.message});
    }
    
    removeEmitter = () =>{
        this.props.removeEmitter(this.props.myKey.key);
    }    

    render() {
        
        return(
            <div className={styles.holderArea}>
                <div className={styles.emitterFieldHolder}>
                    <div className={styles.labelHolder}>EmitterEvent:</div>
                    <div className={styles.inputHolder}><input type="text" style={{width:"100%"}} value={this.state.emitter_event} onChange={(event)=>{this.setState({emitter_event:event.target.value})}}></input></div>
                </div>
                <div className={styles.emitterFieldHolder}>
                    <div className={styles.labelHolder}>Message:</div>
                    <div className={styles.inputHolder}><textarea style={{width:"100%",height:"100px"}} value={this.state.message} onChange={(event)=>{this.setState({message:event.target.value})}}></textarea></div>
                </div>
                <div className={styles.emitterFieldHolder}>
                    <div className={styles.labelHolder}><input type="button" value="EMIT" onClick={()=>{this.emitEvent()}}></input></div>
                    <div className={styles.inputHolder}><input type="button" value="REMOVE" onClick={this.removeEmitter}></input></div>
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
