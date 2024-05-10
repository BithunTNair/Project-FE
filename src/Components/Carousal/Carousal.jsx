import React from 'react'
import './Carousal.css'
import  carousalImg  from '@Assets/duffy-brook-IwDTKKFmWAc-unsplashu.jpg'

function Carousal() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide carousal-container">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src= {carousalImg} className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5>Let's Play Football</h5>
          <p>Discover joy in every jump, laughter in every swing.</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src= {carousalImg} className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5>Let's Play Football</h5>
          <p>Play is the key to a happy heart. Dive into the fun!</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src= {carousalImg} className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5>Let's Play Football</h5>
          <p>Little moments, big memories - let the playground adventures begin!</p>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  )
}

export default Carousal