import { useNavigate } from 'react-router-dom';
import './PostHeader.scss';

const PostHeader = props => {
  const dateString = props.createdAt;
  const dateObject = new Date(dateString);
  const navigate = useNavigate();

  //TODO https://reactrouter.com/en/main/hooks/use-params 참조
  const goToAddEditingPage = () => {
    navigate(`/post-editing/${props.postId}`);
  };

  const postDelete = () => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      fetch('/data/data.json', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          headers: {
            Authorization: localStorage.getItem('access_token'),
          },
        },
        // TODO api 업데이트 후 적용
        body: JSON.stringify({}),
      })
        .then(res => {
          if (res.ok) {
            alert('삭제되었습니다!');
            props.fetchPost();
            return;
          }
          if (!res.ok) {
            throw new Error('Error');
          }
        })

        .catch(() => {
          alert('삭제에 실..패..했습니다....');
        });
    }
  };

  return (
    <div className="postHeader">
      <div className="userInfo">
        <img src="/images/Default-userprofileimage.png" alt="프로필이미지" />
        <div className="userProfile">{props.userName}</div>
      </div>
      <div className="DateAndDeleteWrap">
        <div className="postCreatedDate">
          {dateObject.getFullYear()}.{dateObject.getMonth() + 1}.
          {dateObject.getDate()}
        </div>
        {props.isMyPost && (
          <>
            <div className="postUpdateButton" onClick={goToAddEditingPage}>
              수정
            </div>
            <div className="postDeleteButton" onClick={postDelete}>
              삭제
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PostHeader;
