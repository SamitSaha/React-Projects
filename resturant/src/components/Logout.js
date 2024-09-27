import React from 'react';
import {
    redirect as Redirect
  } from 'react-router-dom';
const Logout = () => {
    localStorage.clear();
    return  <Redirect to="/login" />
};

export default Logout;