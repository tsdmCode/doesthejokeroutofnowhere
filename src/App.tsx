import { useEffect, useState } from 'react';
import { CategorySelect } from './assets/components/CategorySelect/CategorySelect';
import './App.scss';
import { Button } from './assets/components/Button/Button';

function App() {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState('general');
  const [isDark, setDark] = useState(true);

  useEffect(() => {
    const url = 'http://localhost:3005/random_joke';

    async function fetchJokeOnLoad() {
      const res = await fetch(url);
      const json = await res.json();
      setData(json);
      console.log(json);
    }

    fetchJokeOnLoad();
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

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
      <Button
        onClick={() => {
          setDark(!isDark);
          console.log(isDark);
        }}
        text={isDark ? 'Light Mode' : 'Dark Mode'}
        isDark={isDark}
      />
      <CategorySelect onChange={setCategory} category={category} isDark={isDark} />
      {data ? (
        <>
          <h3>{data.setup}</h3>
          <p>{data.punchline}</p>
        </>
      ) : (
        <p>Loading…</p>
      )}
      <Button onClick={fetchRandomJoke} text={'Boo! Giv mig en ny!'} isDark={isDark} />
      <Button onClick={fetchJokeByType} text={`Giv mig en ${category} joke!`} isDark={isDark} />
    </>
  );
}

export default App;
