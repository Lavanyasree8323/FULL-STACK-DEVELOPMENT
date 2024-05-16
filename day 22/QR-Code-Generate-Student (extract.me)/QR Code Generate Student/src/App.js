import React from 'react';
import './QRCodeGenerator.css';
import QRCodeGenerator from './QRCodeGenerator';
import QRCodeImageReader from './QRCodeImageReader';
function App() {
    return (
        <div>
            <QRCodeGenerator />
            <QRCodeImageReader/>
        </div>
    );
}

export default App;
