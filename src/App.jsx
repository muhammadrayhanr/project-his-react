// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Jumbotron from './components/Jumbotron';
import About from './components/About';

function App() {
  return (
    <>
    <Navigation />
    <Jumbotron />
    <About />
    </>
    // <div className="App">
    //   <BrowserRouter>
    //     <Navigation />
    //     <Jumbotron />
    //     <About />
    //     <Routes>
    //       <Route path="/" element={<Login />} />
    //     </Routes>
    //   </BrowserRouter>
    // </div>
  );
}

export default App;
