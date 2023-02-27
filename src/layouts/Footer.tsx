import React from 'react'
import wealthHealthLogo from '../assets/logos/wealth-health-logo.png'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo-container">
        <img
          src={wealthHealthLogo}
          alt="Wealth health logo"
          className="footer__logo-container__logo"
        />
        <p className="footer__logo-container__text">WEALTH HEALTH</p>
      </div>
      <p className="footer__copyright">
        {'HRnet by Wealth Health, 2006-2023 ©\nAll rights reserved.'}
      </p>
    </footer>
  )
}

export default Footer
