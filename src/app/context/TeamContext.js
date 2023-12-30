"use client"
import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const TeamContext = createContext();

export const TeamProvider = ({ children }) => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/team");
        setTeam(response.data);
      } catch (error) {
        console.error("Error fetching team data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <TeamContext.Provider value={{ team }}>{children}</TeamContext.Provider>
  );
};

export const useTeam = () => {
  return useContext(TeamContext);
};
