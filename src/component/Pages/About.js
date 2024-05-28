import React, { useState } from 'react'
import Model from 'react-modal'
import {Link} from "react-router-dom";

function Blog() {
  const [visible, setvisible] =useState(false)
  return (
    <>
      <h2>ABOUT US</h2>
      <div className='container1'>
          <div className='content'>
              <h3><span>IMPERIAL</span> CAR CARE</h3>
              <span>Professional Car Care & Detailing Services in Rawalpindi</span>
              <p>IMPERIAL is a specialized and service oriented car detailing company located in Rawalpindi. In This
                  Website You Will Get To Know About IMPERIAL And Their Service .Experts in precision cleaning,
                  polishing, coatings and also waxing cars. You are our guest as proud car owner and your precious
                  possession is assured of a conditioned and safe environment where we can work to perfection. Our goal
                  is to provide our customers with the friendliest, most convenient car detailing experience.</p>
              <p><i className="fa-solid fa-check"></i>We use professional equipment and also have a fully trained detailing
                  crew</p>
              <p><i className="fa-solid fa-check"></i>We use American and European professional line car care products for
                  detailing</p>
              <p><i className="fa-solid fa-check"></i>Detailing will increase glamour and also resale value of your car</p>
              <nav>
                  <ul>
                      <li>
                          <button className="nav-link dropdown-toggle btn-style" href="#"
                                  data-bs-toggle="dropdown" aria-expanded="false">
                              BOOK YOUR SLOT
                          </button>
                          <ul className="dropdown-menu">
                              <li><Link className="dropdown-item" to="/AutoDetail">Auto Detailing</Link></li>
                              <li><Link className="dropdown-item" to="/Ceramic">Ceramic Coating</Link></li>
                              <li><Link className="dropdown-item" to="/Engine">Engine Detailing</Link></li>
                              <li><Link className="dropdown-item" to="/Paint">Paint Protection Film</Link></li>
                          </ul>
                      </li>
                  </ul>
              </nav>
          </div>
          <div className='images'>
              <img src='./Pictures/img2.webp'></img>
          </div>
      </div>
        <div className='container2'>
            <div className='content2'>
                <h3>OUR 5 P'S OF DETAILING</h3>
                <div className="nav-item dropdown">
                    <a className="points dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                       aria-expanded="false">
                        PHILOSOPHY
                    </a>
                    <ul className="dropdown-menu">
                        <li><p className="dropdown-item">American Products are used quality service.</p></li>
                    </ul>
                </div>

                <div className="nav-item dropdown">
                    <a className="points dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                       aria-expanded="false">
                        PROCESS
                    </a>
                    <ul className="dropdown-menu">
                    <li><p className="dropdown-item">Process includes evaluation, precision cleaning .</p></li>
                    </ul>
                </div>

                <div className="nav-item dropdown">
                    <a className="points dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          PEOPLE
          </a>
          <ul className="dropdown-menu">
            <li><p className="dropdown-item" >We view our team as an asset.</p></li>
          </ul>
          </div>

          <div className="nav-item dropdown">
          <a className="points dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          PERFORMANCE
          </a>
          <ul className="dropdown-menu">
            <li><p className="dropdown-item" >Our performance is measured in numbers.</p></li>
          </ul>
          </div>

          <div className="nav-item dropdown">
          <a className="points dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          PRICE
          </a>
          <ul className="dropdown-menu">
            <li><p className="dropdown-item" >Our prices are competitive.</p></li>
          </ul>
          </div>
        </div>
        <div className='text-1'>
          <h3>QUALITY OF SERVICE</h3>
          <p>We love what we do, we treat your car as if it is like our own. We care about the feelings you have for your vehicle. We take responsibility and spend well time to make sure every detail and corner of your vehicle gets cleaned and finished</p>
          <div className='pic'>
          <div className='imgtext1'>
            <img src='./Pictures/paint.webp'></img>
          </div>

          <div className='imgtext1'>
            <img src='./Pictures/getsun.jpg'></img>
          </div>

          <div className='imgtext1'>
            <img src='./Pictures/clean.jpg'></img>
          </div>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Blog
