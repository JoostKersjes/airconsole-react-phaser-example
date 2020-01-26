import React from 'react';
import ReactDOM from 'react-dom';

import { Layout } from './components/layout/layout';

const Controller = () => {
  return <Layout />;
};

// Get the root element
const rootElement = document.getElementById('controller-root');
// Render React tree into root element
ReactDOM.render(<Controller />, rootElement);
