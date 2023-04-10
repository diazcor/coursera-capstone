import { useNavigate } from 'react-router-dom';
import React from "react";
import { Image } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import restaurant from "../../../assets/restaurant.jpg";
import SectionWrapper from "../../../components/Section";
import "./HeroSection.css";

const HeroSection = () => {
    const navigate = useNavigate();

    return (
        <SectionWrapper dark={true}>
            <div className="HeroSection">
                <div className="HeroSection__Textbox">
                    <h1 className="HeroSection__Textbox__CompanyName">Little Lemon</h1>
                    <h2 className="HeroSection__Textbox__City">Chicago</h2>
                    <p className="HeroSection__Textbox__Description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, magnam!</p>
                </div>

                <Image fit="fill" className="HeroSection__Banner" borderRadius={16} src={restaurant} alt="welcome image" />

                <button onClick={() => navigate('/reservation')} className="action-btn">
                    <p className="action-btn-children">Reserve a table</p>
                </button>
            </div>
        </SectionWrapper>
    );
};

export default HeroSection;