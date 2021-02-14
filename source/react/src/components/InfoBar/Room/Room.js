import React, { useEffect, useState, useRef } from "react";
import Participant from "../../../Participant";
import SpeechRecognition, {
    useSpeechRecognition,
} from "react-speech-recognition";
import axios from "axios";

const capitalize = (s) => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
};

const Room = ({ roomName, room, handleLogout }) => {
    const {
        transcript,
        finalTranscript,
        resetTranscript,
    } = useSpeechRecognition();
    const [completeTranscript, setCompleteTranscript] = useState("");
    const [topic, setTopic] = useState("");
    const [participants, setParticipants] = useState([]);
    SpeechRecognition.startListening({
        continuous: true,
    });

    useEffect(() => {
        if (finalTranscript.includes("treehacks")) {
            setTopic("Treehacks 🌲");
        } else if (finalTranscript) {
            const postBody = {
                transcription: finalTranscript,
                speakers: [],
            };
            console.log(postBody);
            console.log("Currently posting");
            axios
                .post(
                    "https://current-tag.herokuapp.com/tagging/transcription",
                    postBody
                )
                .then((res) => {
                    console.log(res.data.topic);
                    setTopic(res.data.topic);
                });

            setCompleteTranscript(
                completeTranscript.concat(finalTranscript, ". ")
            );
            resetTranscript();
        }
    }, [finalTranscript, completeTranscript, resetTranscript]);

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
            <h2 style={{ fontWeight: "bold" }}> 🌊 : {capitalize(topic)}</h2>
            <h3 style={{ fontWeight: "bold" }}>Transcript:</h3>
            <p style={{ textAlign: "center" }}>
                {completeTranscript} {transcript}{" "}
            </p>
            <br></br>
            <h3 style={{ fontWeight: "bold" }}>Remote Participants</h3>
            <div className="remote-participants">{remoteParticipants}</div>
        </div>
    );
};

export default Room;
