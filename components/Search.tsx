import { useFormik } from "formik";
import React from "react";

function Search() {
  const formik = useFormik({
    initialValues: {
      query: "",
    },
    onSubmit: (values) => {
      console.log(values.query);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        id="query"
        type="text"
        className="bg-custom_light_gray rounded-3 px-4 py-3 w-full text-custom_gray"
        placeholder="Search books ..."
        onChange={formik.handleChange}
        value={formik.values.query}
      />
    </form>
  );
}

export default Search;
