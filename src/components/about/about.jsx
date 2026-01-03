import React from 'react';
import ProfileCard from '../../Bits/ProfileCard.jsx';
import './about.css';

const About = () => {
    return (
        <>
        <div className="about-container">
            <div className="about-box">
                <ProfileCard />
                <div className="about-text">
                    <h2 className="about-h">About Me</h2>
                    <p className="about-p">I am an AI-focused Full-Stack Developer and Engineering student at PES Modern College of Engineering, Pune, specializing in building Autonomous Agentic Workflows. Unlike traditional developers, I don't just build UI; I architect end-to-end solutions—from deterministic financial auditors like ClearBill (using FastAPI, Groq, and PostgreSQL) to RAG-powered shopping assistants.</p>
                </div>
            </div>
        </div>
        </>
    );
}

export default About;