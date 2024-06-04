import React from "react";
import UserList from "../Components/UserList";
const Users = () => {
  const Users = [
    {
      id: "u1",
      name: "John doe",
      image:
        "https://static.vecteezy.com/system/resources/previews/024/346/462/non_2x/3d-happy-cartoon-boy-on-transparent-background-generative-ai-png.png",
      places: 3,
    },
  ];
  return <UserList items={Users} />;
};
