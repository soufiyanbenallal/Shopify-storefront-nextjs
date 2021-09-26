import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';

export default function SearchInput() {

  return (
    <div className='flex fy-center main-search' >
      <IconButton className='' aria-label="menu">
        {/* <ion-icon name="grid-outline"></ion-icon> */}
        <svg xmlns='http://www.w3.org/2000/svg' className='svg-icon' viewBox='0 0 512 512'>
            <title>Grid</title>
            <rect x='48' y='48' width='176' height='176' rx='20' ry='20' fill='none' stroke='currentColor'
                strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' />
            <rect x='288' y='48' width='176' height='176' rx='20' ry='20' fill='none' stroke='currentColor'
                strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' />
            <rect x='48' y='288' width='176' height='176' rx='20' ry='20' fill='none' stroke='currentColor'
                strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' />
            <rect x='288' y='288' width='176' height='176' rx='20' ry='20' fill='none' stroke='currentColor'
                strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' />
        </svg>
      </IconButton>

      <InputBase
        className='search-input'
        placeholder="What are you looking for..."
        inputProps={{ 'aria-label': 'What are you looking for...' }}
      />
      <Divider className='' orientation="vertical" />
      <IconButton color="primary" className='' aria-label="directions">
      <svg xmlns='http://www.w3.org/2000/svg' className='svg-icon' viewBox='0 0 512 512'>
          <path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' fill='none' stroke='currentColor'
              strokeMiterlimit='10' strokeWidth='32' />
          <path fill='none' stroke='currentColor' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='32'
              d='M338.29 338.29L448 448' />
      </svg>
      </IconButton>
    </div>
  );
}