import React from "react"
import vid from "../components/videos/video-2.mp4"
import { Button } from "./Button"
import './HeroSection.css'
function HeroSection() {
  return (
    <div className="hero-container">
        <video src={vid} autoPlay loop muted/>
        <h1>WELCOME TO OUR PAGE</h1>
        <p>ENJOY!</p>
        <div className="hero-btns">
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                GET STARTED
            </Button>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                WATCH TRAILER <i className='far fa-play-circle'/>
            </Button>


        </div>

    </div>
  )
}
export default HeroSection