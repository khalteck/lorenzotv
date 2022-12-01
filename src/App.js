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
import AnimationDetails from "./pages/AnimationDetails";
import "./output.css";
import { useState } from "react";

function App() {
  const [showSearchList, setShowSearchList] = useState(false);

  function handleSearchSubmit(event) {
    event.preventDefault();
    setShowSearchList(true);
  }
  function handleCloseSearchList() {
    setShowSearchList(false);
    console.log("close clicked!!");
  }
  return (
    <Router>
      <div className="app">
        <Header
          showSearchList={showSearchList}
          handleSearchSubmit={handleSearchSubmit}
          handleCloseSearchList={handleCloseSearchList}
        />
        <div className="content-per-page">
          <Switch>
            <Route exact path="/">
              <Main
                showSearchList={showSearchList}
                handleCloseSearchList={handleCloseSearchList}
              />
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
            <Route exact path="/movie/:title">
              <Details />
            </Route>
            <Route exact path="/animations/:title">
              <AnimationDetails />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
