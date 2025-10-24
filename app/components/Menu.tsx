import React from 'react'
import Card from './menu/Card';
const menuItems = [
    {
      name: "Carne Asada Tacos",
      description: "Marinated grilled beef, cilantro, onions, and green salsa",
      price: "$3.50"
    },
    {
      name: "Al Pastor Tacos",
      description: "Marinated pork with chile and pineapple, cilantro, onions",
      price: "$3.50"
    },
    {
      name: "Barbacoa Tacos",
      description: "Tender beef barbacoa, cilantro, onions, lime",
      price: "$4.00"
    },
    {
      name: "Carnitas Tacos",
      description: "Crispy braised pork, cilantro, onions, red salsa",
      price: "$3.75"
    },
    {
      name: "Chicken Tacos",
      description: "Grilled spiced chicken, cilantro, onions, salsa",
      price: "$3.25"
    },
    {
      name: "Lengua Tacos",
      description: "Tender beef tongue, cilantro, onions, green salsa",
      price: "$4.25"
    },
    {
      name: "Tripitas Tacos",
      description: "Crispy tripe, cilantro, onions, lime",
      price: "$4.00"
    },
    {
      name: "Veggie Tacos",
      description: "Beans, cheese, lettuce, tomato, avocado, sour cream",
      price: "$3.00"
    }
  ];

const Menu = () => {
  return (
    <section id="menu" className='min-h-screen w-full bg-[#E7E1DA] flex flex-col items-center py-20 px-4'>
      <div className='flex flex-col gap-8'>
        <h1 className="font-bebas text-5xl md:text-7xl text-center text-[#DA714E] mb-4 tracking-wide">Our Menu</h1>
        <p className='text-black/40 text-2xl'>All tacos made with handmade tortillas</p>
      </div>
      
      <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 max-w-4/5 mt-10'>
        {menuItems.map((item, i) => (
          <Card key={i} menuItem={item.name} description={item.description} price={item.price}/>
        ))}
      </div>
    </section>
  )
}

export default Menu