import React from "react";
import { connect } from "react-redux";

class Home extends React.Component {
    render() {
        if (this.props.username != null) {
            return (
                <div>
                    <h1> Welcome, {this.props.username}. </h1>
                </div>
            );
        } else {
            return (
                <div>
                    <h3 style={{ fontWeight: "bold" }}> What is Current 🌊?</h3>
                    <div>
                        Search and discover interesting conversations with real
                        time analytics
                    </div>
                    <br></br>
                    <br></br>

                    <div>
                        <h3 style={{ fontWeight: "bold" }}>Learn more here:</h3>
                        <p>https://github.com/NgaiJustin/Current</p>
                    </div>
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        username: state.username,
    };
};

export default connect(mapStateToProps)(Home);
