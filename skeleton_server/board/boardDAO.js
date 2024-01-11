const getPool = require('../common/pool');

//이곳에 필요한 sql 등록..
const sql = {
  boardList: 'SELECT * FROM board',
  insert: 'INSERT INTO board (name, title, content) VALUES (?,?,?)',
  board: 'SELECT * FROM board WHERE id = ?',
};

const boardDAO = {
  //게시물 조회 요청이 들어왔을 때 router 에 의해 실행.. dbms
  boardList: async (callback) => {
    let conn = null;
    try {
      conn = await getPool().getConnection();

      const [resp] = await conn.query(sql.boardList, []);

      console.log('000', resp);
      callback({ status: 200, message: 'OK', data: resp });
    } catch (error) {
      return { status: 500, message: '조회 실패', error: error };
    } finally {
      if (conn !== null) conn.release();
    }
  },
  insert: async (item, callback) => {
    let conn = null;
    try {
      conn = await getPool().getConnection();

      const [resp] = await conn.query(sql.insert, [
        item.name,
        item.title,
        item.content,
      ]);

      console.log('000', resp);
      callback({ status: 200, message: 'OK', data: resp });
    } catch (error) {
      console.log(error);
      return { status: 500, message: '입력 실패', error: error };
    } finally {
      if (conn !== null) conn.release();
    }
  },
  board: async (item, callback) => {
    let conn = null;
    try {
      conn = await getPool().getConnection();

      const [resp] = await conn.query(sql.board, item);

      console.log('000', resp);
      //where 조건에 의해 디비에서 하나의 row 만 획득되지만..
      //select 문은 항상 여러건의 데이터를 획득할 수 있는 상황이어서 배열로
      //즉 [{~~~~}] 이렇게 넘어온다..
      callback({ status: 200, message: 'OK', data: resp[0] });
    } catch (error) {
      console.log(error);
      return { status: 500, message: '입력 실패', error: error };
    } finally {
      if (conn !== null) conn.release();
    }
  },
};
module.exports = boardDAO;
