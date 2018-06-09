import React from 'react';
import Header from '../component/Header';
import styles from './Song.less';
import {songTimeFormat} from '../util/format';

// const area
const song = {
  name: '再见',
  artist: '张震岳',
};
const lyrics = [
  {time: 15, text: '我怕我没有机会'},
  {time: 45, text: '跟你说一声再见'},
  {time: 75, text: '因为也许就再也见不到你'},
];

export default function Song(props) {
  const {id} = props.match.params;

  const lyricList = lyrics.map(lyric => {
    return (
      <div key={lyric.time} className={styles.line}>
        <span className={styles.time}>{songTimeFormat(lyric.time)}</span>
        <span className={styles.container}>{lyric.text}</span>
      </div>
    )
  });

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h1>{song.name}</h1>
        <h3>{id}</h3>
        {lyricList}
      </div>
    </div>
  );

};
