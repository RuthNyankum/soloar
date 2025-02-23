import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './pages/about';
import Product from './pages/product';
import Contact from './pages/contact';
import LandingPage from './pages/landingPage/landingPage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <LandingPage />,
    },
    {
      path: 'about-us',
      element: <About />,
    },
    {
      path: 'products',
      element: <Product />,
    },
    {
      path: 'contact-us',
      element: <Contact />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
