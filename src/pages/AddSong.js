import React from 'react';
import styles from './AddSong.less';
import { connect } from 'dva/index';
import { routerRedux } from 'dva/router';
import Header from '../component/Header';

class AddSong extends React.Component{
  state = {
    name: '',
    artist: '',
    length: '',
  };

  handleChange = (event, field) => {
    this.setState({
      [field]: field === 'length' ? Number(event.target.value) : event.target.value
    })
  };

  submit = () => {
    const {dispatch} = this.props;
    dispatch({
      type: 'home/addSong',
      payload: {
        song: this.state,
      }
    });
    dispatch(routerRedux.push('/'));
  };

  render() {
    return (
      <div>
        <Header />
        <div className={styles.container}>
          <div>
            <input className={styles.input}
                   type="text"
                   value={this.state.name}
                   onChange={(e) => this.handleChange(e, 'name')}
                   placeholder="name" />
          </div>
          <div>
            <input className={styles.input}
                   type="text"
                   value={this.state.artist}
                   onChange={(e) => this.handleChange(e, 'artist')}
                   placeholder="artist" />
          </div>
          <div>
            <input className={styles.input}
                   type="number"
                   value={this.state.length}
                   onChange={(e) => this.handleChange(e, 'length')}
                   placeholder="length" />
          </div>
          <div>
            <button className={styles.addBtn} onClick={this.submit}>Submit</button>
          </div>
        </div>
      </div>
    )
  }
}


const AddSongPage = connect()(AddSong);
export default AddSongPage;
