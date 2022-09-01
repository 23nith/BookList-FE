import type { NextPage } from "next";

const discover: NextPage = () => {
  return (
    <>
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
    </>
  );
};

export default discover;
