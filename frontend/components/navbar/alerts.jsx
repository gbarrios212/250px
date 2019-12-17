import React from "react";

class Alerts extends React.Component{
    constructor(props) {
        super(props)
        this.state = { message: this.props.message }
    }

    componentDidMount() {
        setTimeout(() => this.props.clearSuccess(), 4000);
    }

    render() {
        if (this.state.message) {
            return (
                <div className="alert">
                    {this.state.message}
                </div>
            )
        } else {
            return <div></div>;
        }
    }
}

export default Alerts;