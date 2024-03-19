import dispatcher from "../dispatcher";
export function createTodoActionCreator(text){
    // dispatcher.dispatch({type:'CREATE_TODO',text});
    dispatcher.dispatch({type:'CREATE_TODO',text});
}
export function reloadTodosActionCreator(){
    // simulating AJAX
    dispatcher.dispatch({type:'FETCH_TODOS'});
    setTimeout(()=>{
        dispatcher.dispatch({
            type: 'RECEIVE_TODOS',
            todos: [
                {
                    id: 8484848484,
                    name: "jancy",
                    email: jancy@gmail.com
                },
                {
                    id: 6262627272,
                    name: "fancy",
                    email: fancy@gmail.com
                },
                {
                    id: 9982388388,
                    name: "nancy",
                    email: nancy@gmail.com
                },
                {
                    id: 78273882823,
                    name: "vani",
                    email: vani@gmail.com
                },
            ]
        })
    },1000);
}