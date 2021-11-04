import React, { useEffect,useState } from 'react'
import List from './List'
function App() {
  const [heroes, setHeroes] = useState([]);
  useEffect(() => {
    const fetchHeroes = async () => {
      const response = await fetch('https://api.opendota.com/api/heroStats');
      const heroesData = await response.json();
      setHeroes(heroesData);
    };
    fetchHeroes();
  }, []);

  return (
    <main>
      <section className='container'>
        <h3>{heroes.length} Heroes encontrados</h3>
        <h4>5 mostrados</h4>
        <List heroes={heroes.slice(0,5)} />
        <button onClick={() => setHeroes([])}>clear all</button>
      </section>
    </main>
  )
}

export default App