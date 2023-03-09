import { BrowserRouter,Routes,Route } from "react-router-dom";
import Register from './pages/Register/';
import Login from './pages/Login/';
import Home from './pages/Home/';
import "./stylesheets/alignments.css";
import "./stylesheets/sizes.css";
import "./stylesheets/form-elements.css";
import "./stylesheets/custom.css";
import "./stylesheets/theme.css";
function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="login" element={<Login/>}/>
    <Route path="register" element={<Register/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
