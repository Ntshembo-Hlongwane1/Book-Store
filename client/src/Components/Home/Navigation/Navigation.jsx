import React from 'react';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import './Navigation.css';
import { Link } from 'react-router-dom'

export const Navigation = () =>{
  const token = localStorage.getItem('token') || false;

  const Logout = ()=>{
    localStorage.removeItem('token');
    window.location.reload(false)
  }
  return (
    <div className="nav">
      <div className="nav-left">
        <MenuBookIcon className="logo"/>
        <Link to="/" className="Router__link">
          <h1 className="header">
            <span className="header-start">e-</span>
            <span className="header-end">BookStore</span>
          </h1>
        </Link>
      </div>
      <div className="nav-right">
        <div className="nav-right-booklist nav-link">
          <h4 className="links">View Books</h4>
        </div>
        <div className="nav-right-auth nav-link">
          { token ? <h4 onClick={Logout} className="links">Logout</h4> : <Link to="/auth" className="Router__link">
            <h4 className="links">Signup / Signin</h4>
          </Link>}
        </div>
        <div className="nav-right-addBook nav-link">
          {token ? <h4 className="links">Add New Book</h4> : null}
        </div>
      </div>
    </div>
  )
}
