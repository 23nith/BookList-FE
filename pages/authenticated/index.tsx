import type { NextPage } from "next";
import styles from "../../styles/Home.module.css";

const AuthenticatedApp: NextPage = () => {
  return (
    <div className="flex flex-col h-100vh">
      <div className="border-2 border-red border-solid flex justify-end p-2">
        <button></button>
        <button>Logout</button>
      </div>
      <div className="flex justify-center border-2 border-black border-solid grow">
        <div className="max-w-840 flex flex-row h-full w-full">
          <div className="grow border-2 border-blue border-solid h-full bg-blue-200 p-1 max-w-200">
            <div className="pt-4">
              <ul className="border-black border-2 border-solid p-4 ">
                <li className="border-black border-2 border-solid pl-2 py-3">
                  Reading List
                </li>
                <li className="border-black border-2 border-solid pl-2 py-3">
                  Finished Books
                </li>
                <li className="border-black border-2 border-solid pl-2 py-3">
                  Discover
                </li>
              </ul>
            </div>
          </div>
          <div className="grow-5 border-2 border-blue border-solid h-full bg-blue-200 p-5">
            <input
              type="text"
              className="bg-custom_light_gray rounded-3 px-4 py-3 w-full text-custom_gray"
              placeholder="Search books ..."
            />
            <div className="text-center text-xl">
              <p className="my-6">Welcome to the discover page. </p>
              <p className="mb-6">Here, let me load a few books for you... </p>
              <p className="mb-6">
                Here you go! Find more books with the search bar above.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthenticatedApp;
