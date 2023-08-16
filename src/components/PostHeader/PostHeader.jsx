import './PostHeader.scss';

const PostHeader = props => {
  const dateString = props.updatedAt;
  const dateObject = new Date(dateString);

  const postDelete = () => {
    fetch('/data/data.json', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        headers: {
          Authorization: localStorage.getItem('access_token'),
        },
      },
      body: JSON.stringify({
        id: props.postId,
      }),
    });
  };

  return (
    <div className="postHeader">
      <div className="userInfo">
        <img src="/images/Default-userprofileimage.png" alt="프로필이미지" />
        <div className="userProfile">{props.nickName}</div>
      </div>
      <div className="DateAndDeleteWrap">
        <div className="postCreatedDate">
          {dateObject.getFullYear()}.{dateObject.getMonth() + 1}.
          {dateObject.getDate()}
        </div>
        {props.userId == true /*토큰의 유저id*/ && (
            <div className="postUpdateButton">수정</div>
          ) && (
            <div className="postDeleteButton" onClick={postDelete}>
              삭제
            </div>
          )}
      </div>
    </div>
  );
};

export default PostHeader;
