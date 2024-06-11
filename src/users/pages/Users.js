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
    {
      id: "u2",
      name: "Johnny doe",
      image:
        "https://static.vecteezy.com/system/resources/previews/024/346/462/non_2x/3d-happy-cartoon-boy-on-transparent-background-generative-ai-png.png",
      places: 5,
    },
    {
      id: "u3",
      name: "Jane doe",
      image:
        "https://static.vecteezy.com/system/resources/previews/024/346/462/non_2x/3d-happy-cartoon-boy-on-transparent-background-generative-ai-png.png",
      places: 7,
    },
  ];
  return <UserList items={Users} />;
};

export default Users;
