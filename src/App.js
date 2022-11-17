import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Anime from "./pages/Anime";
import Animation from "./pages/Animation";
import Details from "./pages/Details";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="content-per-page">
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route exact path="/movies">
              <Movies />
            </Route>
            <Route path="/series">
              <Series />
            </Route>
            <Route path="/anime">
              <Anime />
            </Route>
            <Route path="/animation">
              <Animation />
            </Route>
            <Route path="/movie/:title">
              <Details />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
