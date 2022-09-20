import { useFormik } from "formik";
import React from "react";
import { ListItem } from "../api/types";

interface FormValue {
  notes: string;
}

const Notes = (
  addNotes: (FormData: FormValue, list: ListItem, userID: number) => void,
  list: ListItem,
  userID: number
) => {
  const formik = useFormik({
    initialValues: {
      notes: "",
    },
    onSubmit: (values) => {
      addNotes(values, list, userID);
    },
  });
  return (
    <div className="mt-10 mb-20">
      <div className="font-bold mb-3">Notes</div>
      <div>
        <form>
          <textarea
            className="textarea"
            onChange={(e) => {
              formik.handleChange(e);
              formik.submitForm();
            }}
            value={formik.values.notes}
          ></textarea>
        </form>
      </div>
    </div>
  );
};

export { Notes };
