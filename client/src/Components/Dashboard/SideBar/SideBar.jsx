import React, { useState } from 'react'
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import PersonIcon from '@material-ui/icons/Person';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import { SideBarLayOut } from './SideBarLayOut';
import './SideBar.css';
import { Link } from 'react-router-dom'

export const SideBar = () => {
  const [isCreditCardMenuOpened , setIsCreditCardMenuOpened ] = useState(false);
  const [isShippingMenuOpened , setIsShippingMenuOpened ] = useState(false);

  const openCreditCardMenu = ()=>{
    setIsCreditCardMenuOpened(!isCreditCardMenuOpened)
    setIsShippingMenuOpened(false)
  }
  const openShippingMenu = ()=>{
    setIsShippingMenuOpened(!isShippingMenuOpened)
    setIsCreditCardMenuOpened(false)
  }
  return (
    <div className="sidebar">
      <Link to="/dashboard/update-info" className="Router__link">
        <SideBarLayOut Icon={PersonIcon} text={`Manage Personal Information`}/>
      </Link>
      <Link to="/dashboard/update-login-details" className="Router__link">
        <SideBarLayOut Icon={VpnKeyIcon} text={`Manage Login Details`}/>
      </Link>
      <div className="credit-menu-option">
        <div onClick={openCreditCardMenu}>
          <SideBarLayOut  Icon={CreditCardIcon} text={`Manage Credit Card Information`}/>
        </div>
        {
          !isCreditCardMenuOpened ? null : <div className="credit-card-menu">
            <Link to="/dashboard/add-new-credit-card" className="Router__link">
              <h4 className="credit-card-menu-options" >- Add New Credit Card</h4>
            </Link>
            <h4 className="credit-card-menu-options">- Manage Credit Cards</h4>
          </div>
        }
      </div>
      <div className="shipping-menu-option">
        <div onClick={openShippingMenu}>
          <SideBarLayOut Icon={LocalShippingIcon} text={`Manage Shipping Addresses`}/>
        </div>
        {
          !isShippingMenuOpened ? null : <div className="shipping-menu">
            <h4 className="shipping-menu-options">- Add New Shipping Address</h4>
            <h4 className="shipping-menu-options">- Manage Shipping Address</h4>
          </div>
        }
      </div>
    </div>
  )
}
