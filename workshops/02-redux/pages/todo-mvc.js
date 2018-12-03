import { Component } from 'react'

const STATUS = {
  ACTIVE: 'active',
  COMPLETED: 'completed',
  ALL: 'all'
}

  
class Filter extends Component {
  onFilterAll = () => {
    this.props.filer(STATUS.ALL)
  }

  onFilterActive = () => {
    this.props.filer(STATUS.ACTIVE)
  }

  onFilterCompleted = () => {
    this.props.filer(STATUS.COMPLETED)
  }

  render() {
    return (
      <div>
        <div><label htmlFor="all">All: </label><input id="all" type="radio" name="filter" onClick={this.onFilterAll} defaultChecked={true} /></div>
        <div><label htmlFor="active">Active: </label><input id="active" type="radio" name="filter" onClick={this.onFilterActive} defaultChecked={false} /></div>
        <div><label htmlFor="completed">Completed: </label><input id="completed" type="radio" name="filter" onClick={this.onFilterCompleted} defaultChecked={false} /></div>
      </div>
    )
  }
}

class TodoInput extends Component {
  onKeyPress = (event) => {
    if (event.key === 'Enter') {
      let inputValue = this.refs.todoInput.value
      this.props.handleEnter(inputValue)
      this.refs.todoInput.value = ''
    }
  }

  render() {
    return <div><input ref="todoInput" onKeyPress={this.onKeyPress}/></div>
  }
}

class Todo extends Component {
  onClickDeleteButton = () => {
    this.props.deleteTodo(this.props.index)
  }

  onClickComplete = () => {
    this.props.completeTodo(this.props.index, this.refs.completed.checked)
  }

  render() {
    return (
      <div>
        <input ref="completed" type="checkbox" onChange={this.onClickComplete} checked={this.props.status == STATUS.COMPLETED}/>
        <span>{this.props.text}</span>
        <button onClick={this.onClickDeleteButton}>X</button>
      </div>
    )
  }
}

class TodoMvc extends Component {
  state = {
    todos: [],
    filter: STATUS.ALL
  }

  getListElements() {

    let listElements = []
    let filter = this.state.filter
    for (let i = 0; i < this.state.todos.length; i++) {
      let todo = this.state.todos[i]
      if (filter === STATUS.ALL || filter === todo.status ) {
        listElements.push(
          <Todo
            text={todo.text}
            status={todo.status}
            index={i}
            deleteTodo={this.deleteTodo}
            completeTodo={this.completeTodo}
            key={todo + i} />)
      }
    }

    return listElements
  }

  getActiveTodosCount() {
    return this.state.todos.filter((todo) => todo.status === STATUS.ACTIVE).length
  }

  addTodo = (todoText) => {
    this.setState({
      todos: this.state.todos.concat({
        text: todoText,
        status: STATUS.ACTIVE
      })
    })
  }

  deleteTodo = (index) => {
    let todos = this.state.todos.slice()
    todos.splice(index, 1)

    this.setState({
      todos: todos
    })
  }

  completeTodo = (index, isCompleted) => {
    let todos = this.state.todos.slice()

    todos[index].status = isCompleted ? STATUS.COMPLETED : STATUS.ACTIVE

    this.setState({
      todos: todos
    })
  }

  filterStatus = (status) => {
    this.setState({
      filter: status
    })
  }

  selectAll = () => {
    let isSelectAll = this.state.todos.find((todo) => todo.status == STATUS.ACTIVE)
    let selectStatus = isSelectAll ? STATUS.COMPLETED : STATUS.ACTIVE
    let todos = this.state.todos.map(todo => {
      todo.status = selectStatus
      return todo
    })

    this.setState({
      todos: todos
    })
  }

  render() {
    return (
      <div>
        <Filter filer={this.filterStatus} status={this.state.filter}/>
        <TodoInput handleEnter={this.addTodo} />
        { this.getListElements() }
        <input 
          type="checkbox" 
          checked={this.state.todos.length && !this.getActiveTodosCount()} 
          onChange={this.selectAll} />
        <p>{this.getActiveTodosCount() + (this.getActiveTodosCount() === 1 ? ' item left' : ' items left')}</p>
      </div>
    )
  }
}

export default TodoMvc