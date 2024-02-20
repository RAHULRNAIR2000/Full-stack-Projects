import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmployeeComponent from "./components/EmployeeComponent";
import DeckSelection from "./components/DeckSelection";
import Part1 from './components/Part1';
import Part2 from './components/Part2';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListEmployeeComponent />}></Route>
          <Route path="/employees" element={<ListEmployeeComponent />}></Route>
          <Route path="/add-employee" element = {<EmployeeComponent />}></Route>
          <Route path="/edit-employee/:id" element= {<EmployeeComponent/>}> </Route>
          <Route path="/deckselection/:id" element ={<DeckSelection/>}></Route>
          <Route path="/part2/:id" element={<Part2/>}/>
          <Route path="/part1/:id" element={<Part1/>}/>
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
