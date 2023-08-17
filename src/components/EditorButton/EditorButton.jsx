import { useNavigate } from 'react-router-dom';
import './EditorButton.scss';

const EditorButton = () => {
  const navigate = useNavigate();
  const EditorButtonOnClick = () => {
    navigate('/post-add');
  };
  return (
    <div className="editorBox">
      <button className="editorButton" onClick={EditorButtonOnClick}>
        글 쓰기
      </button>
      ;
    </div>
  );
};

export default EditorButton;
