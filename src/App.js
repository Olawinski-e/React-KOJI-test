import "./App.css";
import List from "./components/postList";
import Post from "./components/post";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Redirect exact from="/" to="/liste" />
          <Route path="/liste" component={List} />

          <Route path="/liste/:id">{Post}</Route>
          <Route path="**" exact>
            <Redirect to="/liste" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
