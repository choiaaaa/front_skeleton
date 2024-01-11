const getPool = require('../common/pool');

// 필요한 sql 등록
const sql = {
  boardList: 'SELECT * FROM board ORDER BY id DESC',
  insert: 'INSERT INTO board (name, title, content) VALUES (?, ?, ?)',
  board: 'SELECT * FROM board WHERE id = ?',
  delete: 'DELETE FROM board WHERE id = ?',
  update: 'UPDATE board SET title = ?, content = ? WHERE id = ?',
};

const boardDAO = {
  // 게시물 조회 요청이 들어왔을 때 라우터에 의해 실행되고 dbms 연동
  boardList: async (callback) => {
    let conn = null;
    try {
      conn = await getPool().getConnection();
      const [respList] = await conn.query(sql.boardList);
      // console.log(respList)
      callback({ status: 200, message: 'OK', data: respList });
      // if (respList[0]) {
      //     callback({status:200, message: 'OK', data:respList})
      // } else {
      //     callback({status:500, message: 'board 목록 조회 실패'})
      // }
    } catch (error) {
      return { status: 500, message: 'board 목록 조회 실패', error: error };
    } finally {
      if (conn !== null) conn.release();
    }
  },

  insert: async (item, callback) => {
    let conn = null;
    try {
      conn = await getPool().getConnection();
      console.log('입력 DAO', item);
      const [resp] = await conn.query(sql.insert, [
        item.name,
        item.title,
        item.content,
      ]);
      // console.log(resp)
      callback({ status: 200, message: 'OK', data: resp });
    } catch (error) {
      console.log(error);
      return { status: 500, message: 'board 입력 실패', error: error };
    } finally {
      if (conn !== null) conn.release();
    }
  },

  board: async (id, callback) => {
    let conn = null;
    try {
      conn = await getPool().getConnection();
      console.log('상세보기 DAO id:', id);
      const [resp] = await conn.query(sql.board, id);
      // console.log(resp)
      // where 조건에 의해 디비에서 하나의 row가 획득되는데, select문은 항상 여러건의 데이터를 획득할 수 있는 배열로 넘어온다. [{}]
      callback({ status: 200, message: 'OK', data: resp[0] });
    } catch (error) {
      console.log(error);
      return { status: 500, message: '해당 board 조회 실패', error: error };
    } finally {
      if (conn !== null) conn.release();
    }
  },

  delete: async (id, callback) => {
    let conn = null;
    try {
      conn = await getPool().getConnection();
      console.log('삭제 DAO id:', id);
      const [resp] = await conn.query(sql.delete, id);
      // console.log(resp)
      callback({ status: 200, message: 'OK', data: resp }); //  data: resp 데이터 전달은 안해도 된다.
    } catch (error) {
      console.log(error);
      return { status: 500, message: '해당 board 삭제 실패', error: error };
    } finally {
      if (conn !== null) conn.release();
    }
  },

  update: async (item, callback) => {
    let conn = null;
    try {
      conn = await getPool().getConnection();
      console.log('업데이트 DAO item:', item);
      const [resp] = await conn.query(sql.update, [
        item.title,
        item.content,
        item.id,
      ]);
      // console.log(resp)
      callback({ status: 200, message: 'OK', data: resp }); //  data: resp 데이터 전달은 안해도 된다.
    } catch (error) {
      console.log(error);
      return { status: 500, message: '해당 board 수정 실패', error: error };
    } finally {
      if (conn !== null) conn.release();
    }
  },
};

module.exports = boardDAO;
