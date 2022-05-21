// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Main from './pages/Main';
import NotFound from './pages/NotFound';
import AboutUs from './pages/AboutUs';
import Settings from './pages/Settings';
import Tutorial from './pages/Tutorial';
import NavBar from './components/Navbar/NavBar';
import Post from './pages/Post';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Main />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="settings" element={<Settings />} />
          <Route path="tutorial" element={<Tutorial />} />
          <Route path="*" element={<NotFound />} />
          <Route path="post" element={<Post />}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;