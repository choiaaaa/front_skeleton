import { Routes, Route } from 'react-router-dom'

import Header from './home/component/Header'
import Footer from './home/component/Footer'
import HomeMain from './home/HomeMain'

const App = () => {
  return (
    <div>
      {/* Header, Footer 가 전체 화면에서 항상 고종으로 나온다면.. 아래처럼
      각 화면별로 header, Footer 가 상이하게 적용된다면 Router 되는 Com
       */}
      <Header/>
      {/*
      
      */}
      <Routes>
        <Route path='/' element={<HomeMain/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App