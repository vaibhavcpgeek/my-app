import React from "react";
import { forMattedKeys, checkValue } from "../../utils";
import "./index.css";

const ZoneDetail = ({ zoneDetail }) => {
  return (
    <section data-testid="zone-detail">
      {zoneDetail.status === "OK"
        ? Object.keys(zoneDetail).map((key, index) => {
            return (
              <div className="row" key={index}>
                <span className="field">{forMattedKeys(key)}</span>
                <span>{checkValue(zoneDetail[key])}</span>
              </div>
            );
          })
        : null}
    </section>
  );
};

export default ZoneDetail;
