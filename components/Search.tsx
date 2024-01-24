"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const Search = () => {
  const [location, setLocation] = useState("");
  const [guests, setGuests] = useState("");
  const [category, setCategory] = useState("");

  const router = useRouter();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const queryString = [
      location && `location=${encodeURIComponent(location)}`,
      guests && `guestsCapacity=${encodeURIComponent(guests)}`,
      category && `category=${encodeURIComponent(category)}`,
    ]
      .filter(Boolean)
      .join("&");

    router.push(`/?${queryString}`);
  };

  return (
    <div className="row wrapper mt-5">
      <div className="col-10 col-lg-5">
        <form className="shadow rounded" onSubmit={submitHandler}>
          <h2 className="mb-3">Search Appeals</h2>
          <div className="form-group mt-3">
            <label htmlFor="location_field" className="mb-1">
              {" "}
              Details{" "}
            </label>
            <input
              type="text"
              className="form-control"
              id="location_field"
              placeholder="Enter details"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <div className="form-group mt-3">
            <label htmlFor="guest_field" className="mb-1">
              {" "}
              No. of Volunteers{" "}
            </label>
            <select
              className="form-select"
              id="guest_field"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}>
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group mt-3">
            <label htmlFor="room_type_field" className="mb-1">
              {" "}
              Appeal Category{" "}
            </label>
            <select
              className="form-select"
              id="room_type_field"
              value={category}
              onChange={(e) => setCategory(e.target.value)}>
              {["Education", "Cleaning", "Food"].map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <button type="submit" className="btn form-btn w-100 py-2">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};
export default Search;
