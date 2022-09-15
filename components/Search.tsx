import { useFormik } from "formik";
import React, { useContext } from "react";
import { search } from "../api/search";
import { BooksContext } from "../contexts/BooksContext";

function Search() {
  const { setBooks } = useContext(BooksContext);
  const formik = useFormik({
    initialValues: {
      query: "",
    },
    onSubmit: (values) => {
      search({ values, setBooks });
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
