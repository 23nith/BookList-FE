import type { NextPage } from "next";
import Link from "next/link";

const finished: NextPage = () => {
  return (
    <>
      <div className="text-center text-xl">
        <p className="my-6">
          Hey there! This is where books will go when you've finished reading
          them. Get started by heading over to the{" "}
          <Link href="/discover">
            <a className="text-blue-500">Discover</a>
          </Link>{" "}
          page to add books to your list.
        </p>
      </div>
    </>
  );
};

export default finished;
