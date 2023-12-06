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
     <div onClick={() => setSelectedPostID(2)}>게시글 2</div>
     <div onClick={() => setSelectedPostID(3)}>게시글 3</div>
     <div onClick={() => setSelectedPostID(4)}>게시글 4</div>
   </div>   
  );

  function Post({
    id,
    resetPostId
  }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
  
    //TODO: 현재 json 파일에서 데이터를 받아오고 있으나 Database를 접근해서 데이터를 가져와야함
    fetch(`./sample-data/posts/${id}.json`, {
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setTitle(json.title);
        setContent(json.content);
      });
  
    //TODO: 돌아가기 버튼이 resetPostId를 부르는게 아니고 routing을 사용해서 게시판 url로 돌아가야한다
    return (
      <div>
        <h1>{title}</h1>
        <p>{content}</p>
        <div onClick={() => resetPostId()}>돌아가기</div>
      </div>
    )
  }
  



 export default App;
