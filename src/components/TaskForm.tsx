import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import { Task } from "../types";

interface Props {
  onSubmit: (task: Task) => void;
}

const TaskForm: React.FC<Props> = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      title: "",
      status: "todo",
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .max(100, "Must be 100 characters or less")
        .required("Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      onSubmit({
        id: nanoid(),
        ...values,
      } as Task);
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="title">Task</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
        />
        {formik.touched.title && formik.errors.title ? (
          <div>{formik.errors.title}</div>
        ) : null}
      </div>

      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
