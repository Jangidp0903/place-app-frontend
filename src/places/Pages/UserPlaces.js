import React, { useEffect, useState } from "react";
import { useHttpClient } from "../../Shared/Hooks/http-hook";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../Shared/components/UiElements/LoadingSpinner";
import PlaceList from "../Components/PlaceList";
const UserPlaces = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const [loadedPlaces, setLoadedPlaces] = useState();

  const userId = useParams().userId;

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/places/user/${userId}`
        );
        setLoadedPlaces(responseData.places);
      } catch (err) {}
    };
    fetchPlaces();
  }, [userId, sendRequest]);

  const placeDeletedHandler = (deletedPlaceId) => {
    setLoadedPlaces((prevPlaces) => {
      return prevPlaces.filter((place) => place.id !== deletedPlaceId);
    });
  };

  return (
    <>
      {/* error modal to be added later */}

      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedPlaces && (
        <PlaceList items={loadedPlaces} onDeletePlace={placeDeletedHandler} />
      )}
    </>
  );
};

export default UserPlaces;
