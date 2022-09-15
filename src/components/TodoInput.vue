<template>
  <div>
    <form class="form-inline" @submit.prevent="onFromSubmit">
      <div class="form-group">
        <label class="sr-only" for="exampleInputAmount"
          >Amount (in dollars)</label
        >
        <div class="input-group">
          <div class="input-group-addon">任务</div>
          <input
            type="text"
            class="form-control"
            placeholder="情输入要添加的任务"
            v-model.trim="taskname"
          />
        </div>
      </div>
      <button type="submit" class="btn btn-default">添加任务</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "TodoInput",
  emits:["add"],
  data() {
    return {
      taskname: "",
    };
  },
  methods: {
    onFromSubmit() {
        if(!this.taskname) return alert('任务不能为空');
        this.$emit("add",this.taskname)
        this.taskname = ''
    },
  },
};
</script>
<style lang="less" scoped></style>
