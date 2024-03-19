import React from 'react';
import {Outlet} from 'react-router-dom';

const Cricketers = () => (
  <div>
       {/* An <Outlet> should be used in parent route elements to render their child route elements. 
        This allows nested UI to show up when child routes are rendered. If the parent route matched exactly, */}
    <Outlet />
  </div>
)

export default Cricketers;