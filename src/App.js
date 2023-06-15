import { Outlet, Navigate, Routes, Route, BrowserRouter as Router, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from './context/userContext';
import { API, setAuthToken } from './config/api';
import Home from './pages/home';
import Detail from './pages/detail';
import Payment from './pages/payment';
import Profile from './pages/profile.';
import IncomeTransaction from './pages/income-transaction';
import AddProduct from './pages/add-product';
import ListProduct from './pages/list-product';
// import './App.css';

function App() {
  // let navigate = useNavigate();
  // const [state, dispatch] = useContext(UserContext);
  // const [isLoading, setIsLoading] = useState(true)

  // useEffect(() => {
  //   // Redirect Auth but just when isLoading is false
  //   if (!isLoading) {
  //     if (state.isLogin === false) {
  //       navigate('/');
  //     }
  //   }
  // }, [isLoading]);

  // useEffect(() => {
  //   if (localStorage.token) {
  //     setAuthToken(localStorage.token);
  //     checkUser();
  //   } else {
  //     setIsLoading(false)
  //   }
  // }, []);

  // const checkUser = async () => {
  //   try {
  //     const response = await API.get('/check-auth');
  //     console.log("check user success : ", response)
  //     // Get user data
  //     let payload = response.data.data;
  //     // Get token from local storage
  //     payload.token = localStorage.token;
  //     // Send data to useContext
  //     dispatch({
  //       type: 'USER_SUCCESS',
  //       payload,
  //     });
  //     setIsLoading(false)
  //   } catch (error) {
  //     console.log("check user failed : ", error);
  //     dispatch({
  //       type: 'AUTH_ERROR',
  //     });
  //     setIsLoading(false)
  //   }
  // };

  return (
    <>

      {/* {isLoading ? null : */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detailproduct" element={<Detail />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/incometransaction" element={<IncomeTransaction />} />
            <Route path="/addproduct" element={<AddProduct />} />
            <Route path="/listproduct" element={<ListProduct />} />

            


          </Routes>
      {/* } */}

    </>

  );
}

export default App;
