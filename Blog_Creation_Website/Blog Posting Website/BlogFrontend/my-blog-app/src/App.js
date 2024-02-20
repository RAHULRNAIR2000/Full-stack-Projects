import './App.css';
import React from 'react';
import { BrowserRouter ,Routes, Route} from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
// import { Home, Favorite, LocationOn, Person } from '@mui/icons-material';
import BlogForm from './components/BlogForm';
import BlogSlider from './components/BlogSlider';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        
    <Route index element={<BlogSlider/>} />
          <Route path="/blogform" element={<BlogForm/>} />
      

    </Routes>
    </BrowserRouter>

  );
}

export default App;
