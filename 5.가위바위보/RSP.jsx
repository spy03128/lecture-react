import React, { Component } from "react";

//클래스의 경우
//constructor -> render -> ref -> componentDidMount
//(setState/props 바뀔때) -> render -> componentDidUpdate
//부모가 나를 없앨 때 -> componentWillUnmount -> 소멸

const rspCoords = {
  바위: "0",
  가위: "-142px",
  보: "-284px",
};

const scores = {
  가위: 1,
  바위: 0,
  보: -1,
};

class RSP extends Component {
  state = {
    result: "",
    imgCoord: rspCoords.바위,
    score: 0,
  };

  interval;

  //처음 render가 성공적으로 실행된다면 componentDidMount가 실행됨.
  //비동기 요청을 많이 함
  componentDidMount() {
    this.interval = setInterval(() => {
      const { imgCoord } = this.state;

      if (imgCoord === rspCoords.바위) {
        this.setState({
          imgCoord: rspCoords.가위,
        });
      } else if (imgCoord === rspCoords.가위) {
        this.setState({
          imgCoord: rspCoords.보,
        });
      }
      if (imgCoord === rspCoords.보) {
        this.setState({
          imgCoord: rspCoords.바위,
        });
      }
    }, 1000);
  }

  //re rendering 후에 실행
  componentDidUpdate() {}

  //component가 제거되기 직전에 실행됨.
  //비동기 요청 정리를 함
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onClickBtn = (choice) => {};

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
          <button
            id="rock"
            className="btn"
            onClick={() => this.onClickBtn("바위")}
          >
            바위
          </button>
          <button
            id="scissor"
            className="btn"
            onClick={() => this.onClickBtn("가위")}
          >
            가위
          </button>
          <button
            id="paper"
            className="btn"
            onClick={() => this.onClickBtn("보")}
          >
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
