import React from "react";
import SpeechRecognition, {
    useSpeechRecognition,
} from "react-speech-recognition";
import Button from "@material-ui/core/Button";
import KeyboardVoiceIcon from "@material-ui/icons/KeyboardVoice";
import Stop from "@material-ui/icons/Stop";
import Clear from "@material-ui/icons/Clear";

const Dictaphone = () => {
    const { transcript, resetTranscript } = useSpeechRecognition();

    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return null;
    }

    return (
        <div>
            <p>{transcript}</p>
            <Button
                variant="contained"
                color="primary"
                startIcon={<KeyboardVoiceIcon />}
                onClick={SpeechRecognition.startListening}
            >
                Start
            </Button>
            &nbsp;&nbsp;&nbsp;
            <Button
                variant="contained"
                color="secondary"
                startIcon={<Stop />}
                onClick={SpeechRecognition.stopListening}
            >
                Stop
            </Button>
            &nbsp;&nbsp;&nbsp;
            <Button
                variant="contained"
                color="default"
                startIcon={<Clear />}
                onClick={resetTranscript}
            >
                Reset
            </Button>
        </div>
    );
};
export default Dictaphone;
