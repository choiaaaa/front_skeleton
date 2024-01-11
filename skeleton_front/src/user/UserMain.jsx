import { Route, Routes } from 'react-router-dom';
import SignUp from './component/SignUp'
import SingIn from './component/SignIn';

const UserMain = () =>{
  return (
    <div>
      <h1>User Main</h1>
      <Routes>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/signin' element={<SingIn />}/>
      </Routes>
    </div>
  )
}

export default UserMain