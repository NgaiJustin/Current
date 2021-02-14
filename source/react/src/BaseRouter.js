import React from "react";
import { Route } from "react-router-dom";

import Login from "./components/Login";
import Logout from "./components/Logout";
import Signup from "./components/Signup";
import Chat from "./components/Chat/Chat";
import Join from "./components/Join/Join";
import Speech from "./components/Speech/Speech";
import VidCall from "./VidCall";
import Home from "./components/Home/Home"
const BaseRouter = () => (
    <div>
        <Route exact path="/" component={Home} />{" "}
        <Route exact path="/login/" component={Login} />{" "}
        <Route path="/logout" component={Logout} />
        <Route exact path="/signup/" component={Signup} />{" "}
        <Route exact path="/join" component={Join} />
        <Route path="/chat" component={Chat} />
        <Route path="/vidcall" component={VidCall} />
    </div>
);

export default BaseRouter;
