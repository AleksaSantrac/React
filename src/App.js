import { useState } from 'react';
import './App.css';
import List from './components/List';
import Sidebar from './components/Sidebar';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Saved from './components/Saved';

function App() {
  const [data, setData] = useState([
    {
      id: 0,
      model: "RS6",
      price: 170000,
      make: "Audi",
      new: true,
    },
    {
      id: 1,
      model: "RSQ7",
      price: 150000,
      make: "Audi",
      new: true,
    },
    {
      id: 2,
      model: "320d",
      price: 60000,
      make: "BMW",
      new: false,
    },
    {
      id: 3,
      model: "A8",
      price: 90000,
      make: "Audi",
      new: false,
    },
  ]);

  function search(model){
    let temp = data.filter((car) => (car.model===model));
    setCars(temp)
  }

  const [saved, setSaved] = useState([]);

  function save(car){
    if(!saved.includes(car)){
      saved.push(car);
    }
  }

  const [cars, setCars] = useState(data);

  function sort(){
    const temp = [...data].sort((a, b) => a.price - b.price)
    setCars(temp)
    console.log(cars)
  }

  return (
    <div className="App">
      <BrowserRouter>
      <Sidebar sort={sort} save={save} search={search}/>
      <div className='body'>
        <div>
          <Routes>
            <Route path='/' element={<List cars={cars} save={save}/>}/>
            <Route path='/aboutUs' element={<AboutUs/>}/>
            <Route path='/saved' element={<Saved saved={saved}/>}/>
          </Routes>
        </div>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
