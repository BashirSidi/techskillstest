import React from 'react';
import Button from '@material-ui/core/Button';
import '../style/Searchpage.css';
import Searchresult from './Searchresult.js'

const Searchpage = () => {
  return (
    <div className='search-page'>
      <div className='search-page-info'>
        <p>
          26 August to 30 August - 3 items
        </p>
        <h1>Transforming Business Sustainability</h1>
        <Button variant="outline">
          Cancelation flexibility
        </Button>
        <Button variant="outline">
          Pending request flexibility
        </Button>
        <Button variant="outline">
          Types of products
        </Button>
        <Button variant="outline">
          Price
        </Button>
        <Button variant="outline">
          More filters
        </Button>
      </div>
      <Searchresult
        img="https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        title="DSLR cameras"
        description="A DSLR (Digital Single-Lens Reflex), is a type of camera that uses a complex mechanical mirror system to redirect light coming through the lens"
        star="4.71"
        price="$999"
      />
      <Searchresult
        img="https://images.unsplash.com/photo-1583024011792-b165975b52f5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"
        title="Excavator"
        description="This excavator use hydraulic power mechanisms to lift heavy debris and soil."
        star="4.63"
        price="$6200"
      />
      <Searchresult
        img="https://images.unsplash.com/photo-1615286922420-c6b348ffbd62?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        title="Plastic Engraving"
        description="Laser Engraving (or Laser Etching) is a Subtractive Manufacturing method, that uses a laser beam to change the surface of an object."
        star="4.82"
        price="$1280"
      />
    </div>
  )
}

export default Searchpage;
