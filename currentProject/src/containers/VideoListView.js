import React from "react";
import axios from "axios";
import Videos from "../components/Videos";


class VideoList extends React.Component {
    state = {
        videos: []
    };

    fetchVideos = () => {
        axios.get("http://127.0.0.1:8000/api/").then(res => {
            this.setState({
                videos: res.data
            });
        });
    }

    componentDidMount() {
        this.fetchVideos();
    }

    componentWillReceiveProps(newProps) {
        if (newProps.token) {
            this.fetchVideos();
        }
    }

    render() {
        return (
            <div>
                <h1> Feed: </h1>
                <Videos data={this.state.videos} /> <br />
            </div>
        );
    }
}

export default VideoList;
