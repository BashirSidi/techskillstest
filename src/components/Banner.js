import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Datesearch from './Datesearch';
import { useHistory } from 'react-router-dom';
import '../style/Banner.css';

const Banner = () => {
  const history = useHistory();
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className='banner'>
      <div className='banner-search'>
        {showSearch && <Datesearch />}
        <Button
          onClick={() => setShowSearch(!showSearch)}
          className='banner-search-button'
          variant='outline'>
          {showSearch ?
            'Hide Search Date' :
            'Search Dates'
          }
        </Button>
      </div>
      <div className='banner-info'>
        <h1>Easily Manage, Share, & Repurpose Your Equipment</h1>
        <h5>Our cloud based, mobile enabled platform helps you get value along the circular economy</h5>
        <Button
          onClick={() => history.push('/search')}
          variant="outline">
          Explore
        </Button>
      </div>
    </div>
  )
}

export default Banner;
