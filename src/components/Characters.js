import { useQuery } from "react-query";

export default function Characters() {
  const fetchCharacters = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    return response.json();
  };
  const { data, status } = useQuery("characters", fetchCharacters);

  if (status === "loading") {
    return <div>loading...</div>;
  }
  if (status === "error") {
    return <div>error...</div>;
  }

  return (
    <div>
      {data.results.map((character) => (
        <div>{character.name}</div>
      ))}
    </div>
  );
}
