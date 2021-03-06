import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'dva';
import { routerRedux } from 'dva/router';
import styles from './Home.less';
import { songTimeFormat } from '../util/format';
import Header from '../component/Header';

// const area

class Home extends React.Component {
  handleAddSong = () => {
    this.props.dispatch(routerRedux.push('/addSong'));
  };

  render() {
    const {songs} = this.props;
    const songList = songs.map(song => (
      <tr key={song.id}>
        <td><Link to={`/song/${song.id}`}>{song.name}</Link></td>
        <td>{song.artist}</td>
        <td>{songTimeFormat(song.length)}</td>
      </tr>
    ));

    return (
      <div>
        <Header/>
        <div className={styles.home}>
          <h1>Listen to the music !!!</h1>
          <button
            className={styles.addBtn}
            onClick={this.handleAddSong}
          >+ 添加歌曲</button>
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
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { songs: state.home.songs };
}
const HomePage = connect(mapStateToProps)(Home);
export default HomePage;
