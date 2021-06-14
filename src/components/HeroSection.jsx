import React from 'react'
import './heroSection.css'

export default function HeroSection() {
    return (
        <div style={{ backgroundColor: '#FAFAFA' }}>
            <div className="hero-section-container">
                <div className="hero-section-detail-container">
                    <p className="hero-section-subtitle">Kamu laper atau haus?</p>
                    <p className="hero-section-main-title">Tenang... ada Hangry yang siap mengatasi</p>
                    <div>
                        <img className="app-download" src="https://www.ishangry.com/_next/static/images/google-play-787582aee52e0d8e9e97432e5eb98bc8.png" alt="" />
                        <img className="app-download" src="https://www.ishangry.com/_next/static/images/app-store-aadaec1ba7be4be919f0f4dd2175f693.png" alt="" />
                    </div>
                </div>
                <img className="mobile-image" src="https://i.imgur.com/YRsMoso.png" alt="" />
                <img className="web-image" src="https://i.imgur.com/7VZUoQh.png" alt="" />
            </div>
        </div>
    )
}
