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
import ErrorPage from './Components/ErrorPage';
import AddEmployee from './Components/Employee/AddEmployee';
import Protected from './features/auth/Protected';
import Protected2 from './features/auth/Protected2';








function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <div className='container'>
          <Header></Header>
         
           
          <Routes>
          <Route path='/' element={<Protected2><Dashboard/></Protected2>}/>
            <Route path='/login' element={<Protected2><Login/></Protected2>}/>
            <Route path='/register' element={<Protected2><Register/></Protected2>}/>

            <Route path='/loggedin' element={<Protected><UserDetail/></Protected>}/>
           
            <Route path='/addbill' element={<AddBillbox/>}/>
            {/* <Route path='/loggedin' element={<BillboxList/>}/> */}
            <Route path='/form' element = {<AddAndDisplayUserPage/>}/>
            <Route path='/AddEmployee' element = {<AddEmployee/>}/>

            <Route path='*' element = {<ErrorPage/>}/>
            
            
           


          </Routes>
        
        </div>
      
      </BrowserRouter>
      {/* <ToastContainer/> */}




    </div>
  );
}

export default App;
