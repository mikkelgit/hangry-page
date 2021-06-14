import React from 'react'
import './brandSection.css'
import brandData from '../brandData'
import BrandCard from './BrandCard'

export default function BrandSection() {
    return (
        <div className="main-container">
            <p className="brand-section-main-title">Hangry! adalah restorant dengan beragam brand</p>
            <p className="brand-section-subtitle">Kami menyajikan beragam brand untuk menemani setiap waktu santapmu</p>
            <div className="brand-card-container">
                {
                    brandData.map(brand => <BrandCard key={brand.name} brand={brand} />)
                }
            </div>
        </div>
    )
}
