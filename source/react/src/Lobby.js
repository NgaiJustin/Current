import React from "react";

const Lobby = ({
    roomName,
    handleRoomNameChange,
    handleSubmit,
    connecting,
}) => {
    return (
        <form class="join-form" onSubmit={handleSubmit}>
            <h2>Join a Room</h2>
            <div>
                <label htmlFor="room">Room name:</label>
                <input
                    type="text"
                    id="room"
                    value={roomName}
                    onChange={handleRoomNameChange}
                    readOnly={connecting}
                    required
                />
            </div>

            <button className="join-btn"type="submit" disabled={connecting}>
                {connecting ? "Connecting" : "Join"}
            </button>
        </form>
    );
};

export default Lobby;
