import React, {useCallback, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const SingIn = () => {

  const navigate = useNavigate()


  const [data, setData] = useState({email:'', password:''})

  const changeData = useCallback((e)=>{
    setData((data)=> ({...data, [e.target.name]: e.target.value}))
  },[])

  const login = useCallback(async(e)=>{
    e.preventDefault()
    const resp = await axios.post('http://localhost:8000/users/signin', data)
    if(resp.data.status ===500) window.alert(resp.data.message)
    else navigate('/')
  }, [data, navigate])
  return (
    <main id="main">

    {/* <!-- ======= Intro Single ======= --> */}
    <section className="intro-single">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-8">
            <div className="title-single-box">
              <h1 className="title-single">We Do Great Design For Creative Folks</h1>
            </div>
          </div>
          <div className="col-md-12 col-lg-4">
            <nav aria-label="breadcrumb" className="breadcrumb-box d-flex justify-content-lg-end">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  About
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- End Intro Single--> */}

    {/* <!-- ======= About Section ======= --> */}
    <section className="section-about">
      <div className="container">
        <h2>Login</h2>
        <form className='row'>
          <div className='col-sm12 position-relative from-group mb-3'>
            <label htmlFor='email' className='form-label'>Email</label>
            <input type="text" className="form-control" id="email" name="email" 
            value={data.email} onChange={changeData}/>
          </div>
            
          <div className='col-sm12 position-relative from-group mb-3'>
            <label htmlFor='password' className='form-label'>Password</label>
            <input type='password' className='form-control' id='password' name='password'
              value={data.password} onChange={changeData}/>
          </div>

          {/* <div className='col-sm12 position-relative from-group mb-3'>
            <label htmlFor='name' className='form-label'>Name</label>
            <input type='text' className='form-control' id='name' name='name'
              value={data.name} onChange={changeData}/>
          </div> */}


          <div className='col-sm12 position-relative form-group'>
            <button type='submit' className='btn btn-danger btn-sm' onClick={login}>send</button>
            <button type='reset' className='btn btn-primary btn-sm'>reset</button>
          </div>
        </form>
      </div>
    </section>

    
    {/* <!-- End About Section--> */}
    

  </main>
  )
}

export default SingIn