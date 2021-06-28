const React = require("react");
// const { Module } = require("webpack");
const { useState, useRef } = React;
const WordRelay = () => {
  const [word, setWord] = useState("지현2");
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const inputRef = useRef(null);
  //   state = {
  //     word: "지현2",
  //     value: "",
  //     result: "",
  //   };

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (word[word.length - 1] === value[0]) {
      setResult("딩동댕");
      setWord(value);
      setValue("");
      //   this.setState({
      //     result: "딩동댕",
      //     word: this.state.value,
      //     value: "",
      //   });
      //   this.input.focus();
      inputRef.current.focus();
    } else {
      setResult("땡");
      setValue("");
      //   this.setState({
      //     result: "땡",
      //     value: "",
      //   });
      //   this.input.focus();
      inputRef.current.focus();
    }
  };

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  //   input;

  //   onRefInput = (c) => {
  //     this.input = c;
  //   };

  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <input ref={inputRef} value={value} onChange={onChangeInput} />
        <button>입력</button>
      </form>
      <div>{result}</div>
    </>
  );
};

module.exports = WordRelay; //이파일에서 만든 컴포넌트를 바깥에서도 사용할 수 있도록 해주는 것
