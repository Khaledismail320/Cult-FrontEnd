import React, { useState } from "react";

// import { Link } from 'react-router-dom';
import Navbar from "./Navbar";
import BottomButton from "./BottomButton";
import descriptionImage from './images/description image.jpg'
import DashboardGrid from "./HomeCardGrid";
import {Link} from '@chakra-ui/react'
const HomePage = () => {





    return (
        <div >



            <div className="home-container">
                <div className="background-overlay"></div>
                <div className="text-container">
                    <label className="leagueSpartan title">
                        Empowering Brands with Creative Digital Solutions
                    </label>
                    <label className="leagueSpartan subtitle">
                        Cult Agency brings your brand’s vision to life through innovative web development, dynamic digital marketing, and captivating visual content.
                    </label>
                </div>
            </div>

            <div id='home-description' >
                <div class="image-text-container">
                    <img src={descriptionImage} alt="descriptionImage" class="imageStyle" />
                    <p class="textStyle">At Cult Agency, we specialize in transforming ideas into powerful digital experiences. With a focus on creativity, strategy, and results, we help businesses thrive in the digital age. Whether you need a stunning website, a compelling marketing strategy, or eye-catching visuals, our team is here to elevate your brand. 
                        
                        <Link href="/AboutUs" fontWeight='bold'>Learn more about us?</Link>
                        <br />                

                        <label style={{ fontWeight: '800', textDecoration: 'underline' }}>Featured Services :</label>
                        <ul >
                            <li>Web Development: Custom, responsive, and scalable websites that engage and convert.</li>
                            <li>Digital Marketing: Data-driven strategies that boost your brand’s visibility and impact.</li>
                            <li>Graphic Design: Creative visuals that capture attention and communicate your message.</li>
                            <li>Photography: Professional photography that brings your brand to life.</li>

                        </ul>
                    </p>
                </div>
                <br />
            </div>
            <div id="services-section" className="servicesBackground">
                <div className="content-container">
                    <label className="labeltest">Explore Services</label>
                    <div className="dashboard-grid-container">
                        <DashboardGrid />
                    </div>
                    <br/>
                </div>
            </div>




















            <BottomButton />
        </div>
    )

}
export default HomePage;