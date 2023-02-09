import './App.css';
import Homepage from './Pages/Homepage';
import Chatpage from './Pages/ChatPage';
import { BrowserRouter, Route, Routes,  } from 'react-router-dom'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/chat" element={<Chatpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
