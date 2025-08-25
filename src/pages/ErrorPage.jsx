import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import PDF from './PDF';

const ErrorPage = () => {
  return (
<PDFViewer style={{ minWidth: "156.9vh", height: "100vh" }}>
<PDF />

  </PDFViewer>
  );
}

export default ErrorPage;
