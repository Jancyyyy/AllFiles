import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
class TodoStore extends EventEmitter {
    constructor() {
        super();
        this.todos = [
            {
                id: 111123213124,
                text: 'Go Swimming',
                complete: false
            },
            {
                id: 4343423213124,
                text: 'Play Chess',
               complete: true
            }
        ]
    }
    getAll() {
        return this.todos;
    }
    createTodo(text) {
        const id = Date.now();
        this.todos.push({
            id,
            text,
            complete: false
        });
        // publish an event - raise an event
        this.emit('change'); // raising a change event
        console.log(this.todos);
    }
    // Callback Function registered with dispatcher
    handleActions(action) {
        console.log('TodoStore receved an action ', action);
        switch (action.type) {
            case 'CREATE_TODO':
                this.createTodo(action.text);
                break;
            case 'RECEIVE_TODOS':
                this.todos = action.todos;
                this.emit('change'); // raising a change event
                break;
            default:
                console.log('default case!')
                break;
        }
    }
}
//2
const todoStore = new TodoStore();
// Exposing todoStore object to the brower's window
// window.todoStore = todoStore;
// todoStore.createTodo('Watch Movie');
// dispatcher
dispatcher.register(todoStore.handleActions.bind(todoStore));
// Exposing dispatcher object to the browser's window
//window.dispatcher = dispatcher;
// dispatcher.dispatch({type:'CREATE_TODO',text:'Watch Movie'});
export default todoStore;