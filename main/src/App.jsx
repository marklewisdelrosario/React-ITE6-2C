<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Activities/homepage/Homepage";
import Activity1 from "./pages/Activities/activity1/Activity1";
import Activity2 from "./pages/Activities/activity2/Activity2";
import Activity3 from "./pages/Activities/activity3/Activity3";
import Activity4 from "./pages/Activities/activity4/Activity4";
import Activity5 from "./pages/Activities/activity5/Activity5";
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/activity1" element={<Activity1 />} />
        <Route path="/activity2" element={<Activity2 />} />
        <Route path="/activity3" element={<Activity3 />} />
        <Route path="/activity4" element={<Activity4 />} />
        <Route path="/activity5" element={<Activity5 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
=======
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
>>>>>>> 703e3665ef9c81ae7ea8992cef731af59aec04dc
