import React, { Component } from "react";

export default class Badge extends Component {
  render() {
    const { text} = this.props;

    return (
      <span
        className="inline-q qblock px-2 py-1 text-sm font-semibold leading-none rounded bg-purple-800 text-white"
      >
        {text}
      </span>
    );
  }
}