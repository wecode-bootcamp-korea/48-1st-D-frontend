import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../PostAdd/components/Button';
import '../PostEditing/PostEditing.scss';

const PostEditing = () => {
  const [usersData, setUsersData] = useState();
  const [post, setPost] = useState({
    content: '기존 content',
  });
  const navigate = useNavigate();

  const postInput = event => {
    const { value, id } = event.target;
    setPost({ ...post, [id]: value });
    console.log({ [id]: value });
  };

  const postEditingValidation = post.content === setPost.content ? true : false;

  useEffect(() => {
    fetch('data/userData.json', { method: 'GET' })
      .then(res => res.json())
      .then(name => {
        setUsersData(name[2].nickName);
        setPost(name[2].content);
      });
  }, []);

  const goToPostList = () => {
    alert('포스트 수정을 취소하시겠습니까?');
    navigate('/post-list');
  };

  const goToPostDone = () => {
    navigate('/post-done');
    fetch('data/userData.json', {
      //method: 'Post',
      //headers: {
      //'Content-Type': 'application/json',
      //},
      //body: JSON.stringify({
      //name: nickName,
      // content: post.content,
    }) //,
      //})
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  };

  return (
    <div className="rootPostEditing">
      <h1>포스트 수정 페이지</h1>
      <div className="postEditing">
        <div className="postContainer">
          <div className="postPublish">
            <img
              className="profileThumb"
              src="images/Pic.png"
              alt="프로필 사진"
            />
            <div className="postContent">
              <p className="postContentName" id="nickName">
                {usersData}
              </p>
              <textarea
                className="postContentText"
                placeholder="내용 수정하기"
                onChange={postInput}
                id="content"
                value={post.content}
              ></textarea>
            </div>
          </div>
          <div className="postAction">
            <Button type="secondary" navigate={goToPostList} text="취소" />
            <Button
              type="primary"
              navigate={goToPostDone}
              validation={postEditingValidation}
              text="게시"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default PostEditing;
