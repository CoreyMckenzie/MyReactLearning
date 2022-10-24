import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; //adding react router 
import Home from "./pages/Home";
import Props from "./pages/Props"
import Lessons from "./pages/Lessons";
import Headerbar from "./Components/Headersurl";


function App() {
  return (
    <Router>
      <Headerbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/lessons" element={<Lessons/>}></Route>
        <Route path="/props" element={<Props/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
