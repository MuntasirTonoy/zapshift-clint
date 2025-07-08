import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import warehouseData from "../../assets/data/warehouses.json";

// Fix Leaflet icon loading issue
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const Coverage = () => {
  const [query, setQuery] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState(null);

  const filteredWarehouses = warehouseData.filter((d) =>
    d.district.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelectDistrict = (district) => {
    setSelectedDistrict(district);
    setQuery(district.district);
  };

  return (
    <div className="p-6">
      <h1 className="md:text-5xl text-2xl text-teal-900 text-center font-extrabold mb-4">
        We are available in 64 districts
      </h1>

      {/* Search */}
      <div className="w-full max-w-xl mb-15 mx-auto  my-6">
        <div className="flex bg-gray-100 rounded-full items-center overflow-hidden">
          <div className="pl-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1011 18.5a7.5 7.5 0 005.65-2.85z"
              />
            </svg>
          </div>

          <input
            type="text"
            placeholder="Search here"
            className="flex-grow px-4 py-2 bg-gray-100 focus:outline-none text-sm"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <button className="bg-lime-400 hover:bg-lime-500 text-black font-bold px-5 py-2 rounded-full transition-all">
            Search
          </button>
        </div>

        {/* Optional suggestions dropdown */}
        {query && (
          <ul className="bg-white shadow mt-2 rounded-box max-h-60 overflow-y-auto absolute w-full max-w-xl z-20">
            {filteredWarehouses.map((d, i) => (
              <li
                key={i}
                className="p-2 cursor-pointer hover:bg-base-200"
                onClick={() => handleSelectDistrict(d)}
              >
                {d.district}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Map */}
      <div className="mx-w-full  md:max-w-5/6 h-[450px] rounded-box overflow-hidden shadow mx-auto">
        <MapContainer
          center={[23.685, 90.3563]}
          zoom={7}
          scrollWheelZoom={true}
          className="w-full h-full z-0"
        >
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* Show all markers if no district selected */}
          {(selectedDistrict ? [selectedDistrict] : warehouseData).map(
            (w, idx) => (
              <Marker key={idx} position={[w.latitude, w.longitude]}>
                <Popup>
                  <h3 className="font-bold text-lg mb-1">{w.city}</h3>
                  <p className="text-sm">
                    <strong>District:</strong> {w.district}
                  </p>
                  <p className="text-sm">
                    <strong>Covered:</strong> {w.covered_area.join(", ")}
                  </p>
                  <img
                    src={w.flowchart}
                    alt={`${w.city} flowchart`}
                    className="mt-2 max-h-24 w-full object-contain"
                  />
                </Popup>
              </Marker>
            )
          )}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
