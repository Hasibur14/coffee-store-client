import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import './App.css';
import CoffeeCard from './components/CoffeeCard';

function App() {

  const loadedCoffees = useLoaderData();
 const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <>
     
    <div className='text-center my-10'>
    <h1 className='text-5xl text-purple-600 font-bold '> Coffee: {coffees.length}</h1>
    </div>
      <div className='grid grid-cols-2 gap-10 p-10'>
        {
          coffees.map(coffee => <CoffeeCard 
            key={coffee._id} 
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}>

            </CoffeeCard>)
        }
      </div>

    </>
  )
}

export default App
