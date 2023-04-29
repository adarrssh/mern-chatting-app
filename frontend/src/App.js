import './App.css';
import Homepage from './Pages/Homepage';
import Chatpage from './Pages/ChatPage';
import { BrowserRouter, Route, Routes,  } from 'react-router-dom'
function App() {
  return (
    <div>
      <>
        <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/chat" element={<Chatpage />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
