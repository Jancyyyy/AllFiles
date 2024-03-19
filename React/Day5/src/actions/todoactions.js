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
                    text: "Do Warm up",
                    complete: false
                },
                {
                    id: 6262627272,
                    text: "Play Football",
                    complete: true
                },
                {
                    id: 9982388388,
                    text: "Run 10km",
                    complete: false
                },
                {
                    id: 78273882823,
                    text: "Go to Gym",
                    complete: true
                },
            ]
        })
    },1000);
}