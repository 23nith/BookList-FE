import React from "react";

function book() {
  return (
    <div className="border-2 border-black border-solid flex flex-row">
      <div className="border-2 border-black border-solid grow">image</div>
      <div className="border-2 border-black border-solid grow-3">
        <div className="flex flex-row">
          <div className="grow-[3] border-2 border-black border-solid">
            <div>Title</div>
            <div className="flex flex-row border-2 border-black border-solid">
              <div className="px-3">author</div> |{" "}
              <div className="px-3">publisher</div>
            </div>
          </div>
          <div className="grow-[1] border-2 border-black border-solid max-w-[24px]">
            <div className="max-w-[24px]">x</div>
          </div>
        </div>
        <div>synopsis</div>
      </div>
    </div>
  );
}

export default book;
