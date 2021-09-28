import React from "react";
import JoinBlock from "./components/JoinBlock";
import reducer from "./reducer";
import socket from "./socket";

function App() {
    const [state, dispatch] = React.useReducer(reducer, {joined: false, roomId: null, userName: null});

    const onLogin = (obj) => {
        dispatch({
            type: 'JOINED',
            payload: obj,
        });
        socket.emit('ROOM:JOIN', obj);
    };

    console.log(state);

    return (
        <div className="container mx-auto min-h-screen flex items-center justify-center">
            {!state.joined && <JoinBlock onLogin={onLogin}/>}
        </div>
    );
}

export default App;
