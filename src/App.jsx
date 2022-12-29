import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Main from '@Pages/Main';
import NotFound from '@Pages/NotFound';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default App;
