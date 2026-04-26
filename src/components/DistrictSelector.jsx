import { indiaStates } from '../data/districts'

const DistrictSelector = ({ selectedState, selectedDistrict, onDistrictChange }) => {
  const districts = selectedState ? indiaStates[selectedState] : []

  return (
    <div className="form-group">
      <label htmlFor="district-select">Select District:</label>
      <select
        id="district-select"
        value={selectedDistrict}
        onChange={(e) => onDistrictChange(e.target.value)}
        disabled={!selectedState}
      >
        <option value="">
          {selectedState ? 'Choose a district...' : 'Select a state first'}
        </option>
        {districts.map(district => (
          <option key={district} value={district}>{district}</option>
        ))}
      </select>
    </div>
  )
}

export default DistrictSelector