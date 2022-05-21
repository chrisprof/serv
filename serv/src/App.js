// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Main from './pages/Main'
import NavBar from './components/Navbar/NavBar'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Main />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;