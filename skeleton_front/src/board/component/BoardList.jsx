import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import React, { useCallback, useState, useEffect } from 'react';

const BoardList = () => {
  const navigate = useNavigate();

  //서버에서 데이터를 받아오면.. 화면이 갱신이 되어야 합니다.
  //서버에서 받은 데이터를 state 로 처리하는 것이 맞지 않을까요?
  const [boardList, setBoardList] = useState({
    status: '',
    message: '',
    data: [],
  });

  const getBoardList = useCallback(async () => {
    const resp = await axios.get('http://localhost:8000/boards/boardList');
    setBoardList(resp.data);
  }, []);

  useEffect(() => {
    //서버에서 최초에 한번만 데이터를 받아오면 되지 않을까 싶어서..
    getBoardList();
  }, [getBoardList]);

  return (
    <main id="main">
      <section className="intro-single">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-8">
              <div className="title-single-box">
                <h1 className="title-single">Our Amazing Properties</h1>
                <span className="color-text-a">Grid Properties</span>
              </div>
            </div>
            <div className="col-md-12 col-lg-4">
              <nav
                aria-label="breadcrumb"
                className="breadcrumb-box d-flex justify-content-lg-end"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Properties Grid
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <section className="property-grid grid">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>번호</th>
                    <th>타이틀</th>
                    <th>이름</th>
                    <th>작성일</th>
                    <th>조회수</th>
                  </tr>
                </thead>
                <tbody>
                  {boardList.data.map((board) => (
                    <tr key={board.id}>
                      <td>{board.id}</td>
                      <td>
                        <Link to={'/board/detail/' + board.id}>
                          {board.title}
                        </Link>
                      </td>
                      <td>{board.name}</td>
                      <td>{board.createdAt}</td>
                      <td>{board.cnt}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan={5} className="text-end">
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => navigate('/board/insert')}
                      >
                        ADD
                      </button>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BoardList;
