import React from 'react';
import './App.css';
// import Counter from './components/counter/Counter';
import PostList from './store/features/posts/PostList';
import AddPost from './store/features/posts/AddPost';

function App() {
  return (
    <div className="App">
     {/* <Counter/> */}
     <AddPost/>
     <PostList/>
    </div>
  );
}

export default App;
