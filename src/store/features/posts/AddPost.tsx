import React, { FormEvent, useState } from "react";
import { PostsType, initReactions, postAdded } from "./PostsSlice";
import {allUsers} from '../../RootReducer'
import { useDispatch, useSelector } from "react-redux";
import './posts.scss';



const AddPost = () => {
  const initPost: PostsType = { id: "", content: "", title: "", userId: '', date: (new Date()).toISOString(), reactions: initReactions };
  // const initUsers: UsersType = { id: "", name: ""};
  // const [userId, setUserId] = useState<string>('');

  const [post, setPost] = useState<PostsType>(initPost);

  const users = useSelector(allUsers);

  const usersListOptions = users.map(user=>(
    <option key={user.id} value={user.id}>{user.name}</option>
  ))

  const dispatch = useDispatch();

  const handleChange = (evt: FormEvent<HTMLFormElement | HTMLInputElement| HTMLSelectElement>) => {
    const { name, value } = evt.currentTarget;
    setPost((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  let isDisabled: boolean = post && post.title && post.content && post.userId ? false : true;

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    console.log(JSON.stringify(post));
    if (post && post.title && post.content && post.userId) {
      dispatch(postAdded(post));
      setPost(initPost);
    } else {
      alert("Invalid article post details");
    }
  };
  return (
    <>
      <section>
        <h2>Add form</h2>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor="title" className="lblInput">Title</label>
            <input
              type="text"
              name="title"
              value={post.title}
              className="txtInput"
              onChange={handleChange}
            />
          </div>
          <div className='form-group'>
            <label htmlFor="userId" className="lblInput">User</label>
            <select name="userId" id="userId" className='ddlInput' onChange={handleChange} value={post.userId}>
              <option value="">--select author--</option>
              {usersListOptions}
            </select>
          </div>
          <div className='form-group'>
            <label htmlFor="content" className="lblInput">Content</label>
            <input
              type="text"
              name="content"
              value={post.content}
              className="txtInput"
              onChange={handleChange}
              onBlur={handleChange}
            />
          </div>
          <button type="submit" disabled={isDisabled} className="btn-submit">
            Submit
          </button>
        </form>
      </section>
    </>
  );
};

export default AddPost;
