import styles from "../style.module.css";
import shortid from "shortid";

const Form = ({ todo, setTodo, todoList, setTodoList }) => {
  const handleChange = (event) => {
    setTodo(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setTodoList([...todoList, { name: todo, key: shortid.generate() }]);
    console.log(todoList);
    setTodo("");
  };

  return (
    <div className={styles.form}>
      <form onSubmit={handleSubmit}>
        <input
          value={todo}
          onChange={handleChange}
          className={styles.todoinput}
          placeholder="Add Item To Do"
        ></input>
        <button type="submit" className={styles.button}>
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
