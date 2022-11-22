import Link from "next/link";
import React from "react";

const cards = () => {
  return (
    <div
      className="relative overflow-hidden bg-no-repeat bg-cover max-w-xs"
      data-mdb-ripple="true"
      data-mdb-ripple-color="light"
    >
      <img
        src="https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp"
        className="max-w-xs"
        alt="Louvre"
      />
      <a href="#!">
        <div
          className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out">
          <style jsx>
            {`background-color: rgba(251, 251, 251, 0.2)`}</style>
        </div>
      </a>
    </div>
  );
};

export default cards;
