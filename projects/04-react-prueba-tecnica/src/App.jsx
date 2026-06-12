import { useEffect, useState } from "react";

const RANDOM_FACT_ENDPOINT = "https://catfact.ninja/fact";
// const RANDOM_IMAGE_ENDPOINT = `https://cataas.com/cat/says/${splittedFact}?fontSize=50&fontColor=red&json=true`;

export function App() {
  const [randomFact, setRandomFact] = useState();
  // const [randomImage, setRandomImage] = useState();

  useEffect(() => {
    fetch(RANDOM_FACT_ENDPOINT)
      .then((res) => res.json())
      .then((data) => {
        const {fact} = data
        setRandomFact(fact);
      
        const firstThreeWords = fact.split(' ',3).join(' ')
        console.log(firstThreeWords)
      });
      
      
    
  }, []);

  return (
    <>
      <h1>Random Cats Facts App</h1>
      {randomFact && <p>{randomFact}</p>}
    </>
  );
}
