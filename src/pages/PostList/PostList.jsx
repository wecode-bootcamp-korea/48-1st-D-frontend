import React, { useEffect, useState } from 'react';
import Post from '../../components/Post/Post';

import EditorButton from '../../components/EditorButton/EditorButton';

import './PostList.scss';

const PostList = () => {
  const [postDataList, setPostDataList] = useState();

  useEffect(() => {
    fetch('/data/data.json', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('access_token'),
      },
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        setPostDataList(data.data);
        const sortedPosts = data.data.sort((a, b) => {
          return new Date(b.createdAt) - new Date(a.createdAt);
        });
        setPostDataList(sortedPosts);
      });
  }, []);

  return (
    <div className="PostList">
      <div className="container">
        <article className="posts">
          {postDataList?.map((postData, i) => (
            <Post postData={postData} key={postData.id}></Post>
          ))}
          {/*TODO 로그인 한 유저일 때 버튼 활성화*/}
          <EditorButton />
        </article>
      </div>
    </div>
  );
};

export default PostList;
