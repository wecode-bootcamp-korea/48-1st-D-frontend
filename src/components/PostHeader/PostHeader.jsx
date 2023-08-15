import './PostHeader.scss';

const PostHeader = props => {
  const dateString = props.updatedAt;
  const dateObject = new Date(dateString);
  const utcNow =
    dateObject.getTime() + dateObject.getTimezoneOffset() * 60 * 1000;
  const koreaTimeDiff = 9 * 60 * 60 * 1000;
  const koreaNow = new Date(utcNow + koreaTimeDiff);

  return (
    <div className="postHeader">
      <div className="userInfo">
        <img src="/images/Default-userprofileimage.png" alt="프로필이미지" />
        <div className="userProfile">{props.nickName}</div>
      </div>
      <div className="DateAndDeleteWrap">
        <div className="postCreatedDate">
          {koreaNow.getFullYear()}.{koreaNow.getMonth() + 1}.
          {koreaNow.getDate()}
        </div>
        <div className="postUpdateButton">수정</div>
        <div className="postDeleteButton">삭제</div>
      </div>
    </div>
  );
};

export default PostHeader;
