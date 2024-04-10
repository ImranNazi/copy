import resList from "../utils/mockData";
import Restaurant_card from "../app";
import { useEffect, useState } from "react";
import resList from "../utils/mockData";
import shimmer from "./Shimmer";
//body component
const Body = () => {
  //react hook
  //useState()

  // const [ListOfRestaurants, setListOfRestaurant] = useState([
  //   {
  //     info: {
  //       id: "17301",
  //       name: "KFC",
  //       cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
  //       locality: "Vani Vilas Road",
  //       areaName: "Basavanagudi",
  //       costForTwo: "₹400 for two",
  //       cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
  //       avgRating: 4.3,
  //       parentId: "547",
  //       avgRatingString: "4.3",
  //       totalRatingsString: "10K+",
  //     },
  //   },
  //   {
  //     info: {
  //       id: "23847",
  //       name: "Domino's Pizza",
  //       cloudinaryImageId: "d0450ce1a6ba19ea60cd724471ed54a8",
  //       locality: "Rest House Road",
  //       areaName: "Brigade Road",
  //       costForTwo: "₹400 for two",
  //       cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
  //       avgRating: 4.4,
  //       parentId: "2456",
  //       avgRatingString: "4.4",
  //       totalRatingsString: "5K+",
  //     },
  //   },
  //   {
  //     info: {
  //       id: "43836",
  //       name: "McDonald's",
  //       cloudinaryImageId:
  //         "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/fe11ced6-89a3-4080-8610-3c743a3bb3f0_43836.jpg",
  //       locality: "MG Road",
  //       areaName: "Ashok Nagar",
  //       costForTwo: "₹400 for two",
  //       cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
  //       avgRating: 3.7,
  //       parentId: "630",
  //       avgRatingString: "4.3",
  //       totalRatingsString: "10K+",
  //     },
  //   },
  // ]); or...
  const [ListOfRestaurants, setListOfRestaurant] = useState(resList);
  //useEffect
  // This code runs after every render
  // Perform side effects here
  // useEffect(() => {
  //   fetchData();
  // }, []);
  // const fetchData = async () => {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //   );
  //   const json = await data.json();
  //   console.log(json);
  //   //setListOfRestaurant();
  //   // ListOfRestaurants(json.data.cards);
  // };
  // shimmer ui
  if (ListOfRestaurants.length === 0) {
    return <shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = ListOfRestaurants.filter(
              (res) => res.info.avgRating > 3.7
            );

            //arrow fun.

            // console.log(ListOfRestaurants);
            setListOfRestaurant(filteredList);
          }}
          //from the above code:
          /**The code maintains a list of restaurants in a
           *  component's state using React's `useState` hook.
           *  When a filter button is clicked, it filters the list to only
           * include restaurants with an average rating greater than 3.7. Then,
           *  it updates the state with the filtered list, causing the component
           * to re-render and display only the filtered restaurants.
           *  This allows users to easily see restaurants with higher ratings. */
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="restaurant_container">
        {ListOfRestaurants.map((Restaurant) => (
          <Restaurant_card key={Restaurant.info.id} resData={Restaurant} />
        ))}

        {/* resList.map(): This iterates over each element in the resList array.
  
  (Restaurant) => ( <Restaurant_card resData={Restaurant} /> ): This is an arrow function that takes each element of the resList array (which represents a restaurant object) as an argument. It returns a Restaurant_card component with the current restaurant data passed as the resData prop.
  
  <Restaurant_card resData={Restaurant} />: This renders the Restaurant_card component for each restaurant in the resList array. The resData prop is assigned the current restaurant object, allowing the Restaurant_card component to access and display the relevant information for that restaurant. */}
        {/* <Restaurant_card
            resData={resList[0]} //will go as an argument in props , in Restaurant_card.
            // resName="meghana foods"
            // cuisines="Biryani,South-indian,north-indian,Fast-Food"
          /> */}
        {/* <Restaurant_card resData={resList[0]} />
          <Restaurant_card resData={resList[1]} />
          <Restaurant_card resData={resList[2]} />
          <Restaurant_card resData={resList[3]} />
          <Restaurant_card resData={resList[4]} />
          <Restaurant_card resData={resList[5]} />
          <Restaurant_card resData={resList[6]} />
          <Restaurant_card resData={resList[7]} />
          <Restaurant_card resData={resList[8]} /> */}
        {/* <Restaurant_card resData={resList[6]} />
          <Restaurant_card resData={resList[7]} />
          <Restaurant_card resData={resList[8]} />
          <Restaurant_card resData={resList[9]} /> */}
        {/* <Restaurant_card resData={resList[10]} />
          <Restaurant_card resData={resList[11]} /> */}
      </div>
    </div>
  );
};
<div className="h">{"noo"}</div>;
export default Body;
