import "./App.css";
import Home from "./Pages/Home/Home";
// react router dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetails from "./Pages/MovieDetails/MovieDetails";

function App() {
  return (
    <main>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/movie/:id" element={<MovieDetails/>}/>
      </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
