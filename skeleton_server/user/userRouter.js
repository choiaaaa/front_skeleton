const express = require('express')
const router = express.Router()
const userDAO = require('./userDAO')

//유저업무와 관련된 
// http://localhost:8000/users/signup
router.get('/signup', async (req, res, next) =>{
  console.log('user router, singup......')
  userDAO.signup({name:'홍길동', email:'hong@hong.com', password:'1234'}, (resp) => {
    res.send('resp')
  })
})

module.exports = router