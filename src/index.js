import React from "react";
import ReactDOM from "react-dom";

class Comp extends React.Component {
    render() {
        return (
            <div>Component</div>
        );
    }
}

ReactDOM.render(<Comp />, mount);
