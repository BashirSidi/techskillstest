import React from 'react'
import '../style/Header.css';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import LanguageIcon from '@material-ui/icons/Language';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <Link to='/'>
        <img
          className='header_icon'
          src='https://uploads-ssl.webflow.com/6098c701cacf0bbc451cab04/6098ca68d36f2270e2844630_F%26S%20logo%20circle.png'
          alt='found and seek logo'
        />
      </Link>
      <div className='header-center'>
        <input type='text' />
        <SearchIcon className='search-icon' />
      </div>

      <div className='header-right'>
        <Button variant="outline">
          Book A Demo
        </Button>
        <LanguageIcon />
      </div>
    </div>
  )
}

export default Header;