import React, { useState } from "react";

// import { Link } from 'react-router-dom';
import Navbar from "./Navbar";
import BottomButton from "./BottomButton";
import descriptionImage from './images/description image.jpg'
import DashboardGrid from "./HomeCardGrid";
const HomePage = () =>{


    


    return(
        <div>
            

        
        <div className="home-container" style={{ display: "block", position: "relative" }}>
                <div className="background-overlay" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.7)" }}></div>
                {/* Text labels */}
                <label className="leagueSpartan" style={{ fontWeight: '900', position: "absolute", top: '40%', left: '32%', transform: 'translate(-50%, -50%)', color: '#fff', fontSize: '30px', width: '800px' }}>Empowering Brands with Creative Digital Solutions</label>
                
                <label className="leagueSpartan" style={{  fontWeight: '500', position: "absolute", top: 'calc(40% + 60px)', textAlign: 'left', left: '32%', transform: 'translate(-50%, -50%)', color: '#fff', fontSize: '20px', width: '800px' }}>
                Cult Agency brings your brand’s vision to life through innovative web development, dynamic digital marketing, and captivating visual content.
                </label>
            </div>
            <div style={{height:'490px'}}>

            <div class="image-text-container">
            <img src={descriptionImage} alt="descriptionImage" class="imageStyle" />
            <p class="textStyle">At Cult Agency, we specialize in transforming ideas into powerful digital experiences. With a focus on creativity, strategy, and results, we help businesses thrive in the digital age. Whether you need a stunning website, a compelling marketing strategy, or eye-catching visuals, our team is here to elevate your brand.
                <br/>                <br/>

            <label style={{fontWeight:'800',textDecoration:'underline'}}>Featured Services :</label>
            <ul >
                <li>Web Development: Custom, responsive, and scalable websites that engage and convert.</li>
                <li>Digital Marketing: Data-driven strategies that boost your brand’s visibility and impact.</li>
                <li>Graphic Design: Creative visuals that capture attention and communicate your message.</li>
                <li>Photography: Professional photography that brings your brand to life.</li>
                
            </ul>
            </p>
            </div>

            </div>
            <div className="servicesBackground">
                <label className="labeltest" style={{fontSize:'40px',marginLeft: '40%'}} >Explore Services</label>
                
                <div style={{ display: 'flex', justifyContent: 'center',marginLeft:'15%' }}>
          <div style={{  marginTop: '150px' }}> {/* Adjust the width as needed */}
            <DashboardGrid />
          </div>
        </div>



            </div>



















            <BottomButton/>
            </div>
    )

}
export default HomePage;