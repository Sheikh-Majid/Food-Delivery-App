
import './App.css';
import Home from './screens/Home';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import Login from './screens/Login';
import About from './screens/About';
import SignUp from './screens/SignUp';
import Categories from './screens/Categories';
import MyCart from './screens/MyCart';
import MyOrder from './screens/MyOrder';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/categories" element={<Categories />} />
          <Route exact path="/mycart" element={<MyCart />} />
          <Route exact path="/myorder" element={<MyOrder />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
