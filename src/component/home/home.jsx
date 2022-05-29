import React from 'react'
import Questions from '../Questions/questions';
import Review from "../Review/review";
import "./home.css";


export default function Home() {
  return (
    <div className="home">
        <div className="home-wrapper">
        <Review />
            <Questions />
           
        </div>
    </div>
  )
}
