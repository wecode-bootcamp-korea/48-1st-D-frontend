import React, { useEffect, useState } from 'react';
import Post from '../../components/Post/Post';

import EditorButton from '../../components/EditorButton/EditorButton';

import './PostList.scss';

const PostList = () => {
  const [postDataList, setPostDataList] = useState();

  useEffect(() => {
    fetch('/data/data.json', {
      method: 'GET',
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        setPostDataList(data);
      });
  }, []);

  return (
    <>
      <div className="PostList">
        <div className="container">
          <article className="posts">
            {postDataList?.map((postData, i) => (
              <Post postData={postData} key={postData.key}></Post>
            ))}
            <EditorButton />
          </article>
        </div>
      </div>
    </>
  );
};

export default PostList;
