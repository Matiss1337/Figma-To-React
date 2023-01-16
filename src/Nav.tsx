import React from 'react'
import {GiPineapple } from 'react-icons/Gi';
import './nav.css'


export const Nav = () => {
  return (
    <div className='Nav'>
        <div className="logozone"> <div className="logo"><GiPineapple/></div><h2>pineapple</h2></div>
        <div className="links">
            <a href="javascript:void(0)" rel="noopener noreferrer">About</a>
            <a href="javascript:void(0)" rel="noopener noreferrer">How it works</a>
            <a href="javascript:void(0)" rel="noopener noreferrer">Contact</a>
        </div>
    </div>
  )
}
