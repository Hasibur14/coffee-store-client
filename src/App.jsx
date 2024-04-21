import { useLoaderData } from 'react-router-dom';
import './App.css';
import CoffeeCard from './components/CoffeeCard';

function App() {

  const coffees = useLoaderData();
  console.log(coffees)

  return (
    <>
     
      <h1 className='text-3xl text-purple-600 font-bold '>Hot Coffee: {coffees.length}</h1>
      <div className='grid grid-cols-2 gap-10 p-10'>
        {
          coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
        }
      </div>

    </>
  )
}

export default App
