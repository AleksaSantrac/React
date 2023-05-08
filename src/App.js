import logo from './logo.svg';
import './App.css';

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
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
