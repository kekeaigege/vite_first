<template>
  <div class="listContainer">
    <ul class="list-group">
      <li class="list-group-item list-li" v-for="item in list" :key="item.id">
        <label class="checkbox-inline" :class="item.done ? 'del' : '' ">
          <input type="checkbox" id="inlineCheckbox1" value="option1" v-model="item.done"/>
          {{ item.task }}
        </label>
        <span class="badge succcess badge-pill" v-if="item.done">完成</span>
        <span class="badge warning badge-pill" v-else>未完成</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    list: {
      type: Array,
      required: true,
      default: [],
    },
  },
  name: "TodoList",
  data() {
    return {};
  },
};
</script>
<style scoped>
.succcess {
  background-color: rgb(35, 153, 63);
  width: 50px;
}
.warning {
  width: 50px;
  background-color: #f2c230;
}
.listContainer {
  width: 400px;
}
.list-li {
  display: flex;
  justify-content: space-between;
}
.del{
    text-decoration: line-through;
    color: grey;
    font-style: italic;
}
</style>
