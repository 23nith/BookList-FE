import { useFormik } from "formik";
import React, { useContext } from "react";
import { search } from "../api/search";
import { BooksContext } from "../contexts/BooksContext";

const Search = () => {
  const { setBooks } = useContext(BooksContext);
  const formik = useFormik({
    initialValues: {
      query: "",
    },
    onSubmit: (values) => {
      search(values, setBooks);
    },
  });

  const handleSubmit = (e) => {
    formik.handleChange(e);
    formik.submitForm();
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        id="query"
        type="text"
        className="bg-custom_light_gray rounded-3 px-4 py-3 w-full text-custom_gray"
        placeholder="Search books ..."
        onChange={handleSubmit}
        value={formik.values.query}
      />
    </form>
  );
};

export { Search };
