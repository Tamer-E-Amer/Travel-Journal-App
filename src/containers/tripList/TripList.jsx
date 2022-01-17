import React from "react";
import { TripCard } from "../../components";
// css
import "./tripList.css";
// importing data
import tripData from "../../data/tripData";
const TripList = () => {
  // mapping the tripData and passing prameter to the trip component
  const card = tripData.map((trip) => {
    return <TripCard key={trip.id} trip={trip} />;
  });
  return <section>{card}</section>;
};

export default TripList;
