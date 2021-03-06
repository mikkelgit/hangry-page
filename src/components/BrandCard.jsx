import React from 'react'
import './brandCard.css'

export default function BrandCard({ brand }) {
    return (
        <div style={{ position: 'relative' }}>
            <div className="brand-card-logo-image-container">
                <img className="brand-card-logo-image" src={brand.logo} alt={brand.name + ' logo'} />
            </div>
            <img className="brand-card-background-image" src={brand.bg} alt={brand.name + ' image'} />
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 6, marginTop: 6 }}>
                <p className="brand-card-main-title">{brand.name}</p>
                <svg className="arrow-icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg>
            </div>
            <p className="brand-card-subtitle">{brand.type} · {brand.origin}</p>
        </div>
    )
}
