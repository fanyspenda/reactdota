import React from "react";
import Cardbox from "../components/Cardbox";
import axios from "axios";
import sampleimage from "../sampleImage.png";

const divStyle = {
  height: "100%",
  width: "100%",
  display: "flex",
  flexFlow: "row wrap",
  justifyContent: "center",
  alignItems: "center"
};

class Index extends React.Component {
  state = {
    repos: []
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axios.get(" https://api.github.com/users/fanyspenda/repos").then(res => {
      const repos = res.data;
      this.setState({
        repos: repos
      });
    });
  };
  render() {
    {
      if (this.state.repos.length > 0) {
        console.log(this.state.repos);
      }
    }

    return (
      <div style={divStyle}>
        {this.state.repos.length > 0
          ? this.state.repos.map((value, index) => {
              return (
                <Cardbox
                  key={value + index}
                  imagesAlt={value + index}
                  imgsrc={this.state.repos[index].owner.avatar_url}
                  name={this.state.repos[index].name}
                  localizedName={this.state.repos[index].full_name}
                />
              );
            })
          : null}
      </div>
    );
  }
}

export default Index;
