import React from 'react';
import ListenerComponent from './listerner';
import {connect} from 'react-redux';

class ListnerContainerComponent extends React.Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
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