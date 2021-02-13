import React from "react";
import { Route } from "react-router-dom";

import VideoList from "./containers/VideoListView";
import UploadVideo from "./containers/UploadVideoView";
import VideoDetail from "./containers/VideoDetailView";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import CreateRoom from "./containers/CreateRoomView";
import Room from "./containers/RoomView";

const BaseRouter = () => (
    <div>
        <Route exact path="/" component={VideoList} />{" "}
        <Route exact path="/videos/:videoID/" component={VideoDetail} />{" "}
        <Route exact path="/login/" component={Login} />{" "}
        <Route exact path="/signup/" component={Signup} />{" "}
        <Route exact path="/upload/" component={UploadVideo} />{" "}
        <Route exact path="/createroom/"  component={CreateRoom} />
        <Route exact path="/room/:roomID" component={Room} />
    </div>
);

export default BaseRouter;
