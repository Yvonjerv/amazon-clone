import React from 'react'
import Product from "./Product"
import "./Home.css"

function Home() {
    return (
      <div className="home">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="34567"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
            price={11.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/51WIKlio9qL.jpg"
          />

          <Product
            id="73556"
            title="The Hard Thing About Hard Things: Building a Business When There Are No Easy Answers"
            price={10.96}
            rating={4}
            image="https://m.media-amazon.com/images/I/51ZuUYAopiL.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="65436"
            title="What You Do Is Who You Are: How to Create Your Business Culture"
            price={12.3}
            rating={2}
            image="https://m.media-amazon.com/images/I/51DbQyPpa1L.jpg"
          />

          <Product
            id="123456"
            title="Elastic Habits: How to Create Smarter Habits That Adapt to Your DayElastic Habits: How to Create Smarter Habits That Adapt to Your Day"
            price={11.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/41ZE3qJQHSL.jpg"
          />
          <Product
            id="5677"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
            price={11.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/51WIKlio9qL.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="09876"
            title="Legendary Habit Check: The 5 Step Formula For Creating Good Habits Eliminate Your Pathetic Bad Habits, Improve Your Happiness and Successfully Create Your Best Life"
            price={12.3}
            rating={2}
            image="https://m.media-amazon.com/images/I/41hf+DIGaML.jpg"
          />
        </div>
      </div>
    );
}

export default Home
