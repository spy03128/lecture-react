const React = require("react");
// const { Module } = require("webpack");
const { useState, useRef } = React;
function getNumbers() {
  //숫자 4개를 겹치지 않고 랜덤하게 뽑는 함수
}

class NumberBaseball extends React.Component {
  state = {
    result: "",
    value: "",
    answer: getNumbers(), //
    tries: [],
  };

  onSubmitForm = () => {};

  onChangeInput = () => {};

  render() {
    return (
      <>
        <h1>{this.state.result}</h1>
        <form onSubmit={this.onSubmitForm}>
          <input
            maxLengh={4}
            value={this.state.value}
            onChange={this.onChangeInput}
          />
        </form>
        <div>시도: {this.state.tries.length}</div>
        <ul>
          {[
            // ["like1", "one"],
            // ["like2", "two"],
            // ["like3", "three"],
            // ["like4", "four"],
            // ["like5", "five"],
            { fruit: "like1", taste: "one" },
            { fruit: "like2", taste: "two" },
            { fruit: "like3", taste: "three" },
            { fruit: "like4", taste: "four" },
            { fruit: "like5", taste: "five" },
          ].map((v) => {
            //5번 반복
            return (
              // <li>
              //   <b>{v[0]}</b> - {v[1]}
              // </li>
              <li key={v.fruit}>
                <b>{v.fruit}</b> - {v.taste}
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

module.exports = NumberBaseball; // import NumberBaseball;
