import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Main from '@Pages/Main';
import NotFound from '@Pages/NotFound';
import AdminPanel from '@Pages/AdminPanel';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/admin" element={<AdminPanel/>} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default App;
