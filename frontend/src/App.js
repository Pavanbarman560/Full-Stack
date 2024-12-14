import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import summaryapi from './common';
import context from './context';
import { useDispatch } from 'react-redux';
import { setuserdetails } from './store/userslice';

function App() {
  const dispatch = useDispatch();

  const fetchUserDetails = async () => {
    const dataResponce = await fetch(summaryapi.current_user.url, {
      method: summaryapi.current_user.method,
      credentials: 'include',
    });

    const dataApi = await dataResponce.json();
    if (dataApi.success) {
      dispatch(setuserdetails(dataApi.data));
    }

    console.log('data user', dataResponce);
  };

  useEffect(() => {

    // ye code maine frontend code of broswer me hide karne ke liye likha hai jo ki last dispatch tak hai

    document.addEventListener('contextmenu', (e) => e.preventDefault());
    document.addEventListener('keydown', (e) => {
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && e.key === 'I') ||
        (e.ctrlKey && e.shiftKey && e.key === 'J')
      ) {
        e.preventDefault();
      }
    });

    //  user details
    fetchUserDetails(); //already ye bas tha only

    // Cleanup function to remove event listeners when the component unmounts

    return () => {
      document.removeEventListener('contextmenu', (e) => e.preventDefault());
      document.removeEventListener('keydown', (e) => {
        if (
          e.key === 'F12' ||
          (e.ctrlKey && e.shiftKey && e.key === 'I') ||
          (e.ctrlKey && e.shiftKey && e.key === 'J')
        ) {
          e.preventDefault();
        }
      });
    };
  }, [dispatch]); // Empty dependency array means this effect runs once on mount

  return (
    <>
      <context.Provider value={{
        fetchUserDetails
      }}>
        <ToastContainer />
        <Header />
        <main className='min-h-[calc(100vh-120px)] pt-16'>
          <Outlet />
        </main>
        <Footer />
      </context.Provider>
    </>
  );
}

export default App;