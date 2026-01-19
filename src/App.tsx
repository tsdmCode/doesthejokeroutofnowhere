import { useEffect, useState } from 'react';
import { CategorySelect } from './assets/components/CategorySelect';
import './App.scss';
import { Button } from './assets/components/Button';

function App() {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState('general');
  const [isDark, setDark] = useState(true);

  useEffect(() => {
    const url = 'http://localhost:3005/random_joke';

    async function doFetchOnMount() {
      const res = await fetch(url);
      const json = await res.json();
      setData(json);
      console.log(json);
    }

    doFetchOnMount();
  }, []);

  async function fetchRandomJoke() {
    const url = 'http://localhost:3005/random_joke';
    const res = await fetch(url);
    const json = await res.json();
    setData(json);
    console.log(json);
  }

  async function fetchJokeByType() {
    const url = `https://official-joke-api.appspot.com/jokes/${category}/random`;
    const res = await fetch(url);
    const json = await res.json();
    setData(json[0]);
    console.log(json);
  }

  return (
    <>
      <CategorySelect onChange={setCategory} category={category} />
      {data ? (
        <>
          <h3>{data.setup}</h3>
          <p>{data.punchline}</p>
        </>
      ) : (
        <p>Loading…</p>
      )}
      <Button onClick={fetchRandomJoke} text={'Boo! Giv mig en ny!'} />
      <button onClick={fetchJokeByType}>Giv mig en {category} joke!</button>
    </>
  );
}

export default App;
