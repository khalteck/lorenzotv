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
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Ad from "./pages/Ad";

function App() {
  const [showSearchList, setShowSearchList] = useState(false);

  function handleSearchSubmit(event) {
    event.preventDefault();
    // setShowLoader(true);
    setShowSearchList(true);
    // setTimeout(setShowLoader(false), 5000);
  }
  function handleCloseSearchList() {
    setShowSearchList(false);
    // setShowLoader(false);
  }

  // const location = useLocation();
  // console.log(location.pathname);

  const [showLoader, setShowLoader] = useState(false);
  return (
    <Router>
      <div className="app">
        <Header
          showSearchList={showSearchList}
          handleSearchSubmit={handleSearchSubmit}
          handleCloseSearchList={handleCloseSearchList}
          showLoader={showLoader}
          setShowLoader={setShowLoader}
        />
        <div className="content-per-page">
          <Switch>
            <Route exact path="/">
              <Main
                showSearchList={showSearchList}
                handleCloseSearchList={handleCloseSearchList}
                showLoader={showLoader}
              />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route exact path="/movies">
              <Movies
                showSearchList={showSearchList}
                handleSearchSubmit={handleSearchSubmit}
                handleCloseSearchList={handleCloseSearchList}
              />
            </Route>
            <Route path="/series">
              <Series />
            </Route>
            <Route path="/anime">
              <Anime />
            </Route>
            <Route path="/animation">
              <Animation
                showSearchList={showSearchList}
                handleSearchSubmit={handleSearchSubmit}
                handleCloseSearchList={handleCloseSearchList}
              />
            </Route>
            <Route exact path="/movie/:title">
              <Details />
            </Route>
            <Route exact path="/animations/:title">
              <AnimationDetails />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/privacy-policy">
              <Privacy />
            </Route>
            <Route path="/advertisement">
              <Ad />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
