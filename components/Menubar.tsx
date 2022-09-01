import type { NextPage } from "next";

const Menubar: NextPage = () => {
  return (
    <div className="border-2 border-blue border-solid flex justify-end p-2">
      <button></button>
      <button>Logout</button>
    </div>
  );
};

export default Menubar;
