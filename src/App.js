import './App.css';
import Home from './page/Home'
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Home />

      <div id="detail">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
