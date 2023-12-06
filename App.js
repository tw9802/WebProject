import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <BoardHead></BoardHead>   

      <BoardNav></BoardNav>

      <Boarddetail></Boarddetail>

      <Button></Button>

      <Comment></Comment>

    </div>
  );
}

function BoardHead(){
  return(
    <div className='board-head'>
      <div>웹 응용 프로그래밍</div>
    </div>
  );
}

function Boarddetail(){
  return(    
    <div className='board-detail'>
    <h2>제목</h2>
    <p>날짜</p>
    <p>상세내용</p>
  </div>
  );
}

function BoardBox(){
  return(
    <div className='board-box'>
      
    </div>
  );
}

function BoardNav(){
  return(
    <div className='board-nav'>

    </div>
  );
}

function Button(){
  return(
    <>

    <div className='revise-btn'>
      <button type='button'><a href='Main.html' target='blank'>수정</a></button>
    </div>

    <div className='delete-btn'>
      <button type='button'><a href='Main.html' target='blank'>삭제</a></button>
    </div>
    
    </>
  );
}

function Comment(){
  return(
    <div className='comment'>댓글</div>
  );
}

 //TODO: 리액트 라우터 사용하여 URL Parameter로 포스트 아이디 받아오기
const [selectedPostId, setSelectedPostId] = useState(null);


return selectedPostId ? (
  <Post id={selectedPostId} resetPostID={() => setSelectedPostID(null)} />
) : (
  <div className="App" style={{
    display: 'flex',
     flexDirection: 'column',
  }}>
     <div onClick={() => setSelectedPostID(1)}>게시글 1</div>
   </div>   
  );


 export default App;
