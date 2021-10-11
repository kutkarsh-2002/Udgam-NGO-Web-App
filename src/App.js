import "./App.css";
import Home from "./home";

import Contact from "./contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/contact" component={Contact} />
          <Route component={Error} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
