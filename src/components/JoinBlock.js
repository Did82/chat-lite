import React from 'react';
import socket from "../socket";

const JoinBlock = () => {
    return (
        <div className="card bordered shadow-2xl lg:card-side bg-info text-primary-content max-w-sm w-full">
            <form className="card-body w-full">
                <div className="card-title">
                    <h3>Connecting to room</h3>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Rooms ID</span>
                    </label>
                    <input type="text" placeholder="rooms id" className="input input-bordered"/>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Username</span>
                    </label>
                    <input type="text" placeholder="username" className="input input-bordered"/>
                </div>
                <div className="card-actions w-full">
                    <button className="btn btn-primary w-full">Connect</button>
                </div>
            </form>
        </div>

    );
};

export default JoinBlock;
