import axios from "axios";
import React from "react";
import SearchBar from "./SearchBar";
import unsplash from "../api/unsplash";
import ImagesList from "./ImagesList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
  }

  onSearchSubmit = async (textInput) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: textInput },
    });
    this.setState({
      images: response.data.results,
    });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImagesList images={this.state.images} />
      </div>
    );
  }
}

export default App;
