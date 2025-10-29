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
    <section id="menu" className='min-h-screen w-full bg-[#E7E1DA] flex flex-col items-center py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8'>
      <div className='flex flex-col gap-4 md:gap-6 lg:gap-8'>
        <h1 className="font-bebas text-5xl md:text-7xl text-center text-[#DA714E] mb-2 md:mb-4 tracking-wide">Our Menu</h1>
        <p className='text-black/40 text-lg md:text-xl lg:text-2xl text-center'>All tacos made with handmade tortillas</p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 w-full max-w-7xl mt-8 md:mt-10 lg:mt-12'>
        {menuItems.map((item, i) => (
          <Card key={i} menuItem={item.name} description={item.description} price={item.price}/>
        ))}
      </div>
    </section>
  )
}

export default Menu