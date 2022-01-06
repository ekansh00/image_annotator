import React from "react";
import plan from "./plan-1.jpg";

import Annotation from 'react-image-annotation'
import './App.css';

export default class App extends React.Component {
  state = {
    annotations: [],
    annotation: {}
  }

  onChange = (annotation) => {
    this.setState({ annotation })
  }

  onSubmit = (annotation) => {
    const { geometry, data } = annotation

    this.setState({
      annotation: {},
      annotations: this.state.annotations.concat({
        geometry,
        data: {
          ...data,
          id: Math.random()
        }
      })
    })
  }

  render() {
    return (
      <Annotation
        src={plan}
        alt='Two pebbles anthropomorphized holding hands'

        annotations={this.state.annotations}

        type={this.state.type}
        value={this.state.annotation}
        onChange={this.onChange}
        onSubmit={this.onSubmit}
      />
    )
  }
}
