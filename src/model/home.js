
export default {
  namespace: 'home',
  state: {
    songs: [
      {id: 1, name: '再见', artist: '张震岳', length: 183},
      {id: 2, name: '爱我别走', artist: '张震岳', length: 240},
      {id: 3, name: 'Aesthetic', artist: '泽野弘之', length: 233},
    ],
  },
  reducers: {
    addSong(state, {payload: {song}}) {
      const goodSong = {
        ...song,
        id: (new Date()).getMilliseconds(),
      };
      return {
        ...state,
        songs: state.songs.concat(goodSong),
      };
    }
  },
};
