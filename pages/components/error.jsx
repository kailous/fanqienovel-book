// components/error.jsx

import React from 'react';

const Error = ({ message }) => {
    return (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">错误:</strong>
            <span className="block sm:inline">{message}</span>
        </div>
    );
};

export default Error;
