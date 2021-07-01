import React, { Component } from "react";

class Try extends Component {
  //Try의 부모 컴포넌트는 NumberBaseball
  render() {
    return (
      // <li>
      //   <b>{v[0]}</b> - {v[1]}
      // </li>
      <li>
        <b>{this.props.value.fruit}</b> - {this.props.index}
        <div>컨텐츠1</div>
        <div>컨텐츠2</div>
        <div>컨텐츠3</div>
        <div>컨텐츠4</div>
      </li>
    );
  }
}

export default Try;
