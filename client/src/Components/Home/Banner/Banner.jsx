import React from 'react';
import BannerImg from '../../../Assets/Banner1.png';
import './Banner.css'

export const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-text">
        <h3 className="banner-text-header">Books are life</h3>
        <button className="btn btn-check-newbooks">Check Latest Releases</button>
      </div>
    </div>
  )
}
