import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Auth from './components/Auth';
import Services from './components/Services';
import Events from './components/Events';
import About from './components/About';
import Footer from './components/Footer';
import { auth } from "./firebase";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";


import './styles/Header.scss';
import './styles/App.scss';
import './styles/Auth.scss';
import './styles/Footer.scss';
import './styles/mediaquery.scss';

function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);
  return (
    <>
    <Router>
      <Header />
      <Routes>
      <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/' element={ <Home/> } />
          {/* <Route path='/login' element={ <Auth/> } /> */}
          <Route path='/services' element={ <Services/> } />
          <Route path='/events' element={ <Events /> } />
          <Route path='/about' element={ <About /> } />
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;



// import React, { useEffect, useState } from "react";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import Header from './components/Header';
// import Home from './components/Home';
// import Services from './components/Services';
// import Events from './components/Events';
// import About from './components/About';
// import Footer from './components/Footer';

// import { auth } from "./firebase";
// import Login from "./components/Login/Login";
// import Signup from "./components/Signup/Signup";

// import './styles/Header.scss';
// import './styles/App.scss';
// import './styles/Auth.scss';
// import './styles/Footer.scss';
// import './styles/mediaquery.scss';

// function App() {
//   return (
//     <>
//     <Router>
//       <Header />
//       <Routes>
//           <Route path='/' element={ <Home/> } />
//           <Route path='/login' element={ <Auth/> } />
//           <Route path='/services' element={ <Services/> } />
//           <Route path='/events' element={ <Events /> } />
//           <Route path='/about' element={ <About /> } />
//       </Routes>
//       <Footer/>
//     </Router>
//     </>
//   );
// }

// export default App;
