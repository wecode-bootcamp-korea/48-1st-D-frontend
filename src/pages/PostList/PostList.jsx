import React, { useEffect, useState } from 'react';
import Post from '../../components/Post/Post';

import EditorButton from '../../components/EditorButton/EditorButton';

import './PostList.scss';

const PostList = () => {
  const [postDataList, setPostDataList] = useState([]);
  const [focusedPostId, setFocusedPostId] = useState(null);

  const onClickPostContent = postId => {
    if (focusedPostId === postId) {
      setFocusedPostId(null);
    } else {
      setFocusedPostId(postId);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = () =>
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

  return (
    <div className="PostList">
      <div className="container">
        <article className="posts">
          {postDataList.map(postData => (
            <Post
              isFocused={focusedPostId === postData.postId}
              onClickPostContent={onClickPostContent}
              fetchPost={fetchPost}
              postData={postData}
              key={postData.postId}
            ></Post>
          ))}
          <EditorButton />
        </article>
      </div>
    </div>
  );
};

export default PostList;
