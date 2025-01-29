import tour1 from "../assets/images/tour-1.jpeg";
import tour2 from "../assets/images/tour-2.jpeg";
import tour3 from "../assets/images/tour-3.jpeg";
import tour4 from "../assets/images/tour-4.jpeg";

import {tours} from "../data";
import Tour from "./Tour";

function Tours() {
  return (
    <div>
      {tours.map((tour) => (
        <Tour
          key={tour.id}
          image={tour.image}
          date={tour.date}
          title={tour.title}
          info={tour.info}
          location={tour.location}
          duration={tour.duration}
          cost={tour.cost}
        />
      ))}
    </div>
  );
}

export default Tours;
