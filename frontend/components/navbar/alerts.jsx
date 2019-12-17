import React from "react";

class Flash extends React.Component{
    constructor(props) {
        super(props)
        this.state = { success: "" };
    }

    render() {
        return (
            <div className="alert">
                {this.state.success}
            </div>
        )
    }
}

export default Flash;