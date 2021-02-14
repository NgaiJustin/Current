import React from "react";
import axios from "axios";
import { connect } from "react-redux";



class Profile extends React.Component {
    state = {
        profile: {},
        username: null
    };

    componentDidMount() {
        const username = this.props.match.params.username;
        // axios.get(`http://127.0.0.1:8000/api/profile/${username}`).then(res => {
        //     this.setState({
        //         profile: res.data
        //     });
        // });
        this.setState({
            // profile: res.data,
            username: username
        });

    }

    render() {
        return (
            <div>
                <h1 className="profile_title">{this.state.username}</h1>
                <div>Profile implementation here</div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.token,
    };
};

export default connect(mapStateToProps)(Profile);
