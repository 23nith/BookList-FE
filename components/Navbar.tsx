import Link from "next/link";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Navbar: NextPage = () => {
  return (
    <div className="grow h-full  p-1 min-w-200">
      <div className="pt-4">
        <ul className={styles.nav_box}>
          <li className={styles.nav_li_active}>
            <Link href="/list">
              <a>Reading List</a>
            </Link>
          </li>
          {/* <li className="border-black border-2 border-solid pl-2 py-3"> */}
          <li className="pl-2 py-3">
            <Link href="/finished">
              <a>Finished Books</a>
            </Link>
          </li>
          <li className="pl-2 py-3">
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
