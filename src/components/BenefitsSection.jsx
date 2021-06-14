import React from 'react'
import './benefitsSection.css'

export default function Benefits() {
    return (
        <div className="main-container">
            <div className="benefits-wrapper">
                <div className="benefits-illustration" style={{ order: 9999 }}>
                    <img src="https://cdn.idntimes.com/content-images/community/2019/05/photo-1466978913421-dad2ebd01d17-c4498ab51675603a20b03394ed6399d6.jpeg" alt="benefits illustration" />
                </div>
                <div>
                    <div className="benefits-title-wrapper">
                        <p className="benefits-main-title">Makin rame, makin hemat!</p>
                        <p className="benefits-subtitle">Nikmati keuntungan dengan minimum pembelian 20 porsi menu apa aja. Cocok untuk hidangan segala acara!</p>
                    </div>
                    <div className="benefits-details">
                        <div className="benefits-list-item">
                            <svg aria-hidden="true" className="check-icon" focusable="false" data-prefix="fas" data-icon="check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
                            <p>Beragam pilihan menu</p>
                        </div>
                        <div className="benefits-list-item">
                            <svg aria-hidden="true" className="check-icon" focusable="false" data-prefix="fas" data-icon="check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
                            <p>Semua menu diskon 20%</p>
                        </div>
                        <div className="benefits-list-item">
                            <svg aria-hidden="true" className="check-icon" focusable="false" data-prefix="fas" data-icon="check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
                            <div>
                                <p>Gratis biaya kirim</p>
                                <p className="terms" >*Syarat dan ketentuan berlaku</p>
                            </div>
                        </div>
                    </div>
                    <div className="button">
                        <p>Pesan Sekarang</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
