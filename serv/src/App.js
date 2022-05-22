// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Main from './pages/Main';
import NotFound from './pages/NotFound';
import AboutUs from './pages/AboutUs';
import Settings from './pages/Settings';
import THome from './pages/teacherHome';
import SHome from './pages/studentHome';
import Tutorial from './pages/Tutorial';
import NavBar from './components/Navbar/NavBar';
import Post from './pages/Post';
import {useEffect} from "react"
import Results from "./pages/results";
import Check from './pages/checkPage'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Main />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="settings" element={<Settings />} />
          <Route path="shome" element={<SHome />} />
          <Route path="thome" element={<THome />} />
          <Route path="tutorial" element={<Tutorial />} />
          <Route path="post" element={<Post />}/>
          <Route path="results" element={<Results />}/>
          <Route path="check" element={<Check />}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;