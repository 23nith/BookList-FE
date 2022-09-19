import React from "react";

const Notes = () => {
  return (
    <div className="mt-10 mb-20">
      <div className="font-bold mb-3">Notes</div>
      <div>
        <form>
          <textarea className="textarea"></textarea>
        </form>
      </div>
    </div>
  );
};

export { Notes };
