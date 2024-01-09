
//DAO(Data Access Object) - dbms(데이터베이스 연동) 처리
const userDAO = {
  //item - 클라이언트 요청 데이터..
  //callback - dbms 가 성공한 후에 호출할 개발자 함수..
  singup: async (item, callback) => {
    console.log('user dao, signup.........')
    callback()
  }
}

module.exports = userDAO 