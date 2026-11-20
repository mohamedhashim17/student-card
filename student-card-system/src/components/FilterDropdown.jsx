
import { Filter } from "lucide-react";

function FilterDropdown({ filter, setFilter }) {
  return (
    <div className="filter-dropdown">

      <Filter size={19} />

      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="All">All Students</option>
        <option value="Active">Active Students</option>
        <option value="Inactive">Inactive Students</option>
      </select>

    </div>
  );
}

export default FilterDropdown;
