import React from "react";
import Cardbox from "../components/Cardbox";

const divStyle = {
  height: "100%",
  width: "100%",
  display: "flex",
  flexFlow: "row wrap"
};

class Index extends React.Component {
  render() {
    return (
      <div style={divStyle}>
        <Cardbox name="Tiny" localizedName="Tiny Winnie Bitty" />
        <Cardbox name="Onee-Chan" localizedName="Lola Lolita" />
      </div>
    );
  }
}

export default Index;
