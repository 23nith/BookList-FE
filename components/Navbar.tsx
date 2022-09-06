import Link from "next/link";
import type { NextPage } from "next";

const Navbar: NextPage = () => {
  return (
    <div className="grow border-2 border-blue border-solid h-full bg-blue-200 p-1 min-w-200">
      <div className="pt-4">
        <ul className="border-black border-2 border-solid p-4 ">
          <li className="border-black border-2 border-solid pl-2 py-3">
            <Link href="/list">
              <a>Reading List</a>
            </Link>
          </li>
          <li className="border-black border-2 border-solid pl-2 py-3">
            <Link href="/finished">
              <a>Finished Books</a>
            </Link>
          </li>
          <li className="border-black border-2 border-solid pl-2 py-3">
            <Link href="/discover">
              <a>Discover</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
