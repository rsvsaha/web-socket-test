import React from 'react';
import {connect} from 'react-redux';
import {removeListener} from '../redux/actions';
import {SocketClientClass} from '../services/socket';

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
            <div>
                <span>Message:{this.state.message}</span>
                <span>ListenerEvent:{this.state.listener_event}</span>
                <span><input type="text" value={this.state.listener_event} onChange={(event)=>{this.setState({listener_event:event.target.value})}}></input></span>
                <span><input type="button" value="LISTEN" onClick={()=>{this.startListening()}}></input></span>
                <span><input type="button" value="REMOVE" onClick={this.removeListener}></input></span>
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
