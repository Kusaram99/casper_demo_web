import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ConnectWallete from './components/walleteComponent/ConnectWallete';
import Home from './components/homeComponent/Home';
import Project from './components/projectComponent/Project';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/connect" element={<ConnectWallete/>} />
        <Route exact path="/project" element={<Project/>} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App;
