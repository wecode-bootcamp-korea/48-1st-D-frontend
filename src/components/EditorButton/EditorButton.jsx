import { useNavigate } from 'react-router-dom';
import './EditorButton.scss';

{
  /*TODO 로그인 여부에 따른 글쓰기 버튼 활성화/비활성화*/
}
const EditorButton = () => {
  // const navigate2 = useNavigate();

  // const EditorButtonOnClick = () => {
  //   navigate2('/post-add');
  // };
  return (
    <div className="editorBox">
      <button className="editorButton">글 쓰기</button>;
    </div>
  );
};

export default EditorButton;
