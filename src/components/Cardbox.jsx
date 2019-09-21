import React from "react";
import sampleimage from "../sampleImage.png";
import Axios from "axios";

const divStyle = {
  display: "flex",
  flexFlow: "row no-wrap",
  alignItems: "center",
  justifyContent: "center",

  width: "300px",
  borderRadius: "15px",
  padding: "15px",
  background: "white",
  marginLeft: "15px"
};

const imgStyle = {
  display: "flex",
  borderRadius: "40px",
  paddingRight: "10px"
};

class Cardbox extends React.Component {
  render() {
    return (
      <div style={divStyle}>
        <div>
          <img
            style={imgStyle}
            src={sampleimage}
            width={"60px"}
            height={"60px"}
          />
        </div>
        <div>
          <p>
            <b>name</b>
          </p>
          <p>
            <b>localized name</b>
          </p>
        </div>
        <div>
          <p>: {this.props.name}</p>
          <p>: {this.props.localizedName}</p>
        </div>
      </div>
    );
  }
}

export default Cardbox;
