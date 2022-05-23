import "./App.css";
import Navbar from "./comp/Navbar";
import Offers from "./comp/Offers";
import Filters from "./comp/Filters";
import Resturant from "./comp/Resturant";
import userdata from "../src/data/userInfo.json";
import resturants from "./data/resturant.json";
import offer from "./data/offerdata.json";
import { useState } from "react";

const filters = [
  "Cost High to Low",
  "Cost Low to High",
  "Ratings",
  "Delivery Time",
  "Relevance",
];
function App() {
  const [filterBy, SetFilterBy] = useState("");
  const [data, setData] = useState(resturants);

  const updateFilter = (newFilter) => {
    switch (newFilter) {
      case "1": {
        SetFilterBy(1);
        data.sort((a, b) => b.costFortwo - a.costFortwo);
        console.log(data.map((d) => d.costFortwo));
        setData([...data]);
        break;
      }

      case "2": {
        SetFilterBy(2);
        data.sort((a, b) => a.costFortwo - b.costFortwo);
        console.log(data.map((d) => d.costFortwo));
        setData([...data]);
        break;
      }
      default: {
        setData(resturants);
        break;
      }
    }
  };
  return (
    <>
      <Navbar {...userdata.location} />
      <Offers offer={offer} />
      <section className="near-you">
        <Filters filters={filters} currentFilteredBy={filterBy} updateFilter={updateFilter}/>
        <Resturant Restu={resturants} />
      </section>
    </>
  );
}

export default App;
