// import React, { useEffect, useState } from "react";
// import { useHttpClient } from "../../Shared/Hooks/http-hook";
// import { useParams } from "react-router-dom";
// import LoadingSpinner from "../../Shared/components/UiElements/LoadingSpinner";
// import PlaceList from "../Components/PlaceList";
// const UserPlaces = () => {
//   const { isLoading, error, sendRequest, clearError } = useHttpClient();

//   const [loadedPlaces, setLoadedPlaces] = useState();

//   const userId = useParams().uid;

//   console.log(useParams().uid);

//   useEffect(() => {
//     const fetchPlaces = async () => {
//       try {
//         const responseData = await sendRequest(
//           `http://localhost:5000/api/places/user/${userId}`
//         );
//         setLoadedPlaces(responseData.places);
//       } catch (err) {}
//     };
//     fetchPlaces();
//   }, [userId, sendRequest]);

//   const placeDeletedHandler = (deletedPlaceId) => {
//     setLoadedPlaces((prevPlaces) => {
//       return prevPlaces.filter((place) => place.id !== deletedPlaceId);
//     });
//   };

//   return (
//     <>
//       {/* error modal to be added later */}

//       {isLoading && (
//         <div className="center">
//           <LoadingSpinner />
//         </div>
//       )}
//       {!isLoading && loadedPlaces && (
//         <PlaceList items={loadedPlaces} onDeletePlace={placeDeletedHandler} />
//       )}
//     </>
//   );
// };

// export default UserPlaces;

import React from "react";
import PlaceList from "../Components/PlaceList";

import { useParams } from "react-router-dom";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building 1",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire State Building 2",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u2",
  },
];
const UserPlaces = () => {
  const userId = useParams().uid;

  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);

  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
