import { Router, Route, Switch } from 'dva/router';

import Home from './pages/Home';
import Song from './pages/Song';
import AddSong from './pages/AddSong';
import app from './dva';
import count from './model/count';
import home from './model/home';

// Model
app.model(count);
app.model(home);

// Router
app.router(({ history }) =>
  <Router history={history}>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/song/:id" exact component={Song} />
      <Route path="/addSong" exact component={AddSong} />
    </Switch>
  </Router>
);

// 4. Start
app.start('#root');
