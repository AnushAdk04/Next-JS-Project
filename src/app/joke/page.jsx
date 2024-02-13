"use client";
import { useEffect, useState } from "react";

export default function JokePage() {
  const [joke, setJoke] = useState("");
  const [jokeId, setJokeId] = useState("");
  const [jokeUrl, setJokeUrl] = useState("");

  useEffect(() => {
    fetchJoke();
  }, []);

  const fetchJoke = async () => {
    try {
      const url = "https://api.chucknorris.io/jokes/random";
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch joke");
      }
      const jokeData = await response.json();
      console.log(jokeData);
      setJoke(jokeData.value);
      setJokeId(jokeData.id);
      setJokeUrl(jokeData.url);
    } catch (error) {
      console.error("Error fetching joke:", error);
    }
  };

  const handleNextJoke = () => {
    fetchJoke();
  };

  const handleJokeUrlClick = () => {
    if (jokeUrl) {
      window.open(jokeUrl, "_blank");
    }
  };

  return (
    <main className="bg-gray-700 w-full h-screen flex flex-col justify-center items-center">
        <div className="font-extrabold text-white text-2xl">JOKE API FETCH</div>
      <div className="text-white text-center border border-3-indigo-50 rounded-xl hover:border-blue-500">
        <div className="m-4">Joke ID: {jokeId}</div>
        <div className="m-4 font-bold">Joke: {joke}</div>
        {jokeUrl && (
          <div className="m-4 hover:text-blue-300">
            Joke URL:{" "}
            <a href={jokeUrl} target="_blank" rel="noopener noreferrer">
              {jokeUrl}
            </a>
          </div>
        )}
        <button onClick={handleNextJoke} className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded mb-4">
          Next
        </button>
      </div>
    </main>
  );
}