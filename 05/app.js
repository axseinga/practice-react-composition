import React from "react";
import ReactDOM from "react-dom";

import Textarea from "./Textarea";

class App extends React.Component {
    state = {
        text: "",
    };

    updateState = (input) => {
        this.setState({ text: input });
    };

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("snapshot");
        const textarea = this.el;
        console.log(textarea);
        return textarea.scrollHeight;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(snapshot.height);
        console.log(this.refUl.offsetHeight);
    }

    render() {
        const { text } = this.state;
        return <Textarea content={text} updateState={this.updateState} />;
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
