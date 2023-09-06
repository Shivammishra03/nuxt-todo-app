export const state = () => ({
    tasks: []
})

export const mutations = {
    ADD_TASK(state, task) {
        state.tasks = [{content:task, done: false}, ...state.tasks]
    },
    Remove_Task(state, task) {
        state.tasks.splice(state.tasks.indexOf(task),1);
    },
    Toggle_Task(state, task) {
        task.done = !task.done
    }
}