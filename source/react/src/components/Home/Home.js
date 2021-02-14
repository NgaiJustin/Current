import React from "react";
import { connect } from "react-redux";


class Home extends React.Component {
    render() {
        if (this.props.username != null)
        {
            return (
                <div>
                    <h1> Welcome, {this.props.username}. </h1>
                </div>
            );
        }
        else {
            return (
                <div>
                    <h1> What is Current? </h1>
                    <div>need to write a description here!!t</div>
                </div>
            );

        }

    }
}


const mapStateToProps = state => {
    return {
        username: state.username
    };
};

export default connect(mapStateToProps)(Home);