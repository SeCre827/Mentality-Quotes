import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './MainHeader.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to='/quotes'>
              Our Great Quotes
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to='/new-quote'>
              Add a quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
