import { Router, Route, Switch } from 'dva/router';

import Home from './pages/Home';
import Song from './pages/Song';
import app from './dva';
import count from './model/count';

// Model
app.model(count);

// Router
app.router(({ history }) =>
  <Router history={history}>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/song/:id" exact component={Song} />
    </Switch>
  </Router>
);

// 4. Start
app.start('#root');
