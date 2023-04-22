import React, { FormEvent, useState } from "react";
import { PostsType, postAdded } from "./PostsSlice";
import { useDispatch } from "react-redux";

export interface IProps {}

const AddPost = () => {
  const initPost = { id: "", content: "", title: "" };
  const [post, setPost] = useState<PostsType>(initPost);
  const dispatch = useDispatch();
  //   const [btnDisabled, setBtnDisabled] = useState<boolean>(true);
  //   if(post && post.title && post.content){
  //     setBtnDisabled(false)
  //   }else{setBtnDisabled(true)}

  const handleChange = (evt: FormEvent<HTMLFormElement | HTMLInputElement>) => {
    const { name, value } = evt.currentTarget;

    setPost((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  let isDisabled: boolean = post && post.title && post.content ? false : true;

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    console.log(JSON.stringify(post));
    if (post && post.title && post.content) {
      dispatch(postAdded(post));
      setPost({ id: "", content: "", title: "" });
    } else {
      alert("Invalid article post details");
    }
  };
  return (
    <>
      <section>
        <h2>Add form</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              value={post.title}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="user">User</label>
            <select name="user" id="user">
              <option value="">--select author</option>
            </select>
          </div>
          <div>
            <label htmlFor="content">Content</label>
            <input
              type="text"
              name="content"
              value={post.content}
              onChange={handleChange}
              onBlur={handleChange}
            />
          </div>
          <button type="submit" disabled={isDisabled}>
            Submit
          </button>
        </form>
      </section>
    </>
  );
};

export default AddPost;
