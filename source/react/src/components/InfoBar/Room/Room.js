import React, { useEffect, useState, useRef } from "react";
import Participant from "../../../Participant";
import SpeechRecognition, {
    useSpeechRecognition,
} from "react-speech-recognition";

const Room = ({ roomName, room, handleLogout }) => {
    const {
        transcript,
        finalTranscript,
        resetTranscript,
    } = useSpeechRecognition();
    const [completeTranscript, setCompleteTranscript] = useState("");
    const [participants, setParticipants] = useState([]);
    SpeechRecognition.startListening({
        continuous: true,
    });

    useEffect(() => {
        if (finalTranscript) {
            console.log(finalTranscript); // ping API POST WITH FULL STOP!!!
            setCompleteTranscript(
                completeTranscript.concat(finalTranscript, ". ")
            );
            resetTranscript();
        }
    });

    useEffect(() => {
        const participantConnected = (participant) => {
            setParticipants((prevParticipants) => [
                ...prevParticipants,
                participant,
            ]);
        };

        const participantDisconnected = (participant) => {
            setParticipants((prevParticipants) =>
                prevParticipants.filter((p) => p !== participant)
            );
        };

        room.on("participantConnected", participantConnected);
        room.on("participantDisconnected", participantDisconnected);
        room.participants.forEach(participantConnected);
        return () => {
            room.off("participantConnected", participantConnected);
            room.off("participantDisconnected", participantDisconnected);
        };
    }, [room]);

    const remoteParticipants = participants.map((participant) => (
        <Participant key={participant.sid} participant={participant} />
    ));

    return (
        <div className="room">
            <h2>Room: {roomName}</h2>
            <button onClick={handleLogout}>Log out</button>
            <div className="local-participant">
                {room ? (
                    <Participant
                        key={room.localParticipant.sid}
                        participant={room.localParticipant}
                    />
                ) : (
                    ""
                )}
            </div>
            <h3>Transcript:</h3>
            <p>
                {completeTranscript} {transcript}
            </p>
            <br></br>
            <h3>Remote Participants</h3>
            <div className="remote-participants">{remoteParticipants}</div>
        </div>
    );
};

export default Room;
