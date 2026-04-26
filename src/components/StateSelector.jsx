import { indiaStates } from '../data/districts'

const StateSelector = ({ selectedState, onStateChange }) => {
  const states = Object.keys(indiaStates)

  return (
    <div className="form-group">
      <label htmlFor="state-select">Select State:</label>
      <select
        id="state-select"
        value={selectedState}
        onChange={(e) => onStateChange(e.target.value)}
      >
        <option value="">Choose a state...</option>
        {states.map(state => (
          <option key={state} value={state}>{state}</option>
        ))}
      </select>
    </div>
  )
}

export default StateSelector