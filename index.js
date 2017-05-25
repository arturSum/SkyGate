import React from 'react';
import ReactDOM from 'react-dom';

import AdminPanel from './admin/AdminPanel';

var adminPanel = new AdminPanel();

ReactDOM.render(
    adminPanel.render(),
    document.getElementById('app')
);