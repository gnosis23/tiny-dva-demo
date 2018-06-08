import React from 'react';
import styles from './Home.less';
import { Link } from 'react-router-dom';
import { songTimeFormat } from '../util/format';

// const area
const songs = [
  {id: 1, name: '再见', artist: '张震岳', length: 183},
  {id: 2, name: '爱我别走', artist: '张震岳', length: 240},
  {id: 3, name: 'Aesthetic', artist: '泽野弘之', length: 233},
];

export default function Home()  {
  const songList = songs.map(song => (
    <tr key={song.id}>
      <td><Link to="/song">{song.name}</Link></td>
      <td>{song.artist}</td>
      <td>{songTimeFormat(song.length)}</td>
    </tr>
  ));

  return (
    <div className={styles.home}>
      <h1>Listen to the music !!!</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Artist</th>
            <th>Length</th>
          </tr>
        </thead>
        <tbody>
          {songList}
        </tbody>
      </table>
    </div>
  );

}
