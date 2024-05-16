import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import QrReader from 'qrcode-reader';
import './QRCodeImageReader.css'
function QRCodeImageReader() {
    const [decodedData, setDecodedData] = useState([]);

    const onDrop = (acceptedFiles) => {
        const file = acceptedFiles[0];
        const reader = new FileReader();

        reader.onload = async (event) => {
            const imageDataUri = event.target.result;
            const qr = new QrReader();
            qr.callback = (err, value) => {
                if (err) {
                    setDecodedData([{ error: 'Error decoding QR code.' }]);
                    return;
                }
                if (value) {
                    setDecodedData(parseQRData(value.result));
                } else {
                    setDecodedData([{ error: 'No QR code found in the image.' }]);
                }
            };
            qr.decode(imageDataUri);
        };

        reader.readAsDataURL(file);
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    const parseQRData = (data) => {
        try {
            const parsedData = JSON.parse(data);
            if (parsedData && typeof parsedData === 'object') {
                return [parsedData];
            }
            return [{ error: 'Invalid QR code data.' }];
        } catch (e) {
            return [{ error: 'Invalid QR code data.' }];
        }
    };

    return (
        <div>
            <h2>QR Code Image Reader</h2>
            <div {...getRootProps()} style={dropzoneStyles}>
                <input {...getInputProps()} />
                {
                    isDragActive ?
                    <p>Drop the image file here...</p> :
                    <p>Drag and drop an image file here, or click to select one</p>
                }
            </div>
            <div className="decoded-data-container">
                {decodedData.length > 0 && (
                    <div className="table-container">
                        <table>
                            <thead>
                                <tr>
                                    {Object.keys(decodedData[0]).map((key) => (
                                        <th key={key}>{key}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {decodedData.map((item, index) => (
                                    <tr key={index}>
                                        {Object.values(item).map((value, i) => (
                                            <td key={i}>{value}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}

const dropzoneStyles = {
    border: '2px dashed #ccc',
    borderRadius: '4px',
    padding: '20px',
    textAlign: 'center',
    cursor: 'pointer'
};

export default QRCodeImageReader;
