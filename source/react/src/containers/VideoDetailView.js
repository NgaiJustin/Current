import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Button, Card } from "antd";
import CustomForm from "../components/CustomForm";


class VideoDetail extends React.Component {
    state = {
        video: {}
    };

    componentDidMount() {
        const videoID = this.props.match.params.videoID;
        axios.get(`http://127.0.0.1:8000/api/${videoID}`).then(res => {
            this.setState({
                video: res.data
            });
        });
    }

    handleDelete = event => {
        event.preventDefault();
        const videoID = this.props.match.params.videoID;
        axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${this.props.token}`
        };
        axios.delete(`http://127.0.0.1:8000/api/${videoID}/delete/`)
            .then(res => {
                if (res.status === 204) {
                    this.props.history.push(`/`);
                }
            })
    };

    render() {
        return (
            <div>
                <Card title={this.state.video.title}>
                    <p> {this.state.video.content} </p>
                </Card>
                <CustomForm
                    {...this.props}
                    token={this.props.token}
                    requestType="put"
                    videoID={this.props.match.params.videoID}
                    btnText="Update"
                />
                <form onSubmit={this.handleDelete}>
                    <Button type="danger" htmlType="submit">
                        Delete
          </Button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.token
    };
};

export default connect(mapStateToProps)(VideoDetail);
