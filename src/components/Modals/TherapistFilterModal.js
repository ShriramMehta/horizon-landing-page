import React, { useState } from "react";
import { useNavigate } from "react-router";

const TherapistFilterModal = ({ applyFilters }) => {
  const [areaOfFocus, setAreaOfFocus] = useState("");
  const [experience, setExperience] = useState("");
  const [genders, setGender] = useState("");
  const [languages, setLanguages] = useState([]);
  const [approach, setApproach] = useState([]);

  const handleApplyFilters = () => {
    const filters = {
      areaOfFocus,
      experience,
      genders,
      languages,
      approach,
    };
    console.log(filters);
    applyFilters(filters);
  };

  return (
    <div className="shadow-xl flex flex-col justify-center items-center gap-4 p-6 max-w-screen-md">
      {/* Add your filter options here */}
      <label>
        Area of Focus:
        <input
          type="text"
          value={areaOfFocus}
          onChange={(e) => setAreaOfFocus(e.target.value)}
        />
      </label>
      <label>
        Years of Experience:
        <input
          type="text"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
        />
      </label>
      <label>
        Gender:
        <input
          type="text"
          value={genders}
          onChange={(e) => setGender(e.target.value)}
        />
      </label>
      <label>
        Languages:
        <select
          multiple
          value={languages}
          onChange={(e) =>
            setLanguages(
              Array.from(e.target.selectedOptions, (option) => option.value)
            )
          }
        >
          <option value="Hindi">Hindi</option>
          <option value="English">English</option>
          <option value="Marathi">Marathi</option>
        </select>
      </label>
      <label>
        Approach:
        <select
          multiple
          value={approach}
          onChange={(e) =>
            setApproach(
              Array.from(e.target.selectedOptions, (option) => option.value)
            )
          }
        >
          <option value="CBT">CBT</option>
          <option value="DBT">DBT</option>
          <option value="REBT">REBT</option>
          <option value="FamilyTherapy">Family Therapy</option>
          <option value="ArtTherapy">Art Therapy</option>
          <option value="Others">Others</option>
        </select>
      </label>
      <button onClick={handleApplyFilters}>Apply</button>
    </div>
  );
};

export default TherapistFilterModal;
