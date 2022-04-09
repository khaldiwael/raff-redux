// import { Route, Routes ,Router} from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import AddContacts from './Component/AddContacts';
import ContactCards from './Component/ContactCards'
import ContactList from "./Component/contactList";
import Home from './Component/Home';
import NavBar from './Component/NavBar';

function App() {
  return (
    <div className="App">
      
      <Router>
        <NavBar/>
      {/* <ContactCards/>
      <ContactList/>
      <AddContacts/> */}
      
        <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/contacts' element={<ContactList/>}/>
              <Route path='/addContact' element={<AddContacts/>}/>
        </Routes>
      </Router>


      {/* <ContactCards/> */}
      {/* <AddContacts/> */}
    </div>
  );
}

export default App;
