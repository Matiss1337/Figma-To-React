import React from 'react'
import './Form.css'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa';
import { BsArrowRight} from 'react-icons/Bs';

export const Form = () => {
  return (
    <div className='Form'>
<h1>Subscribe to newsletter</h1>
<h4>Subscribe to our newsletter and get 10% discount on pineapple glasses.</h4>
<div className="InputEmailZone">
   <input className='InputEmail'  placeholder='Type your email address here...'></input>
<button><BsArrowRight/></button>
</div>
<div className="CheckArea"> <input className='checkbox' type="checkbox"></input><h4> I agree to <span className="bold"> terms of service</span></h4></div>

        <div className="icons">
            <a className='FB icon' href="javascript:void(0)"><FaFacebookF/></a>
            <a className='IG icon' href="javascript:void(0)"><FaInstagram/></a>
            <a className='TW icon' href="javascript:void(0)"><FaTwitter/></a>
            <a className='YT icon' href="javascript:void(0)"><FaYoutube/></a>
        </div>
        
    </div>
  )
}
{/* <div className="ConfirmButton"><button><BsArrowRight/></button></div> */}