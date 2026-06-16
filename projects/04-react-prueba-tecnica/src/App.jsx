import { useEffect, useState } from "react";

const RANDOM_FACT_ENDPOINT = "https://catfact.ninja/fact";
const getRandomImageEndpoint = (firstThreeWords) =>
  `https://cataas.com/cat/says/${firstThreeWords}?fontSize=50&fontColor=red&json=true`;

export function App() {
  const [randomFact, setRandomFact] = useState();
  const [randomImage, setRandomImage] = useState();

  const handleRandomFact = () => {
    fetch(RANDOM_FACT_ENDPOINT)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data;
        setRandomFact(fact);
      });
  };

  useEffect(() => {
    fetch(RANDOM_FACT_ENDPOINT)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data;
        setRandomFact(fact);
      });
  }, []);

  useEffect(() => {
    if (!randomFact) return;

    const firstThreeWords = randomFact.split(" ", 3).join(" ");
    console.log(firstThreeWords);

    fetch(getRandomImageEndpoint(firstThreeWords))
      .then((res) => res.json())
      .then((data) => {
        const { url } = data;
        setRandomImage(url);
      });
  }, [randomFact]);

  return (
    <>
      <button onClick={handleRandomFact}>Get a Random Fact</button>
      <h1>Random Cats Facts App</h1>
      {randomFact && <p>{randomFact}</p>}
      {randomImage && (
        <img
          src={randomImage}
          alt="A cat image generated via cataas endpoint"
        />
      )}
    </>
  );
}
