import React from "react";
import { useQuery, gql } from "@apollo/client";

const QUERY_ALL_USERS = gql`
  query GetAllUsers {
    users {
      id
      name
      age
      username
    }
  }
`;

const Display = () => {
  const { data, loading, error } = useQuery(QUERY_ALL_USERS);
  if (loading) {
    return <h1>Data is loading...</h1>;
  }
  if (data) {
    console.log(data);
  }
  if (error) {
    console.log(error);
  }

  return (
    <div>
      {data &&
        data.users.map((user) => {
          return (
            <div className="user" key={user.name}>
              <h1>Name: {user.name}</h1>
              <h2>Age: {user.age}</h2>
            </div>
          );
        })}
    </div>
  );
};

export default Display;
