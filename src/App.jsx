import { HashRouter , Routes, Route, Link } from 'react-router-dom';
import "./App.css";
import Home from "./assets/pages/Home";
import Catalog from "./assets/pages/Catalog";
import Detail from "./assets/pages/Detail";

function App() {
  return (
    <HashRouter >
      <header>
        <Link to='/'><h1>🩷💛🩵 동물 조아 🩵💛🩷</h1></Link>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/detail/:id' element={<Detail />} />
        </Routes>
      </main>
      <footer>all rights reserved to OZ</footer>
    </HashRouter>
  );
}

export default App;
