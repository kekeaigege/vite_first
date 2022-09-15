<!--
 * @Author: wangxue 3208230974@qq.com
 * @Date: 2022-09-14 10:32:31
 * @LastEditors: wangxue 3208230974@qq.com
 * @LastEditTime: 2022-09-14 10:37:51
 * @FilePath: \vite\item_vite\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AEh
-->
<template>
  <div class="container">
    <div class="task">
      <TodoInput @add="onAddNewTask" class="top-con"></TodoInput>
      <TodoList :list="tasklist" class="todoList"></TodoList>
      <hr />

      <TodoButton class="todoList" v-model:active="indexTodo"></TodoButton>
    </div>
  </div>
</template>

<script>
import TodoList from "./components/TodoList.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoButton from "./components/TodoBtn.vue";
export default {
  name: "MyApp",
  data() {
    return {
      todolist: [
        { id: 1, task: "周一开会", done: false },
        { id: 2, task: "周二聚会", done: true },
        { id: 3, task: "周二演讲", done: false },
      ],
      nextId: 4,
      indexTodo: 0,
    };
  },
  methods: {
    onAddNewTask(v) {
      console.log(v);
      this.todolist.push({ id: this.nextId, task: v, done: false });
      this.nextId++;
    },
  },
  components: {
    TodoList,
    TodoInput,
    TodoButton,
  },
  computed: {
    tasklist() {
      switch (this.indexTodo) {
        case 0:
          return this.todolist;
        case 1:
          return this.todolist.filter((x) => x.done === true);
        case 2:
          return this.todolist.filter((x) => x.done !== true);
      }
    },
  },
};
</script>
<style lang="less" scoped>
h2 {
  i {
    color: red;
    font-size: 17px;
  }
}
.task {
  border-radius: 12px;
  padding-top: 50px;
  width: 500px;
  height: 600px;
  margin: 0 auto;
  background-color: rgb(245, 198, 239);
}
.container {
  padding: 0;
  margin: 0 auto;
}
.todoList {
  margin: 0 auto;
}
.top-con {
  margin-bottom: 30px;
}
</style>
