import React from 'react';
import spotify from './Spotify.module.css';

export default function Spotify() {
  return (
    <div>
      <nav
        className={`navbar navbar-expand navbar-light bg-light ${spotify.navbar}`}
      >
        <a className="navbar-brand" href="!#">
          <img
            className={spotify.spotifyBrand}
            src="../images/spotify/spotify-logo.png"
            alt="spotify-brand-img"
          />
        </a>

        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="!#">
              Premium
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="!#">
              Discover
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="!#">
              Help
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="!#">
              Download
            </a>
          </li>
        </ul>
      </nav>

      <div className={spotify.showcase}>
        <img
          id={spotify.showcaseImg}
          src="../images/spotify/landing.jpg"
          alt="showcase-img"
        />
        <div className={spotify.showcaseHeader}>
          <h2>Music for everyone</h2>
          <p>Spotify is now free on mobile, tablet and computer.</p>
          <p>Listen to the right music, wherever you are.</p>
        </div>
      </div>

      <div className={`container ${spotify.container}`}>
        <br />
        <h3>What's on Spotify?</h3>
        <hr />
        <div className={spotify.containerBody}>
          <div>
            <img
              className={spotify.containerIcons}
              src="../images/spotify/music-icon.png"
              alt="icons"
            />
            <h4>Millions of songs</h4>
            <p>There are millions of songs on Spotify</p>
          </div>
          <div>
            <img
              className={spotify.containerIcons}
              src="../images/spotify/high-quality-icon.png"
              alt="icons"
            />
            <h4>HD Music</h4>
            <p>Listen to music as if you were listening live</p>
          </div>
          <div>
            <img
              className={spotify.containerIcons}
              src="../images/spotify/devices-icon.png"
              alt="icons"
            />
            <h4>Stream everywhere</h4>
            <p>Stream music on your smartphone, tablet or computer</p>
          </div>
        </div>
      </div>

      <div className={`container ${spotify.container} ${spotify.footer}`}>
        <div>
          <h3>It’s as yeezy as Kanye West.</h3>
          <hr />
          <div className={spotify.footerNav}>
            <br />
            <h3>Search</h3>
            <p>Know what you want to listen to? Just search and hit play.</p>
            <h3>Browse</h3>
            <p>
              Check out the latest charts, brand new releases and great
              playlists for right now.
            </p>
            <h3>Discover</h3>
            <p>
              Enjoy new music every Monday with your own personal playlist. Or
              sit back and enjoy Radio.
            </p>
          </div>
        </div>
        <img id={spotify.footerImg} src="../images/spotify/spotify-app.jpg" />
        <img
          id={spotify.logoWhite}
          src="../images/spotify/spotify-icon-white.png"
          alt="logo-white"
        />
      </div>
    </div>
  );
}
