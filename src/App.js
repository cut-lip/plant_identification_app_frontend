import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

// Home Page Component
function HomePage() {
  return (
    <div>
      <h1>Pacific Northwest Plant Identifier</h1>
      <Link to="/data1">
        <button>Go to Douglas Fir</button>
      </Link>
      <Link to="/data2">
        <button>Go to Grand Fir</button>
      </Link>
    </div>
  );
}

// Data Page Component
function DataPage2() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://35.173.230.36:8000/api/2/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle other errors
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Grand Fir Data</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.name}: {item.value}</li>
        ))}
      </ul>
    </div>
  );
}
// Data Page Component
function DataPage1() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://35.173.230.36:8000/api/1/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle other errors
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Douglas Fir Data</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.name}: {item.value}</li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/data1" element={<DataPage1 />} />
        <Route path="/data2" element={<DataPage2 />} />
      </Routes>
    </Router>
  );
}

export default App;