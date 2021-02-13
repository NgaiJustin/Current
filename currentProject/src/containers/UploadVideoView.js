import React from "react";
import CustomForm from "../components/CustomForm";

import { connect } from "react-redux";


class UploadVideo extends React.Component {
    render() {
        return (
            <div>
                <h2> Upload a video: </h2>
                <CustomForm requestType="post" videoID={null} btnText="Create" />
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        token: state.token
    };
};

export default connect(mapStateToProps)(UploadVideo);