import React from 'react';
import Body from './Body';
import Footer from './Footer';
import './Player.css'
import Sidebar from './Sidebar';

const Player = ({ spotify }) => {
  return (
    <div>
      <div className="player">
        <div className="player__body">
          <Sidebar />
          <Body />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Player;
