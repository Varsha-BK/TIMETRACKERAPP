import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AddEmployee from './Components/AddEmployee';
import Calendarcom from './Components/Calendarcom';
import Dashboard from './Components/Dashboard';
import EmpEdit from './Components/EmpEdit';
import Home from './Components/Home';
import Login from './Components/Login';
import Project from './Components/Project';
import Report from './Components/Report';
import TimeTrackerIP from './Components/TimeTrackerIP';
// import Timetracker from './Components/Timetracker';
import Tracker from './Components/Tracker';
import ViewAllProject from './Components/ViewAllProject';
import ViewEmployee from './Components/ViewEmployee';


function App() {
  return (
<div className='app'>

    <BrowserRouter>
    <Routes>
      <Route path='/' exat element={<Home/>}/>
      <Route path='/login' exact element={<Login/>}/>
      <Route path='/dashboard' exact element={<Dashboard/>}/>
      {/* <Route path='/timetracker' exact element={<Timetracker/>}/> */}
      <Route path='/project' exact element={<Project/>}/>
      <Route path='/report' exact element={<Report/>}/>
      <Route path='/calendar' exact element={<Calendarcom/>}/>
      <Route path='/tracker' exact element={<Tracker/>}/>
      <Route path='/addemployee' exact element={<AddEmployee/>}/>
      <Route path='/viewemployees' exact element={<ViewEmployee/>}/>
      <Route path='/update/:id' exact element={<EmpEdit/>}/>
      <Route path='/trackerip' exact element={<TimeTrackerIP/>}/>
      <Route path='/viewallproject' exact element={<ViewAllProject/>}/>
    </Routes>
    </BrowserRouter>

    </div>

    
  );
}

export default App;
