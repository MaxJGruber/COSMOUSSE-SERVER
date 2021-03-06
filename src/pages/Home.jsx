import React from "react";
import AppMap from "../components/AppMap";
import API from "../api/apiHandler";
import NavMain from "../components/NavMain";
import "../styles/global.css";

class Home extends React.Component {
  state = { items: [] };

  componentDidMount() {
    API.getItems("/items").then((data) => {
      this.setState({ items: data });
    });
  }

  render() {
    return (
      <div>
        <div className="upperScreen">
          <AppMap items={this.state.items} onClickMap={this.props.onClickMap} />
        </div>
        <NavMain page="home" />
      </div>
    );
  }
}

export default Home;
