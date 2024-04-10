import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
/*


..component/functions are used so that they can reused again ....

*/

//creating header component, jsx

//creating seperate restaurant_card outside , so that can be used inside the body component later..
const Restaurant_card = (props) => {
  //props wraps all the properties,and here its passed as an argument.
  const { resData } = props;

  return (
    <div className="rest_card">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData.info.cloudinaryImageId
        }
      />

      <h2>{resData.info.name}</h2>
      <h4>{resData.info.cuisines.join(", ")}</h4>
      <h4>{resData.info.avgRating}</h4>
      <h4>{resData.info.costForTwo}</h4>
      {/* <h4>{resData.info.sla.deliveryTime} minutes</h4> */}
    </div>
  );
};

//app layout component
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

export default Restaurant_card;

/*
Restaurant_card component: This component takes props (resName and cuisines) and renders a card with the restaurant's name, cuisines, and static values for stars and delivery time.

Body component: This component represents the body of your application. It includes a search bar and a container for displaying restaurant cards. Inside the container, it renders two instances of the Restaurant_card component with different restaurant names and cuisines.

AppLayout component: This component represents the layout of your entire application. It includes a header and the Body component.*/
