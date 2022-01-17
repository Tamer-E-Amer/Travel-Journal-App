import React from "react";
// css file
import "./tripCard.css";
// icons
import { MdPlace } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { IconContext } from "react-icons";
const TripCard = (props) => {
  return (
    <div className="tripCard">
      <div className="tripCard__image">
        <img src={`../images/${props.trip.cityImage}`} alt={props.trip.cityImage} />
        {/* test if the trip is not available put complete badge */}
        {!props.trip.isAvailable && (
          <span className="tripCard__image__badge">complete</span>
        )}
      </div>
      <div className="tripCard__data">
        <div className="tripCard__data__title">
          <IconContext.Provider
            value={{ className: "tripCard__data__title__icon" }}
          >
            <MdPlace />
          </IconContext.Provider>
          <span className="tripCard__data__title__city-name">
            {props.trip.cityName}
          </span>
          <span className="tripCard__data__title__state">
            {props.trip.state}
          </span>
          {/* test if the trip is available show the booking button */}
          {props.trip.isAvailable === 1 && (
            <span className="tripCard__data__title__booking">Book Now</span>
          )}
        </div>
        <div className="tripCard__data__date">
          <IconContext.Provider
            value={{ className: "tripCard__data__date__date-icon" }}
          >
            <FaCalendarAlt />
          </IconContext.Provider>

          <span>{props.trip.dateFrom}</span>
          <span>-</span>
          <span>{props.trip.dateTo}</span>
        </div>
        <div className="tripCard__data__description">
          <p>{props.trip.about}</p>
        </div>
        {props.trip.isAvailable === 1 && (
            <span className="tripCard__data__title__booking-mobile">Book Now</span>
          )}
      </div>
    </div>
  );
};

export default TripCard;
