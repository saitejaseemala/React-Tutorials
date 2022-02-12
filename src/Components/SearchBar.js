import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: "",
    };
  }

  inputChangeHandler = (e) => {
    this.setState({
      textInput: e.target.value,
    });
  };

  onFormSubmit = (e) => {
      e.preventDefault();
      this.props.onSubmit(this.state.textInput);
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.textInput}
              onChange={this.inputChangeHandler}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
