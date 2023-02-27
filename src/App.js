import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let post = "강남 우동 맛집";
  let [글제목, b] = useState(["html&css 부수기", "JS 부수기", "리액트 부수기"]);

  return (
    <div className="App">
      <div className="black-nav">
        <div>태키의 블로그</div>
      </div>
      <div className="list">
        <h4>{글제목[0]}</h4>
        <p>2월 27일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 27일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 27일 발행</p>
      </div>
    </div>
  );
}

export default App;
