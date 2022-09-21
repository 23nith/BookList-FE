import { useFormik } from "formik";
import React from "react";
import { addNotes } from "../api/addNotes";
import { ListItem } from "../api/types";

interface NotesProps {
  list: ListItem;
}

const Notes = ({ list }: NotesProps) => {
  const formik = useFormik({
    initialValues: {
      notes: list.notes,
    },
    onSubmit: (values) => {
      addNotes(values.notes, list);
    },
  });

  const handleSubmit = (e) => {
    formik.handleChange(e);
    formik.submitForm();
  };

  return (
    <div className="mt-10 mb-20">
      <div className="font-bold mb-3">Notes</div>
      <div>
        <form>
          <textarea
            id="notes"
            className="textarea"
            onChange={handleSubmit}
            value={formik.values.notes}
          ></textarea>
        </form>
      </div>
    </div>
  );
};

export { Notes };
