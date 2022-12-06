// Write your code her
const TodoItem = props => {
  const {todoItem, deleteTodo} = props
  const {id, title} = todoItem

  const onDeleteItem = () => {
    deleteTodo(id)
  }

  return (
    <li>
      <div className="list-style">
        <p className="title">{title}</p>
        <button type="button" className="button" onClick={onDeleteItem()}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
