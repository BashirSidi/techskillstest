import React, { useState } from 'react';
import '../style/Datesearch.css';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

const Datesearch = () => {
  const history = useHistory();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  }

  const handleSelect = (range) => {
    setStartDate(range.selection.startDate);
    setEndDate(range.selection.endDate);
  }
  return (
    <div className='datesearch'>
      <DateRangePicker
        ranges={[selectionRange]}
        onChange={handleSelect}
      />
      <h2>
        Number of items
        <AddShoppingCartIcon />
      </h2>
      <input
        type='number'
        min={0}
        defaultValue={3}
      />
      <Button onClick={() => history.push('/search')}>
        Search product
      </Button>
    </div>
  )
}

export default Datesearch
