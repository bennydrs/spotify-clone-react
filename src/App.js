import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login';
import { getTokenFromUrl } from './config/spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './components/Player';
import { useDataLayerValue } from './context/DataLayer';

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user
        });
      });

      spotify.getUserPlaylists().then(playlists => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists
        })
      })

      spotify.getPlaylist('37i9dQZEVXcQBdgIDt4sx3').then(res => {
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: res
        })
      });
    }

  }, [])
  // console.log('token', token);
  // console.log('user', user);
  return (
    <div className="app">
      {
        token ? (
          <Player />
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;
