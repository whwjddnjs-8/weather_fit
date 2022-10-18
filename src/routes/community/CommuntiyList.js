import { useState, useEffect } from 'react';
import axios from 'axios';

function CommunityList() {
    const [boards, setBoards] = useState('');
    
    async function  componentDidMount() {
        const res = await axios.get('http://localhost:3001/api/board/list');
        res.data.map((data) => {
             console.log(data.reg_dtm)
            var date = new Date(data.reg_dtm).toLocaleString('ko-KR');
            data.reg_dtm = date;
            console.log(data.reg_dtm)
        })
        setBoards(res.data)
    }
  
    useEffect(() => {
     componentDidMount();
    }, []);

    return (
        <div className='container'>
            <h1>오늘 날씨 어때?<span>우리동네 아침 날씨를 모두에게 전달해주세요!</span></h1>
            <div className='search_area'>
                {/* <label htmlFor="search_date">작성일자</label>
                <input type="date" id="search_date" name="search_date"></input> */}
                <div className='input_area'>
                    <input type="text" placeholder='검색어를 입력하세요.' />
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <div className='btn_area'>
                    <button>등록하기</button>
                </div>
            </div>
            <div className='table_area'>
                <table>
                <caption>오늘의 날씨</caption>
                <colgroup>
                    <col width={'8%'}></col>
                    <col width={'15%'}></col>
                    <col width={'auto'} ></col>
                    <col width={'10%'}></col>
                    <col width={'20%'}></col>
                    <col width={'10%'}></col>
                </colgroup>
                <thead>
                    <tr>
                        <th></th>
                        <th>위치</th>
                        <th>글 제목</th>
                        <th>작성자</th>
                        <th>작성일시</th>
                        <th></th>
                    </tr>
                    </thead>
                    {boards.length == 0 ?
                  <tbody>
                    <tr>
                      <td colSpan={6}>등록된 게시글이 없습니다.</td>
                    </tr>
                  </tbody>: 
                  <tbody>
                    {boards.map((board, index) => 
                        <tr key={index}>
                            <td>{boards.length - index}</td>
                            <td>
                                <span>{board.location}</span>
                            </td>
                            <td>
                            <a href="#none">{board.ttl}</a>
                            </td>
                            <td>{board.reg_ps_id}</td>
                            <td>{board.reg_dtm}</td>
                            <td><button>상세보기</button></td>
                        </tr>
                      )}
                  </tbody>}
                </table>
            </div>
        </div>
      
    )
}


export default CommunityList