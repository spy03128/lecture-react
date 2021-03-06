// import React, { Component } from "react";
import React from "react";

// class Try extends Component {
//   render() {
//     const { tryInfo } = this.props;
//     return (
//       <li>
//         <div>{tryInfo.try}</div>
//         <div>{tryInfo.result}</div>
//       </li>
//     );
//   }
// }

const Try = (props) => {
  return (
    <li>
      <div>{props.tryInfo.try}</div>
      <div>{props.tryInfo.result}</div>
    </li>
  );
};

export default Try;
