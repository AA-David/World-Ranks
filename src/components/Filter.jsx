import React from "react";

export default function Filter({
  setSelectedSorting,
  setUnMember,
  setIndependent,
  editRegions,
}) {
  return (
    <section className="md:w-1/4 lg:w-1/3">
      <form>
        <ul>
          {/* Sorting */}
          <label
            htmlFor="sortingOption"
            className="block mt-7 mb-2 font-semibold text-greyMid">
            Sort By
          </label>
          <li>
            <select
              id="sortingOption"
              className="border-1 border-greyMid bg-blackLight rounded-lg w-full text-greyLight"
              onChange={(e) => setSelectedSorting(e.target.value)}>
              <option value="population">
                Population
              </option>
              <option value="area">
                Area km2
              </option>
              <option value="alphabetical">
                Alphabetical
              </option>
            </select>
          </li>

          {/* Region Chips */}
          <label className="block mt-7 mb-2 font-semibold text-greyMid">
            Region
          </label>
          <li className="flex flex-wrap gap-3">
            <input
              type="checkbox"
              id="americas"
              className="hidden peer/americas"
              onClick={() => editRegions("Americas")}
              defaultChecked/>
            <label
              htmlFor="americas"
              className="peer-checked/americas:bg-grey peer-checked/americas:text-greyLight chip">
              Americas
            </label>

            <input
              type="checkbox"
              id="antartic"
              className="hidden peer/antartic"
              onClick={() => editRegions("Antarctic")}
              defaultChecked/>
            <label
              htmlFor="antartic"
              className="peer-checked/antartic:bg-grey peer-checked/antartic:text-greyLight chip">
              Antarctic
            </label>

            <input
              type="checkbox"
              id="africa"
              className="hidden peer/africa"
              onClick={() => editRegions("Africa")}
              defaultChecked/>
            <label
              htmlFor="africa"
              className="peer-checked/africa:bg-grey peer-checked/africa:text-greyLight chip">
              Africa
            </label>

            <input
              type="checkbox"
              id="asia"
              className="hidden peer/asia"
              onClick={() => editRegions("Asia")}
              defaultChecked/>
            <label
              htmlFor="asia"
              className="peer-checked/asia:bg-grey peer-checked/asia:text-greyLight chip">
              Asia
            </label>

            <input
              type="checkbox"
              id="europe"
              className="hidden peer/europe"
              onClick={() => editRegions("Europe")}
              defaultChecked/>
            <label
              htmlFor="europe"
              className="peer-checked/europe:bg-grey peer-checked/europe:text-greyLight chip">
              Europe
            </label>

            <input
              type="checkbox"
              id="oceania"
              className="hidden peer/oceania"
              onClick={() => editRegions("Oceania")}
              defaultChecked/>
            <label
              htmlFor="oceania"
              className="peer-checked/oceania:bg-grey peer-checked/oceania:text-greyLight chip">
              Oceania
            </label>
          </li>

          {/* Status Checkboxes */}
          <label
            htmlFor="Satus"
            className="block mt-7 mb-2 font-semibold text-greyMid">
            Status
          </label>
          <li>
            <label htmlFor="un-member" className="statusLabel">
              <input
                type="checkbox"
                id="un-member"
                className="statusCheckbox"
                onClick={() => setUnMember((prev) => !prev)}
                defaultChecked/>
              Member of the United Nations
            </label>

            <label htmlFor="independent" className="statusLabel">
              <input
                type="checkbox"
                id="independent"
                className="statusCheckbox"
                onClick={() => setIndependent((prev) => !prev)}
                defaultChecked/>
              Independent
            </label>
          </li>
        </ul>
      </form>
    </section>
  );
}
