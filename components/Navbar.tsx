import Link from "next/link";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

const Navbar: NextPage = () => {
  const router = useRouter();
  return (
    <div className="grow h-full p-1 min-w-200 max-w-full sm:max-w-200 text-center sm:text-start ">
      <div className="pt-4">
        <ul className={styles.nav_box}>
          <li
            className={`pl-2 py-3 hover_nav_li ${
              router.pathname == "/list" ? "nav_li_active" : ""
            }`}
          >
            <Link href="/list">
              <a>Reading List</a>
            </Link>
          </li>
          <li
            className={`pl-2 py-3 hover_nav_li ${
              router.pathname == "/finished" ? "nav_li_active" : ""
            }`}
          >
            <Link href="/finished">
              <a>Finished Books</a>
            </Link>
          </li>
          <li
            className={`pl-2 py-3 hover_nav_li ${
              router.pathname == "/discover" ? "nav_li_active" : ""
            }`}
          >
            <Link href="/discover">
              <a>Discover</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { Navbar };
