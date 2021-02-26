import React from 'react';
import AppsIcon from '@material-ui/icons/Apps';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import "./DropDownMenu.css";
import { Link } from 'react-router-dom'

export const DropDownMenu = () => {

  const Logout = ()=>{
    localStorage.removeItem('token');
    window.location.reload(false)
  }

  return (
    <div className="drop-down-menu">
      <Link to="/dashboard" className="Router__link">
        <div className="menu-option">
          <AppsIcon />
          <h3 className="menu-text">User Dashboard</h3>
        </div>
      </Link>
      <div className="menu-option">
        <ExitToAppIcon />
        <h3 className="menu-text">Logout</h3>
      </div>
    </div>
  )
}
