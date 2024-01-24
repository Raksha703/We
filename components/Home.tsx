"use client";
import React, { use } from "react";
import RoomItem from "./room/RoomItem";
import { IRoom } from "@/backend/models/room";
import CustomPagination from "./layout/CustomPagination";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface Props {
  data: {
    success: boolean;
    resPerPage: number;
    filteredRoomsCount: number;
    rooms: IRoom[];
  };
}

const Home = ({ data }: Props) => {
  
  const searchParams = useSearchParams();
  const location = searchParams.get("location");

  const { resPerPage, filteredRoomsCount, rooms } = data;
  return (
    <div>
      <section id="rooms" className="container mt-5">
        <h2 className="mb-3 ml-2 stays-heading" style={{ color: 'red' }}>
          {location
            ? ` ${filteredRoomsCount} ${
                filteredRoomsCount === 1 ? "appeals" : "appeals"
              } found at ${location}`
            : "All Appeals"}
        </h2>

        <Link href="/search" className="ml-2 back-to-search">
          <i className="fa fa-search me-2"></i> Search
        </Link>
        <div className="row mt-4">
          {rooms?.length === 0 ? (
            <div className="alert alert-danger mt-5 w-100">
              <b>No Appeals.</b>
            </div>
          ) : (
            rooms?.map((room) => <RoomItem key={room._id} room={room} />)
          )}
        </div>
      </section>

      <CustomPagination
        resPerPage={resPerPage}
        filteredRoomsCount={filteredRoomsCount}
      />
    </div>
  );
};

export default Home;
