import './PostHeader.scss';

const PostHeader = props => {
  return (
    <div className="postHeader">
      <div className="userProfile">{props.nickName}</div>
      <div className="DateAndDeleteWrap">
        <div className="postCreatedDate">{props.updatedAt}</div>
        <div className="postUpdateButton">수정</div>
        <div className="postDeleteButton">삭제</div>
      </div>
    </div>
  );
};

export default PostHeader;
