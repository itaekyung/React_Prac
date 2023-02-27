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

  return (
    <div className="App">
      <div className="black-nav">태키의 블로그</div>
      <div className="list">
        <button
          onClick={() => {
            const newTitle = [...title];
            newTitle.sort();
            setTitle(newTitle);
          }}
        >
          abc순서로 정렬
        </button>
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
          // onClick={() => {
          //   title[0] = "부쉈다";
          //   console.log(title);
          //   setTitle(title);
          // }}\

          // onClick={() => {
          //   const test = title;
          //   test[0] = "부쉈다";
          //   console.log(test);
          //   console.log(test == title);
          //   setTitle(test);
          // }}

          // 위에 코드가 작동이 안되는 이유는 참조값을 변경하지 않아서 그런건가요?
          // test랑 title이 같은 참조값을 가지고 있어서?
          // useState는 그럼 초기값하고 변경값 ==이든, ===이든 상관없이 true인가요?

          // onClick={() => {
          //   title[0] = "부쉈다";
          //   console.log([...title]);
          //   setTitle([...title]);
          // }}

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
        <h4>{title[2]}</h4>
        <p>2월 27일 발행</p>
      </div>
    </div>
  );
}

export default App;
