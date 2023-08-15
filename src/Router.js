import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import SignUpDone from './pages/SignUpDone/SignUpDone';
import PostList from './pages/PostList/PostList';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/post-list" element={<PostList />} />
        <Route path="/signup-done" element={<SignUpDone />} />
      </Routes>
    </BrowserRouter>
  );
};

export { Router };
