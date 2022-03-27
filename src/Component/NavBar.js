import React from 'react'
// import {Link} from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Home';

import AddContacts from './AddContacts';
import ContactCards from './ContactCards';

function NavBar() {
  return (
    <div>
        <Router>
        <ul>
        <li><Link to='/'>home</Link></li>
        <li><Link to='/contacts'>contacts</Link></li>
        <li><Link to='/addContact'>add Contact</Link></li>
        </ul>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/contacts' element={<ContactCards/>}/>
            <Route path='/addContact' element={<AddContacts/>}/>
        </Routes>
        </Router>
    </div>
  )
}

export default NavBar