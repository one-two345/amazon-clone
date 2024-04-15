import React from 'react'
import './Home.css'
import Product from './Product';
import HomeImage from 'C:/Users/Hello/Desktop/Amazon-Clone/amazon-clone/src/icon-image/home-image.jpg';
import ProducrtImage from 'C:/Users/Hello/Desktop/Amazon-Clone/amazon-clone/src/templates/kids.jpg';
import ProducrtImage2 from 'C:/Users/Hello/Desktop/Amazon-Clone/amazon-clone/src/templates/hc.jpg';


function Home() {
  return (
    <div className='home'>
      <img className='home-image' src={HomeImage} alt=''/>
      <div className='home-rowOne'>
        <Product id={1} title='Kids: jhftdsjkfvnj lnj' price={32.5} image={ProducrtImage} rating={3}/>
        <Product id={2} title='Kids: jhftdsjkfvnj lnj' price={32.5} image={ProducrtImage2} rating={3}/>
        <Product id={1} title='Kids: jhftdsjkfvnj lnj' price={32.5} image={ProducrtImage} rating={3}/>
        
      </div>
      <div className='home-rowTwo'>
        <Product id={1} title='Kids: jhftdsjkfvnj lnj' price={32.5} image={ProducrtImage} rating={3}/>
        <Product id={1} title='Kids: jhftdsjkfvnj lnj' price={32.5} image={ProducrtImage} rating={3}/>
        <Product id={1} title='Kids: jhftdsjkfvnj lnj' price={32.5} image={ProducrtImage} rating={3}/>
        <Product id={1} title='Kids: jhftdsjkfvnj lnj' price={32.5} image={ProducrtImage} rating={3}/>
      </div>
      <div className='home-rowTwo'>
        <Product id={1} title='Kids: jhftdsjkfvnj lnj' price={32.5} image={ProducrtImage} rating={3}/>
        <Product id={1} title='Kids: jhftdsjkfvnj lnj' price={32.5} image={ProducrtImage} rating={3}/>
        <Product id={1} title='Kids: jhftdsjkfvnj lnj' price={32.5} image={ProducrtImage} rating={3}/>
        <Product id={1} title='Kids: jhftdsjkfvnj lnj' price={32.5} image={ProducrtImage} rating={3}/>
      </div>
      <div className='home-rowOne'>
        <Product id={1} title='Kids: jhftdsjkfvnj lnj' price={32.5} image={ProducrtImage} rating={3}/>
        <Product id={1} title='Kids: jhftdsjkfvnj lnj' price={32.5} image={ProducrtImage} rating={3}/>
        <Product id={1} title='Kids: jhftdsjkfvnj lnj' price={32.5} image={ProducrtImage} rating={3}/>
        
      </div>



    </div>
  );
}

export default Home;