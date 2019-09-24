import React from "react";

const divStyle = {
  display: "flex",
  flexFlow: "row no-wrap",
  alignItems: "center",
  justifyContent: "left",

  width: "500px",
  borderRadius: "15px",
  padding: "15px",
  background: "white",
  margin: "1px 15px 5px"
};

const labelStyle = {
  paddingLeft: "30px"
};

const imgStyle = {
  display: "flex",
  borderRadius: "50px"
};

class Cardbox extends React.Component {
  state = {
    repos: []
  };

  render() {
    return (
      <div style={divStyle}>
        <div>
          <img
            alt={this.props.imagesAlt}
            style={imgStyle}
            src={this.props.imgsrc}
            width={"50px"}
            height={"50px"}
          />
        </div>
        <div style={labelStyle}>
          <p>
            <b>name</b>
          </p>
          <p>
            <b>Repos Name</b>
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
