import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Dashboard from './Pages/Dashboard';
import Header from './Components/Header';
import UserDetail from './Components/UserDetail';
import Sidebar from './Components/Sidebar';
import AddAndDisplayUserPage from './Components/AddUser';
import AddBillbox from './Components/Billbox/AddBillbox';
import BillboxList from './Components/Billbox/BillboxList';








function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <div className='container'>
          <Header></Header>
         
           
          <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>

            <Route path='/loggedin' element={<UserDetail/>}/>
           
            <Route path='/addbill' element={<AddBillbox/>}/>
            {/* <Route path='/loggedin' element={<BillboxList/>}/> */}
            <Route path='/form' element = {<AddAndDisplayUserPage/>}/>
            
            
           


          </Routes>
        
        </div>
      
      </BrowserRouter>
      <ToastContainer/>




    </div>
  );
}

export default App;
