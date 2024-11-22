import css from "./Descriptions.module.css";

const Descriptions = () => {
  return (
    <>
      <h1 className={css.title}>Sip Happens Café</h1>
      <p className={css.text}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </>
  );
};

export default Descriptions;
