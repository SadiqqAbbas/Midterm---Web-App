import React, { Component } from "react";

export default class NewShop extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      description: "",
      isCompleted: false,
      quantityPrompt: "",
      pricePrompt: "",
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    console.log("Name:", this.state.name);
    console.log("Description:", this.state.description);
    console.log("Is Completed:", this.state.isCompleted);

    // Clear the form fields
    this.setState({
      name: "",
      description: "",
      isCompleted: false,
      quantityPrompt: "",
      pricePrompt: "",
    });
  }

  render() {
    return (
      <div>
        <h1>New Shop</h1>

        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.onChangeName}
          />

          <br />

          <input
            type="text"
            id="description"
            name="description"
            placeholder="Description"
            value={this.state.description}
            onChange={this.onChangeDescription}
          />

          <br />

          <button type="submit">SUBMIT</button>
          <button type="reset">CANCEL</button>
        </form>
      </div>
    );
  }
}
