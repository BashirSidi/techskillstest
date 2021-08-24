import React from 'react';
import '../style/Searchresult.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import StarIcon from '@material-ui/icons/Star';

const Searchresult = ({
  img,
  title,
  description,
  star,
  price,
}) => {
  return (
    <div className='search-result'>
      <img src={img} alt="" />
      <FavoriteBorderIcon className='search-result-heart' />
      <div className='search-result-info'>
        <div className='search-result-info-top'>
          <h3>{title}</h3>
          <p>_____</p>
          <p>{description}</p>
        </div>

        <div className='search-result-info-bottom'>
          <div className='search-result-stars'>
            <StarIcon className='search-result-star' />
            <p>
              <strong>{star}</strong>
            </p>
          </div>

          <div className='search-result-price'>
            <h2>{price}</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Searchresult
