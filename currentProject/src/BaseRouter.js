import React from "react";
import { Route } from "react-router-dom";

import VideoList from "./containers/VideoListView";
import UploadVideo from "./containers/UploadVideoView";
import VideoDetail from "./containers/VideoDetailView";
import Login from "./containers/Login";
import Signup from "./containers/Signup";

const BaseRouter = () => (
    <div>
        <Route exact path="/" component={VideoList} />{" "}
        <Route exact path="/videos/:videoID/" component={VideoDetail} />{" "}
        <Route exact path="/login/" component={Login} />{" "}
        <Route exact path="/signup/" component={Signup} />{" "}
        <Route exact path="/upload/" component={UploadVideo} />{" "}
    </div>
);

export default BaseRouter;
