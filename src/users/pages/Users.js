import React from "react";
import UserList from "../Components/UserList";

const Users = () => {
  const users = [
    {
      name: "John",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfhVd3pxMg71lT1sjIsMpsj20iMo7gBH73CA&s",
      id: "u1",
      places: 12,
    },
    {
      name: "jammy",
      image:
        "https://img.freepik.com/free-vector/cute-cool-boy-listening-music-with-headphone-cartoon-vector-icon-illustration-people-music-isolated_138676-10365.jpg?size=338&ext=jpg&ga=GA1.1.1141335507.1719360000&semt=ais_user",
      id: "u2",
      places: 22,
    },
    {
      name: "sahil",
      image:
        "https://img.freepik.com/premium-vector/cute-boy-blowing-candy-bubble-cartoon-vector-icon-illustration-people-fashion-icon-concept-isolated_138676-4666.jpg",
      id: "u3",
      places: 21,
    },
  ];

  return <UserList items={users} />;
};

export default Users;
