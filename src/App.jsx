import { Routes, Route } from 'react-router-dom'// imported

import HomePage from "./Pages/HomePage/HomePage";
import Channel from './Pages/Channel/Channel';
import VideoPage from "./Pages/VideoPage/VideoPage"

import './App.scss';


function App() {


  return (
    
    <div className="container">
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/channel" element={<Channel />} />
          <Route path="/video" element={<VideoPage />} />
      </Routes>
    </div>

  );
}

export default App;



