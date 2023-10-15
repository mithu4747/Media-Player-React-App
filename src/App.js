import {Route, Routes} from 'react-router-dom';
import './App.css';
import Landing from './Pages/Landing';
import Home from './Pages/Home';
import WatchHistory from './Pages/WatchHistory';
import Header from './components/Header';
import Footer from './components/Footer';
function App() {
  return (
    <div>
  <Header/>
  <Routes>
    <Route path='/' element={<Landing/>} />
    <Route path= '/home' element={  <Home/>} />
    <Route path='/watch-history' element={<WatchHistory/>} />
  </Routes>
  <hr/>
  <Footer/>
    </div>
  );
}

export default App;
