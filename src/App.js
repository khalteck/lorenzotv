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

  // const location = useLocation();
  // console.log(location.pathname);

  const [showLoader, setShowLoader] = useState(false);

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
          />
        }
      />
      <Route path="/about" element={<About currentPage={currentPage} />} />
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
          />
        }
      />
      <Route path="/series" element={<Series />} />
      <Route path="/anime" element={<Anime />} />
      <Route
        path="/animation"
        element={
          <Animation
            showSearchList={showSearchList}
            handleSearchSubmit={handleSearchSubmit}
            handleCloseSearchList={handleCloseSearchList}
            showLoader={showLoader}
            setShowLoader={setShowLoader}
          />
        }
      />
      <Route path="/movie/:title" element={<Details />} />
      <Route path="/animations/:title" element={<AnimationDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/privacy-policy" element={<Privacy />} />
      <Route path="/advertisement" element={<Ad />} />
    </Routes>
  );
}

export default App;

//  {/* <div className="app">
//         <Header
//           showSearchList={showSearchList}
//           handleSearchSubmit={handleSearchSubmit}
//           handleCloseSearchList={handleCloseSearchList}
//           showLoader={showLoader}
//           setShowLoader={setShowLoader}
//         />
//         <div className="content-per-page">
//           <Switch>
//             <Route exact path="/">
//               <Main
//                 showSearchList={showSearchList}
//                 handleCloseSearchList={handleCloseSearchList}
//                 showLoader={showLoader}
//               />
//             </Route>
//             <Route path="/about">
//               <About />
//             </Route>
//             <Route exact path="/movies">
//               <Movies
//                 showSearchList={showSearchList}
//                 handleSearchSubmit={handleSearchSubmit}
//                 handleCloseSearchList={handleCloseSearchList}
//               />
//             </Route>
//             <Route path="/series">
//               <Series />
//             </Route>
//             <Route path="/anime">
//               <Anime />
//             </Route>
//             <Route path="/animation">
//               <Animation
//                 showSearchList={showSearchList}
//                 handleSearchSubmit={handleSearchSubmit}
//                 handleCloseSearchList={handleCloseSearchList}
//               />
//             </Route>
//             <Route exact path="/movie/:title">
//               <Details />
//             </Route>
//             <Route exact path="/animations/:title">
//               <AnimationDetails />
//             </Route>
//             <Route path="/contact">
//               <Contact />
//             </Route>
//             <Route path="/privacy-policy">
//               <Privacy />
//             </Route>
//             <Route path="/advertisement">
//               <Ad />
//             </Route>
//           </Switch>
//         </div>
//         <Footer />
//       </div> */}
