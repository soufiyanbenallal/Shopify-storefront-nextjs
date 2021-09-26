import React  from 'react';
import {
  Button,
  ButtonBase,
  IconButton,
  InputBase
} from '@material-ui/core';
import PerfectScrollbar from 'react-perfect-scrollbar';
import Accordion from '../others/Accordion'
const Sidebar = () => {
  return (
    <PerfectScrollbar>
        <Accordion className="sidebar-filters" title={<span>categories mains </span>} >
          <ul className="my-2">
            <li><ButtonBase className="collection-link text-left py-2 px-3 round-100 w-100" size="small" >Primary lorem ipsum</ButtonBase></li>
            <li><ButtonBase className="collection-link text-left py-2 px-3 round-100 w-100" size="small" >Primary</ButtonBase></li>
            <li><ButtonBase className="collection-link text-left py-2 px-3 round-100 w-100" size="small" >Primary</ButtonBase></li>
            <li><ButtonBase className="collection-link text-left py-2 px-3 round-100 w-100" size="small" >Primary</ButtonBase></li>
            <li><ButtonBase className="collection-link text-left py-2 px-3 round-100 w-100" size="small" >Primary</ButtonBase></li>
            <li><ButtonBase className="collection-link text-left py-2 px-3 round-100 w-100" size="small" >Primary</ButtonBase></li>
            <li><ButtonBase className="collection-link text-left py-2 px-3 round-100 w-100" size="small" >Primary</ButtonBase></li>
            <li><ButtonBase className="collection-link text-left py-2 px-3 round-100 w-100" size="small" >Primary</ButtonBase></li>
            <li><ButtonBase className="collection-link text-left py-2 px-3 round-100 w-100" size="small" >Primary</ButtonBase></li>
            <li><ButtonBase className="collection-link text-left py-2 px-3 round-100 w-100" size="small" >Primary</ButtonBase></li>
            <li><ButtonBase className="collection-link text-left py-2 px-3 round-100 w-100" size="small" >Primary</ButtonBase></li>
          </ul>
        </Accordion>
        <Accordion className="sidebar-filters" title={<span>categories mains </span>} >
          <div className="flex my-2">
              <InputBase
                className="w-100"
                placeholder="Search Google Maps"
                inputProps={{ 'aria-label': 'search google maps' }}
              />
              <IconButton type="submit" size="small" aria-label="search">
                <ion-icon name="search-outline"></ion-icon>
              </IconButton>
          </div>
          <ul className="w-100">
            <li>
              <input className="inp-cbx" id="cbx" type="checkbox" style={{display: 'none'}} />
              <label className="cbx" htmlFor="cbx">
                <span>
                  <svg width="12px" height="9px" viewBox="0 0 12 9">
                    <polyline points="1 5 4 8 11 1"></polyline>
                  </svg>
                </span>
                <span>Interior</span>
              </label>
            </li>
          </ul>
        </Accordion>
    </PerfectScrollbar>
  );
};

export default Sidebar;
