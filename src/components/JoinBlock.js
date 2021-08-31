import React from 'react';
import axios from "axios";

const JoinBlock = ({onLogin}) => {
    const [roomId, setRoomId] = React.useState('');
    const [userName, setUserName] = React.useState('');

    const onEnter = () => {
        if (!roomId || !userName) alert('Не верные данные!');
        console.log(roomId, userName);
        axios.post('/rooms', {roomId, userName})
            .then(onLogin)
            .catch(err => console.error(err));
    }

    return (
        <div className="card bordered shadow-2xl lg:card-side bg-info text-primary-content max-w-sm w-full">
            <div className="card-body w-full space-y-2">
                <div className="card-title">
                    <h3>Connecting to room</h3>
                </div>
                <input type="text" placeholder="Rooms ID" className="input" value={roomId}
                       onChange={e => setRoomId(e.target.value)}/>
                <input type="text" placeholder="Username" className="input" value={userName}
                       onChange={e => setUserName(e.target.value)}/>
                <div className="card-actions w-full">
                    <button className="btn btn-primary w-full" onClick={onEnter}>Connect</button>
                </div>
            </div>
        </div>

    );
};

export default JoinBlock;

