import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';

import Home from './components/Home';
import About from './components/About';
import Shop from './components/Shop';
import Contact from './components/Contact';
import Request from './components/Request';

function App() {
  return (
    <Router>
		<Routes>
			<Route path="/" element={<Home />}/>
			<Route path="/about" element={<About />}/>
			<Route path="/contact" element={<Contact />}/>
			<Route path="/shop" element={<Shop />}/>
			<Route path="/request" element={<Request />}/>
		</Routes>
	</Router>
  );
}

export default App;
