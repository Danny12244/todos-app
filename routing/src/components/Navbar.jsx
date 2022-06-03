import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate=useNavigate()

  const handleClick = (id) => {
    if(id==1){

      navigate('products')
    }
  }
  return (
    <>

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" >Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" >
          <Link to='/' >Home</Link>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" >
          <Link to='About' >About</Link>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" >
          <Link to='Products' >Products</Link>
          </a>
        </li>
      
      </ul>
   
    </div>
  </div>
</nav>
    {/* <div>  
       
      
      
        <button onClick={()=>handleClick(1)}>GO to product </button>
    </div> */}
    </>
  )
}

export default Navbar