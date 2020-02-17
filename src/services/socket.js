import io from 'socket.io-client';
export class SocketClientClass {

    socket;
    socketclientClass;
    
    constructor (url) {
        if(SocketClientClass.socketclientClass instanceof SocketClientClass) {
            return SocketClientClass.socketclientClass;
        }
        this.socket = io.connect(url);
        Object.freeze(this);
        SocketClientClass.socketclientClass = this;
    }
    getSocket() {
        return this.socket;
        
    }

}