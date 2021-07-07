import React, { Component } from "react";

//클래스의 경우
//constructor -> render -> ref -> componentDidMount
//(setState/props 바뀔때) -> render -> componentDidUpdate
//부모가 나를 없앨 때 -> componentWillUnmount -> 소멸

class RSP extends Component {
  state = {
    result: "",
    imgCoord: 0,
    score: 0,
  };

  //처음 render가 성공적으로 실행된다면 componentDidMount가 실행됨.
  //비동기 요청을 많이 함
  componentDidMount() {}

  //re rendering 후에 실행
  componentDidUpdate() {}

  //component가 제거되기 직전에 실행됨.
  //비동기 요청 정리를 함
  componentWillUnmount() {}

  render() {
    const { result, score, imgCoord } = this.state;
    return (
      <>
        <div
          id="computer"
          style={{
            background: `url(http://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`,
          }}
        />
        <div>
          <button id="rock" className="btn" onClick={() => onClickBtn("바위")}>
            바위
          </button>
          <button
            id="scissor"
            className="btn"
            onClick={() => onClickBtn("가위")}
          >
            가위
          </button>
          <button id="paper" className="btn" onClick={() => onClickBtn("보")}>
            보
          </button>
        </div>
        <div>{result}</div>
        <div>현재 {score}점</div>
      </>
    );
  }
}

export default RSP;
