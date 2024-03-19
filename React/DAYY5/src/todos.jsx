import React from 'react';
import Todo from './todo';
import todoStore from './stores/todostore';
import { createTodoActionCreator, reloadTodosActionCreator } from './actions/todoactions';


// Container Component
export default class Todos extends React.Component {
    constructor() {
        super();
        this.state = {
            val: '',
            // 2
            todos: todoStore.getAll(),
            // // 1
            // todos: [
            //     {
            //         id: 111123213124,
            //         text: 'Go Shopping',
            //         complete: false
            //     },
            //     {
            //         id: 2323223213124,
            //         text: 'Do Strength Training',
            //         complete: true
            //     },
            //     {
            //         id: 4343423213124,
            //         text: 'Play Cricket',
            //         complete: false
            //     }
            // ]
        }
        this.getTodos = this.getTodos.bind(this);
    }
    getTodos() {
        this.setState({ todos: todoStore.getAll() });
    }
    componentDidMount() {
        // Subscribe to the change event of the todoStore
        todoStore.on('change', this.getTodos);
    }
    componentWillUnmount() {
        // Unsubscribe to the change event of the todoStore
        todoStore.off('change', this.getTodos);
    }
    handleChange(evt) {
        this.setState({ val: evt.target.value });
    }
    createTodoFun() {
        // here i need  to call action
        let txt = document.getElementById('todoInput').value;
        createTodoActionCreator(txt);
        this.setState({ val: '' });
        document.getElementById('todoInput').focus();
    }
    reloadTodosFun(){
        // Need to give call to the action creator fun
        reloadTodosActionCreator();
    }
    render() {
        const { todos } = this.state; // ES 2015 Destructuring
        const TodoComponents = todos.map((todo) => {
            return <Todo key={todo.id} {...todo} />
        })
        return (
            <div>
                <span style={{ fontWeight: 'bolder' }}>Todo</span>:- <input type='text' id='todoInput'
                    value={this.state.val}
                    onChange={this.handleChange.bind(this)} /> <br />
                <button onClick={this.createTodoFun.bind(this)} className='btn btn-warning btn-outline-dark'
                    style={{ margin: '10px' }}>Create Todo!</button>
                {/* 6 */}
                <button onClick={this.reloadTodosFun.bind(this)} className='btn btn-warning btn-outline-dark'
                    style={{ margin: '10px' }}>Reload Todos!</button>
                <h1 className='display-1 text-danger'>Todos</h1>
                <ul>{TodoComponents}</ul>
            </div>
        )
    }
}
