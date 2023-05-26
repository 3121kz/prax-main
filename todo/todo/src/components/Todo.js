import styles from "../style.module.css";

const Todo = ({ todoItem, todoList, setTodoList }) => {
  const doneTodo = () => {
    setTodoList(todoList.filter((item) => item.id !== todoItem.id));
  };
  return (
    <div>
      <div className={styles.item}>
        <h3 className={styles.todoname}> {todoItem.name} </h3>
        <button onClick={doneTodo} className={styles.donebutton}>
          Done
        </button>
      </div>
    </div>
  );
};
export default Todo;
