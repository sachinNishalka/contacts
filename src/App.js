import React, { useState, useEffect } from "react";
import "./App.css";
import ContactCard from "./ContactCard";
// using the variables
let title = "This is a cool";

// making an arrow function
const App = () => {
  // taking the data from a API and Using them
  // const contacts = [
  //   {
  //     avatarUrl: "https://via.placeholder.com/150",
  //     name: "Sachin Fernando",
  //     email: "nishalkasachin@gmail.com",
  //     age: 23,
  //   },
  //   {
  //     avatarUrl: "https://via.placeholder.com/150",
  //     name: "Jude Fernando",
  //     email: "Jude@gmail.com",
  //     age: 25,
  //   },
  //   {
  //     avatarUrl: "https://via.placeholder.com/150",
  //     name: "Kavi Fernando",
  //     email: "Kavi@gmail.com",
  //     age: 27,
  //   },
  //   {
  //     avatarUrl: "https://via.placeholder.com/150",
  //     name: "Nano Fernando",
  //     email: "Nano@gmail.com",
  //     age: 50,
  //   },
  // ];

  // using the use state to manipulate the data
  const [results, setResults] = useState([]);
  // using the useeffect hook
  useEffect(
    () => {
      // using the data from the API
      // fetching the data
      fetch("https://randomuser.me/api/?results=10")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setResults(data.results);
        });
    },
    // to stop fetching all the data from the database, to get it done only when the project is called, add a blank array
    []
  );

  return (
    <div>
      {/* using the map function to get the array data and place them incide */}
      {results.map((result, index) => {
        return (
          // using the props to send the data from the array to the ContactCard.js
          // providing a unique key to the each props
          <ContactCard
            key={index}
            avatarUrl={result.picture.large}
            name={result.name.first}
            email={result.email}
            age={result.dob.age}
          />
        );
      })}
      {/* using the props */}
      {/* <ContactCard
        avatarUrl="https://via.placeholder.com/150"
        name="Sachin Fernando"
        email="nishalkasachin@gmail.com"
        age={23}
      /> */}
    </div>
  );
};

export default App;
