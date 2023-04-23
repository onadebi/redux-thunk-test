import React from "react";
import "./App.scss";
// import Counter from './components/counter/Counter';
import PostList from "./store/features/posts/PostList";
import AddPost from "./store/features/posts/AddPost";

function App() {
  return (
    <div className="App">
      {/* <Counter/> */}
      <div className="main">
        <AddPost />
        <PostList />
      </div>
    </div>
  );
}

export default App;
