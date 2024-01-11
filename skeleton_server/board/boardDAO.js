const getPool = require('../common/pool');

//이곳에 필요한 sql 등록..
const sql = {
  boardList: 'SELECT * FROM board',
  insert: 'INSERT INTO board (name, title, content) VALUES (?,?,?)',
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
};
module.exports = boardDAO;
