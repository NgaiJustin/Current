import React from "react";
import { connect } from "react-redux";


class Home extends React.Component {
    render() {
        return (
            <div>
                <h1> Welcome {this.props.username} </h1>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        username: state.username
    };
};

export default connect(mapStateToProps)(Home);