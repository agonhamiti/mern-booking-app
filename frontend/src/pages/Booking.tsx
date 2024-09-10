import { useQuery } from "react-query";
import * as apiClient from "../api-client";

const Booking = () => {
  const { data: currentUser } = useQuery(
    "fetchCurrentUser",
    apiClient.fetchCurrentUser
  );

  return(
    <div className="grid md:grid-cols-[1fr_2fr]">
        
    </div>
);
  
};

export default Booking;
