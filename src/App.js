import './App.scss';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "./routes/Home";
import CommunityList from './routes/community/CommuntiyList';
import Headers from "./components/header/Header"
import Footer from "./components/footer/Footer"

function App() {
  return (
    <BrowserRouter>
      <Headers />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/community" element={<CommunityList />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
