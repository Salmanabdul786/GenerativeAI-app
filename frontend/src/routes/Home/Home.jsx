import React, { useState } from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation'



const Home = () => {
  const [typingStatus, setTypingStatus] = useState("human1");



  return (
    <div className="homepage">
   
    <div className="left">
      <h1>ChatGPT</h1>
      <h2>Free to use. Easy to try. Just ask and ChatGPT can help with writing, learning, brainstorming, and more.</h2>
      <h3>
      Get answers. Find inspiration. Be more productive.
      </h3>
      <Link to="/dashboard">Get Started</Link>
      
    </div>
    <div className="right">
      <div className="imgContainer">
        <div className="bgContainer">
          <div className="bg"></div>
        </div>
        <img src="/bot1.png" alt="" className="bot" />
        <div className="chat">
          <img
            src={
              typingStatus === "human1"
                ? "/human1.jpeg"
                : typingStatus === "human2"
                ? "/human2.jpeg"
                : "bot1.png"
            }
            alt=""
          />
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Human:We produce food for Mice",
              2000,
              () => {
                setTypingStatus("bot");
              },
              "Bot:We produce food for Hamsters",
              2000,
              () => {
                setTypingStatus("human2");
              },
              "Human2:We produce food for Guinea Pigs",
              2000,
              () => {
                setTypingStatus("bot");
              },
              "Bot:We produce food for Chinchillas",
              2000,
              () => {
                setTypingStatus("human1");
              },
            ]}
            wrapper="span"
            repeat={Infinity}
            cursor={true}
            omitDeletionAnimation={true}
          />
        </div>
      </div>
    </div>
    <div className="terms">
      <img src="/logo2.jpg" alt="" />
      <div className="links">
        <Link to="/">Terms of Service</Link>
        <span>|</span>
        <Link to="/">Privacy Policy</Link>
      </div>
    </div>
  </div>
  )
}

export default Home
