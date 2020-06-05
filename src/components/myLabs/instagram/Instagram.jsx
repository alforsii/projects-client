import React from 'react';
import instagram from './Instagram.module.css';

export default function Instagram() {
  return (
    <div className={instagram.body}>
      <div className={instagram.bgAbsolute}>
        <div className={instagram.top}></div>
        <div className={instagram.bottom}></div>
      </div>

      <div className="container">
        <div className={instagram.main}>
          <div>
            <img
              id={instagram.phones}
              src="../images/instagram/phones.png"
              alt="phones-img"
            />
          </div>
          <div>
            <nav className={instagram.navbarMain}>
              <img
                id={instagram.brandImg}
                src="../images/instagram/brand.png"
                alt="brand-img"
                className={instagram.navbarBrand}
              />
              <button className={instagram.loginBtn}>
                <img src="../images/instagram//home.png" alt="home-icon" />
                Log in
              </button>
            </nav>
            <div className={`${instagram.navMessage} ${instagram.boxShadow}`}>
              <h3>
                Capture and Share
                <br /> the World's Moments
              </h3>
              <p>
                Instagram is a <b>fast</b>, <b>beautiful</b> and <b>fun</b> way
                to share your life with friends.
              </p>
              <p>
                Take a picture or video, choose a filter to transform it's look
                and feel, then post to Instagramit's that easy. You can share
                even to Facebook, Twitter, Tumblr and more. It's a new way to
                see the world.
              </p>
            </div>
            <p className={instagram.lastP}>
              Oh yeah, did we mention it's free?
            </p>
            {/* <!-- <div className={instagram.nav-message}>
            </div> --> */}
            <div>
              <img
                src="../images/instagram/badge-iphone.png"
                alt="iphone-img"
              />
              <img
                src="../images/instagram/badge-android.png"
                alt="android-img"
              />
            </div>
          </div>
        </div>
        <footer>
          <nav className={`navbar navbar-expand ${instagram.footerNavbar}`}>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className={`nav-link ${instagram.navLink}`} href="!#">
                  {' '}
                  About us
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${instagram.navLink}`} href="!#">
                  {' '}
                  Support
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${instagram.navLink}`} href="!#">
                  {' '}
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${instagram.navLink}`} href="!#">
                  {' '}
                  Press
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${instagram.navLink}`} href="!#">
                  {' '}
                  API
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${instagram.navLink}`} href="!#">
                  {' '}
                  Jobs
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${instagram.navLink}`} href="!#">
                  {' '}
                  Privacy
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${instagram.navLink}`} href="!#">
                  {' '}
                  Terms
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${instagram.navLink} disabled`}
                  href="!#"
                >
                  {' '}
                  &copy;2014 Instagram
                </a>
              </li>
            </ul>
          </nav>
        </footer>
      </div>
    </div>
  );
}
