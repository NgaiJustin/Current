import React from "react";
import { Route } from "react-router-dom";

import VideoList from "./containers/VideoListView";
import UploadVideo from "./containers/UploadVideoView";
import VideoDetail from "./containers/VideoDetailView";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Chat from "./components/Chat/Chat";
import Join from "./components/Join/Join";
import Speech from "./components/Speech/Speech";
import VidCall from "./VidCall";

const BaseRouter = () => (
    <div>
        <Route exact path="/" component={VideoList} />{" "}
        <Route exact path="/videos/:videoID/" component={VideoDetail} />{" "}
        <Route exact path="/login/" component={Login} />{" "}
        <Route exact path="/signup/" component={Signup} />{" "}
        <Route exact path="/upload/" component={UploadVideo} />{" "}
        <Route exact path="/join" component={Join} />
        <Route path="/chat" component={Chat} />
        <Route path="/vidcall" component={VidCall} />
    </div>
);

export default BaseRouter;
