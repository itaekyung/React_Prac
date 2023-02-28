import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [title, setTitle] = useState([
    "HTMLl&CSS 부수기",
    "JS 부수기",
    "React 부수기",
  ]);
  let [like, setLike] = useState(0);
  let [modal, setModal] = useState(false); // UI 현재 상태를 저장 형식은  자유
  return (
    <div className="App">
      <Header />{" "}
      <button
        onClick={() => {
          const newTitle = [...title];
          newTitle.sort();
          setTitle(newTitle);
        }}
      >
        abc순서로 정렬
      </button>
      <div className="list">
        <h4>
          {title[0]}{" "}
          <span
            onClick={() => {
              setLike(like + 1);
            }}
          >
            👍
          </span>{" "}
          {like}
        </h4>
        <button
          onClick={() => {
            const test = [...title];
            test[0] = "부쉈다";
            setTitle(test);
          }}
        >
          부쉈으면 눌러
        </button>
        <p>2월 27일 발행</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>2월 27일 발행</p>
      </div>
      <div className="list">
        <h4
          onClick={() => {
            // if나 삼항연산자 써서 이 안에 작성해도되지만
            // if (modal == true) {
            //   return setModal(false);
            // } else {
            //   return setModal(true);
            // }

            setModal(!modal); // 이게 더 간단함
          }}
        >
          {title[2]}
        </h4>
        <p>2월 27일 발행</p>
      </div>
      {modal == true ? <Modal /> : null}
    </div>
  );
}

function Header() {
  return <div className="black-nav">태키의 블로그</div>;
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
