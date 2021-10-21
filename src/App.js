import React, { useState, useEffect } from "react";
import { fetchTimeZoneList, fetchTimeZone } from "./services";
import ZoneDetail from "./components/ZoneDetail";
import "./App.css";

function App() {
  const [timeZones, setTimeZones] = useState([]);
  const [selectedTimeZone, setSelectedTimeZone] = useState("");
  const [timeZoneDetails, setTimeZoneDetails] = useState({});

  useEffect(() => {
    const getTimeZones = async () => {
      const results = await fetchTimeZoneList();
      setTimeZones(results.zones);
    };
    getTimeZones();
  }, []);

  useEffect(() => {
    let interval;

    // Initiate interval
    if (selectedTimeZone.length) {
      interval = setInterval(() => {
        updateZoneDetail(selectedTimeZone);
      }, 5000);
    }
    // Cleanup
    return () => {
      clearInterval(interval);
    };
  }, [selectedTimeZone]);

  // Default method which will be called for every 5 sec to update zone details
  const updateZoneDetail = async (zoneName) => {
    if (zoneName !== "") {
      const results = await fetchTimeZone(zoneName);
      setTimeZoneDetails(results);
    }
  };

  const handleChange = async (event) => {
    setSelectedTimeZone(event.target.value);
    updateZoneDetail(event.target.value);
  };

  return (
    <div className="App">
      <section className="container">
        <label htmlFor="time-zones">Select time zones</label>
        <select
          id="time-zones"
          value={selectedTimeZone}
          onChange={handleChange}
          data-testid="time-zone-list"
        >
          <option>Select</option>
          {timeZones.map((zone, index) => {
            return (
              <option key={`${index}-${zone.timestamp}`} value={zone.zoneName}>
                {zone.zoneName}
              </option>
            );
          })}
        </select>
        <ZoneDetail zoneDetail={timeZoneDetails} />
      </section>
    </div>
  );
}

export default App;
