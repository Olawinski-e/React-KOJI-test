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
          <Route exact path="/liste" component={List} />

          <Route exact path="/item/:id" component={Post} />
          <Route exact path="**">
            <Redirect to="/liste" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
