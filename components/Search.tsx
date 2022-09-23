import { useFormik } from "formik";
import React, { useContext } from "react";
import { search } from "../api/books/search";
import { BooksContext } from "../contexts/BooksContext";
import { FaSearch } from "react-icons/fa";

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
      <div className="flex flex-row">
        <input
          id="query"
          type="text"
          className="bg-custom_light_gray rounded-3 px-4 py-3 w-full text-custom_gray"
          placeholder="Search books ..."
          onChange={handleSubmit}
          value={formik.values.query}
        />
        <div className="relative">
          <div className="absolute mt-4 right-3 text-custom_gray">
            <FaSearch size={20} />
          </div>
        </div>
      </div>
    </form>
  );
};

export { Search };
