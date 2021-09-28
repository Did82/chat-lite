import React from 'react';
import axios from "axios";

const JoinBlock = ({onLogin}) => {
    const [roomId, setRoomId] = React.useState('');
    const [userName, setUserName] = React.useState('');
    const [isLoading, setLoading] = React.useState(false);

    const onEnter = () => {
        if (!roomId || !userName) alert('Не верные данные!');
        console.log(roomId, userName);
        const obj = {roomId, userName};
        setLoading(true);
        axios.post('/rooms', obj)
            .then(onLogin(obj))
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
                    <button disabled={isLoading} className="btn btn-primary w-full" onClick={onEnter}>
                        {isLoading ? 'Connection...' : 'Connect'}
                    </button>
                </div>
            </div>
        </div>

    );
};

export default JoinBlock;

