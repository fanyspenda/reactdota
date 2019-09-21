import React from "react";
import Index from "./pages/index";

const appStyle = {
  height: "100%",
  width: "100%",
  background: "grey"
};

class App extends React.Component {
  render() {
    return (
      <div className="App" style={appStyle}>
        <br />
        <Index />
      </div>
    );
  }
}

export default App;
