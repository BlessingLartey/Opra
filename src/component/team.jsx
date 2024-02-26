import { useEffect, useState } from "react";

export default function Team() {
  const [team, setTeam] = useState([]);

  // loader request

  useEffect(() => {
    const fetchTeamData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      setTeam(await response.json());
    };

    fetchTeamData();
  }, []);

  return (
    <>
      {team.map((member) => (
        <ul
          key={member.id}
          style={{
            listStyle: "none",
            backgroundColor: "blueviolet",
            marginBottom: "1rem",
            padding: "1.5rem",
            borderRadius: "0.5rem",
            color: "white",
          }}
        >
          <li>Full Name: {member.name}</li>
          <li>Email: {member.email}</li>
          <li>Address: {member.address.city}</li>
        </ul>
      ))}
    </>
  );
}
