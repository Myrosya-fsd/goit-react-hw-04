import { Field, Form, Formik } from "formik";
import styles from "./SearchBar.module.css";

const SearchBar = ({ handleChangeQuery }) => {
  const initialValues = {
    query: "",
  };
  const handleSubmit = (values, options) => {
    console.log(values);
    handleChangeQuery(values.query);
    options.resetForm();
  };

  return (
    <header className={styles.header}>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form>
          <Field
            className={styles.field}
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button className={styles.btn} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
