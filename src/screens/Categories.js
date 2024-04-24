import React from 'react'
import { Navbar } from '../components/Navbar/Navbar'
import { Footer } from '../components/Footer/Footer'
import useCategories from '../Hooks/useCategories'

const Categories = () => {
    const categorie = useCategories();
  return (
    <div>
      <Navbar />
      <div className='variety'>
        <h4>Number of Items</h4>
        <div className="container items">
          {categorie.map((item) => (
            <div key={item.id}>{item.name}</div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Categories
