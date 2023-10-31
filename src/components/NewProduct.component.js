import React, { Component } from "react";

export default class NewProduct extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangeQuantity = this.onChangeQuantity.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onPhotoUpload = this.onPhotoUpload.bind(this);

    this.state = {
      name: "",
      description: "",
      category: "",
      quantity: "",
      price: "",
      photo: null,
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

  onChangeCategory(e) {
    this.setState({
      category: e.target.value,
    });
  }

  onChangeQuantity(e) {
    const quantityValue = e.target.value;
  
    // Check if the entered value is a valid number
    if (!isNaN(quantityValue) && quantityValue >= 0) {
      this.setState({
        quantity: quantityValue,
        quantityPrompt: "",
      });
  
      // Log and display the quantity in real-time
      console.log("Quantity:", quantityValue);
    } else {
      this.setState({
        quantity: quantityValue,
        quantityPrompt: "Please enter a valid positive number",
      });
    }
  }
  
  onChangePrice(e) {
    const priceValue = e.target.value;
  
    // Check if the entered value is a valid number
    if (!isNaN(priceValue) && priceValue >= 0) {
      this.setState({
        price: priceValue,
        pricePrompt: "",
      });
  
      // Log and display the price in real-time
      console.log("Price:", priceValue);
    } else {
      this.setState({
        price: priceValue,
        pricePrompt: "Please enter a valid positive number",
      });
    }
  }

  onSubmit(e) {
    e.preventDefault();
  
    if (!this.state.quantityPrompt && !this.state.pricePrompt) {
      console.log("Name:", this.state.name);
      console.log("Description:", this.state.description);
      console.log("Category:", this.state.category);
      console.log("Quantity:", this.state.quantity);
      console.log("Price:", this.state.price);
      console.log("Is Completed:", this.state.isCompleted);
      
      // Clear the form fields
      this.setState({
        name: "",
        description: "",
        category: "",
        quantity: "",
        price: "",
        photo: null,
        isCompleted: false,
        quantityPrompt: "",
        pricePrompt: "",
      });
    } else {
      // Show a prompt to enter valid numbers
      window.alert("Please enter valid numbers for quantity and price.");
    }
  }
  
  

  onPhotoUpload(e) {
    const photoFile = e.target.files[0]; // Get the selected file
    this.setState({
      photo: photoFile,
    });
  }

  render() {
    return (
      <div>
        <h1>New Product</h1>
        <br />
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
          <input
            type="text"
            id="category"
            name="category"
            placeholder="Category"
            value={this.state.category}
            onChange={this.onChangeCategory}
          />
          <br />
          <input
            type="text"
            id="quantity"
            name="quantity"
            placeholder="Quantity"
            value={this.state.quantity}
            onChange={this.onChangeQuantity}
          />
          {this.state.quantityPrompt && (
            <p style={{ color: "red" }}>{this.state.quantityPrompt}</p>
          )}
          <br />
          <input
            type="text"
            id="price"
            name="price"
            placeholder="Price"
            value={this.state.price}
            onChange={this.onChangePrice}
          />
          {this.state.pricePrompt && (
            <p style={{ color: "red" }}>{this.state.pricePrompt}</p>
          )}
          <br />
          <button type="submit">SUBMIT</button>
          <button type="reset">CANCEL</button>
        </form>
      </div>
    );
  }
}
