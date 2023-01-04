import Main from "./Main";
import { Routes, Route, useLocation } from "react-router-dom";
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
import { useEffect } from "react";

function App() {
  const location = useLocation();
  let currentPage = location.pathname;

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

  const [showLoader, setShowLoader] = useState(true);

  //movies from json file
  const [moviesFromJson, setMoviesFromJson] = useState([]);
  useEffect(() => {
    const getMovies = async () => {
      setShowLoader(true);

      fetch("/movieData.json")
        .then((res) => res.json())
        .then((data) => {
          // console.log("movies fetched successfully!!");
          setMoviesFromJson(data);
          setShowLoader(false);
        })
        .catch((err) => {
          console.log(err.message);
          setShowLoader(false);
        });
    };
    getMovies();
  }, [currentPage]);

  //manimations from json file
  const [animationsFromJson, setAnimationsFromJson] = useState([]);
  useEffect(() => {
    const getAnimations = async () => {
      setShowLoader(true);

      fetch("/animationData.json")
        .then((res) => res.json())
        .then((data) => {
          // console.log("animations fetched successfully!!");
          setAnimationsFromJson(data);
          setShowLoader(false);
        })
        .catch((err) => {
          console.log(err.message);
          setShowLoader(false);
        });
    };
    getAnimations();
  }, [currentPage]);

  const [homeMovies, setHomeMovies] = useState([]);
  //to shuffle the movie array
  useEffect(() => {
    const sortMovies = async () => {
      setShowLoader(true);
      try {
        let moviesCopy = [...moviesFromJson];
        const randomMovies = moviesCopy.sort(() => 0.5 - Math.random());
        let firstTwentyMovies = randomMovies.slice(0, 12);
        setHomeMovies(firstTwentyMovies);
        setShowLoader(false);
      } catch (err) {
        console.log(err.message);
        setShowLoader(false);
      }
    };
    sortMovies();
  }, [moviesFromJson, currentPage]);

  const [homeAnimations, setHomeAnimations] = useState([]);
  //to shuffle the movie array
  useEffect(() => {
    const sortAnimations = async () => {
      setShowLoader(true);
      try {
        let animationCopy = [...animationsFromJson];
        const randomAnimations = animationCopy.sort(() => 0.5 - Math.random());
        let firstTwentyAnimations = randomAnimations.slice(0, 12);
        setHomeAnimations(firstTwentyAnimations);
        setShowLoader(false);
      } catch (err) {
        console.log(err.message);
        setShowLoader(false);
      }
    };
    sortAnimations();
  }, [animationsFromJson, currentPage]);

  //to gradually increase movies displayed
  let firstTwenty = moviesFromJson.slice(0, 20);
  let nextThirty = moviesFromJson.slice(20, 30);
  let nextForty = moviesFromJson.slice(30, 40);
  let nextFifty = moviesFromJson.slice(40, 50);
  let nextSixty = moviesFromJson.slice(50, 60);

  const [display30, setDisplay30] = useState(false);
  function show30() {
    setDisplay30(true);
  }

  const [display40, setDisplay40] = useState(false);
  function show40() {
    setDisplay40(true);
  }

  const [display50, setDisplay50] = useState(false);
  function show50() {
    setDisplay50(true);
  }

  const [display60, setDisplay60] = useState(false);
  function show60() {
    setDisplay60(true);
  }

  //to gradually increase manimation displayed
  let firstTwentyA = animationsFromJson.slice(0, 20);
  let nextThirtyA = animationsFromJson.slice(20, 30);
  let nextFortyA = animationsFromJson.slice(30, 40);
  let nextFiftyA = animationsFromJson.slice(40, 50);
  let nextSixtyA = animationsFromJson.slice(50, 60);

  const [displayA30, setDisplayA30] = useState(false);
  function showA30() {
    setDisplayA30(true);
  }

  const [displayA40, setDisplayA40] = useState(false);
  function showA40() {
    setDisplayA40(true);
  }

  const [displayA50, setDisplayA50] = useState(false);
  function showA50() {
    setDisplayA50(true);
  }

  const [displayA60, setDisplayA60] = useState(false);
  function showA60() {
    setDisplayA60(true);
  }
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Main
            showSearchList={showSearchList}
            handleSearchSubmit={handleSearchSubmit}
            handleCloseSearchList={handleCloseSearchList}
            showLoader={showLoader}
            setShowLoader={setShowLoader}
            currentPage={currentPage}
            moviesFromJson={moviesFromJson}
            animationsFromJson={animationsFromJson}
            homeMovies={homeMovies}
            homeAnimations={homeAnimations}
          />
        }
      />
      <Route
        path="/about"
        element={
          <About
            showSearchList={showSearchList}
            handleSearchSubmit={handleSearchSubmit}
            handleCloseSearchList={handleCloseSearchList}
            currentPage={currentPage}
            moviesFromJson={moviesFromJson}
            animationsFromJson={animationsFromJson}
          />
        }
      />
      <Route
        path="/movies"
        element={
          <Movies
            showSearchList={showSearchList}
            handleSearchSubmit={handleSearchSubmit}
            handleCloseSearchList={handleCloseSearchList}
            showLoader={showLoader}
            setShowLoader={setShowLoader}
            currentPage={currentPage}
            moviesFromJson={moviesFromJson}
            animationsFromJson={animationsFromJson}
            firstTwenty={firstTwenty}
            nextThirty={nextThirty}
            nextForty={nextForty}
            nextFifty={nextFifty}
            nextSixty={nextSixty}
            display30={display30}
            display40={display40}
            display50={display50}
            display60={display60}
            show30={show30}
            show40={show40}
            show50={show50}
            show60={show60}
          />
        }
      />
      <Route
        path="/series"
        element={
          <Series
            showSearchList={showSearchList}
            handleSearchSubmit={handleSearchSubmit}
            handleCloseSearchList={handleCloseSearchList}
            moviesFromJson={moviesFromJson}
            animationsFromJson={animationsFromJson}
          />
        }
      />
      <Route
        path="/anime"
        element={
          <Anime
            showSearchList={showSearchList}
            handleSearchSubmit={handleSearchSubmit}
            handleCloseSearchList={handleCloseSearchList}
            moviesFromJson={moviesFromJson}
            animationsFromJson={animationsFromJson}
          />
        }
      />
      <Route
        path="/animation"
        element={
          <Animation
            showSearchList={showSearchList}
            handleSearchSubmit={handleSearchSubmit}
            handleCloseSearchList={handleCloseSearchList}
            showLoader={showLoader}
            setShowLoader={setShowLoader}
            animationsFromJson={animationsFromJson}
            moviesFromJson={moviesFromJson}
            firstTwentyA={firstTwentyA}
            nextThirtyA={nextThirtyA}
            nextFortyA={nextFortyA}
            nextFiftyA={nextFiftyA}
            nextSixtyA={nextSixtyA}
            displayA30={displayA30}
            displayA40={displayA40}
            displayA50={displayA50}
            displayA60={displayA60}
            showA30={showA30}
            showA40={showA40}
            showA50={showA50}
            showA60={showA60}
          />
        }
      />
      <Route
        path="/movie/:title"
        element={
          <Details
            showSearchList={showSearchList}
            handleSearchSubmit={handleSearchSubmit}
            handleCloseSearchList={handleCloseSearchList}
            moviesFromJson={moviesFromJson}
            animationsFromJson={animationsFromJson}
          />
        }
      />
      <Route
        path="/animations/:title"
        element={
          <AnimationDetails
            showSearchList={showSearchList}
            handleSearchSubmit={handleSearchSubmit}
            handleCloseSearchList={handleCloseSearchList}
            moviesFromJson={moviesFromJson}
            animationsFromJson={animationsFromJson}
          />
        }
      />
      <Route
        path="/contact"
        element={
          <Contact
            showSearchList={showSearchList}
            handleSearchSubmit={handleSearchSubmit}
            handleCloseSearchList={handleCloseSearchList}
            moviesFromJson={moviesFromJson}
            animationsFromJson={animationsFromJson}
          />
        }
      />
      <Route
        path="/privacy-policy"
        element={
          <Privacy
            showSearchList={showSearchList}
            handleSearchSubmit={handleSearchSubmit}
            handleCloseSearchList={handleCloseSearchList}
            moviesFromJson={moviesFromJson}
            animationsFromJson={animationsFromJson}
          />
        }
      />
      <Route
        path="/advertisement"
        element={
          <Ad
            showSearchList={showSearchList}
            handleSearchSubmit={handleSearchSubmit}
            handleCloseSearchList={handleCloseSearchList}
            moviesFromJson={moviesFromJson}
            animationsFromJson={animationsFromJson}
          />
        }
      />
    </Routes>
  );
}

export default App;
