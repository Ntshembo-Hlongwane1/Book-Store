import React from 'react';
import "./SideBarLayout.css"

export const SideBarLayOut = ({ Icon, text }) => {
  return (
    <div className="sidebar-layout">
      <Icon />
      <h4 className="sidebar-text">{text}</h4>
    </div>
  )
}
