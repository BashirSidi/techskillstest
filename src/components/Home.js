import React from 'react';
import Banner from './Banner';
import Card from './Card';
import '../style/Home.css';


const Home = () => {
  return (
    <div className='home'>
      <Banner />

      <div className='home-section'>
        <Card
          src="https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          title="DSLR cameras"
          description="A DSLR (Digital Single-Lens Reflex), is a type of camera that uses a complex mechanical mirror system to redirect light coming through the lens"
          price="$999"
        />
        <Card
          src="https://images.unsplash.com/photo-1573320286044-b43a4168fb40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          title="Mirrorless cameras"
          description="A mirrorless camera is a type of camera that works without a reflex mirror"
          price="$750"
        />
        <Card
          src="https://images.unsplash.com/photo-1615286922420-c6b348ffbd62?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          title="Plastic Engraving"
          description="Laser Engraving (or Laser Etching) is a Subtractive Manufacturing method, that uses a laser beam to change the surface of an object."
          price="$1280"
        />
      </div>

      <div className='home-section'>
        <Card
          src="https://images.unsplash.com/photo-1607835498554-2c5519af1730?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          title="Pedestal Fan"
          description="Pedestal fans are described as electric, oscillating fans that operate with the help of a detachable stand that can be adjusted as per your needs and requirement."
          price="$156"
        />
        <Card
          src="https://images.unsplash.com/photo-1583024011792-b165975b52f5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"
          title="Excavator"
          description="This excavator use hydraulic power mechanisms to lift heavy debris and soil."
          price="$6200"
        />
        <Card
          src="https://images.unsplash.com/photo-1593784991095-a205069470b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          title="Plasma TV"
          description="A plasma display panel (PDP) is a type of flat panel display that uses small cells containing plasma: ionized gas that responds to electric fields."
          price="$700"
        />
      </div>
      <div className='home-section'>
        <Card
          src="https://images.unsplash.com/photo-1583024011792-b165975b52f5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"
          title="Excavator"
          description="This excavator use hydraulic power mechanisms to lift heavy debris and soil."
          price="$6200"
        />
        <Card
          src="https://images.unsplash.com/photo-1615286922420-c6b348ffbd62?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          title="Plastic Engraving"
          description="Laser Engraving (or Laser Etching) is a Subtractive Manufacturing method, that uses a laser beam to change the surface of an object."
          price="$1280"
        />
        <Card
          src="https://images.unsplash.com/photo-1573320286044-b43a4168fb40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          title="Mirrorless cameras"
          description="A mirrorless camera is a type of camera that works without a reflex mirror"
          price="$750"
        />
      </div>
    </div>
  )
}

export default Home;
