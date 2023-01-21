import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import Home from './components/Home';
import Aboutus from './components/Aboutus';
import Contactus from './components/Contactus';
import {Link,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <>
<Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/contact" element={<Contactus />} />
        </Route>
      </Routes>
</>
      // {/* <header className="App-header">
      //   <img src={logo} className="App-logo" alt="logo" />
      //   <p>
      //     Edit <code>src/App.js</code> and save to reload.
      //   </p>
      //   <a
      //     className="App-link"
      //     href="https://reactjs.org"
      //     target="_blank"
      //     rel="noopener noreferrer"
      //   >
      //     Learn React
      //   </a>
      // </header> */}
  );
}

export default App;
