import dva, { connect } from 'dva';
import { Router, Route, Switch } from 'dva/router';

import Home from './pages/Home';
import Song from './pages/Song';

// 1. Initialize
const app = dva();

// 2. Model
// Remove the comment and define your model.
app.model({
  namespace: 'count',
  subscriptions: {
  },
  effects: {
  },
  state: {
    record: 0,
    current: 0,
  },
  reducers: {
  },
});


function mapStateToProps(state) {
  return { count: state.count };
}
const HomePage = connect(mapStateToProps)(Home);
const SongPage = connect()(Song);

// 3. Router
app.router(({ history }) =>
  <Router history={history}>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/song" exact component={SongPage} />
    </Switch>
  </Router>
);

// 4. Start
app.start('#root');
