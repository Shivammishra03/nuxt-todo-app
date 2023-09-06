<template>
    <div :class="`task ${task.done ? 'is-complete': ''}`">
        <div class="content">{{ task.content }}</div>
        <div class="button">
            <button @click="toggleTask">{{ task.done ? 'Undo' : 'Done'}}</button>
            <button @click="removeTask" class="delete">Delete</button>
        </div>
    </div>
</template>

<script>
export default {
    props: ['task'],
    methods: {
        toggleTask() {
            this.$store.commit('Toggle_Task', this.task);
        },
        removeTask() {
            this.$store.commit('Remove_Task', this.task)
        }
    }
}
</script>

<style lang="scss" scoped>

</style>