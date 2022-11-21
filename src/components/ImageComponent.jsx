// in order to create a class that is not a generic class but that works
// as a React Component, we need an additional step: we need our own class

import { Component } from "react";

// component to EXTEND from the very first class component that exists: Component
class ImageComponent extends Component {
  render() {
    // render() is the ONLY MANDATORY method in every class component
    return <img src={this.props.URL} alt="d" />;
    // "this" points to the current instance of the class
    // props is an object that you can find on "this"
  }
}

export default ImageComponent;
