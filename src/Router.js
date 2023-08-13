import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import PostList from './pages/PostList/PostList';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/post-list" element={<PostList />} />
      </Routes>
    </BrowserRouter>
  );
};

export { Router };
