import React, { FormEvent, useState } from "react";
import { PostsApiRespType, PostsType, addNewPost, initReactions } from "./PostsSlice";
import {allUsers} from '../../RootReducer'
import { useDispatch, useSelector } from "react-redux";
import './posts.scss';
import { AppDispatch } from "../../store";



const AddPost = () => {
  const initPost: PostsType = { id: "", body: "", title: "", userId: 0, date: (new Date()).toISOString(), reactions: initReactions };
  // const initUsers: UsersType = { id: "", name: ""};
  // const [userId, setUserId] = useState<string>('');

  const [post, setPost] = useState<PostsType>(initPost);
  const [postState, setPostState] = useState<PostsApiRespType>('idle');

  const users = useSelector(allUsers);

  const usersListOptions = users.map(user=>(
    <option key={user.id} value={user.id}>{user.name}</option>
  ))

  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (evt: FormEvent<HTMLFormElement | HTMLInputElement| HTMLSelectElement>) => {
    const { name, value } = evt.currentTarget;
    setPost((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  let isDisabled: boolean = post && post.title && post.body && post.userId ? false : true;

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    if (!isDisabled) {
      try {
        setPostState('loading')
        dispatch(addNewPost(post));
        setPost(initPost);
      } catch (error) {
        
      }finally{
        setPostState('idle')
      }
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
            <label htmlFor="body" className="lblInput">Content</label>
            <input
              type="text"
              name="body"
              value={post.body}
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
