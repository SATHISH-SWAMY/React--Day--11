// components/BookForm.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './BookForm.css';
const BookSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  author: Yup.string().required('Author is required'),
  isbn: Yup.string().required('ISBN is required'),
  publicationDate: Yup.date().required('Publication Date is required'),
});

const BookForm = ({ initialValues, onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={BookSchema}
      onSubmit={onSubmit}
    >
      <Form>
    
          <label>Title:</label>
          <Field type="text" name="title" />
          <ErrorMessage name="title" component="div" />
        

    
          <label>Author:</label>
          <Field type="text" name="author" />
          <ErrorMessage name="author" component="div" />
        

    
          <label>ISBN:</label>
          <Field type="text" name="isbn" />
          <ErrorMessage name="isbn" component="div" />
        

    
          <label>Publication Date:</label>
          <Field type="date" name="publicationDate" />
          <ErrorMessage name="publicationDate" component="div" />
        

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default BookForm;
