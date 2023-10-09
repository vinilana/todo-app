import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import { Task } from "../../../types";
import Button from "../../buttons";
import { Form, Input } from "./TaskForm.styles";

interface TaskFormProps {
  onSubmit: (task: Task) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit }) => {
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
    <Form onSubmit={formik.handleSubmit}>
      <div>
        <Input
          id="title"
          name="title"
          type="text"
          placeholder="Add Task"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
        />
        {formik.touched.title && formik.errors.title ? (
          <div>{formik.errors.title}</div>
        ) : null}
      </div>

      <Button type="submit">+</Button>
    </Form>
  );
};

export default TaskForm;
