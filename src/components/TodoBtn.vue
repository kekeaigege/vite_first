<template>
  <div class="btn-contatner">
    <div class="btn-group" role="group" aria-label="...">
      <button type="button" class="btn" :class="active === 0 ?'btn-primary':'btn-default'" @click="btnFn(0)">全部</button>
      <button type="button" class="btn" :class="active === 1 ?'btn-primary':'btn-default'"  @click="btnFn(1)">已完成</button>
      <button type="button" class="btn btn-default" :class="active === 2 ?'btn-primary':'btn-default'"  @click="btnFn(2)">未完成</button>
    </div>
  </div>
</template>
<script>
export default {
    name:"TodoListBtn",
    props: {
        active:{
            type:Number,
            required:true,
            default:0
        }
    },
    emits:["update:active"],
    methods:{
        btnFn(index){
            console.log(index)
            if(index === this.active){
                return;
            }else{
                this.$emit("update:active",index)
            }
        }
    }
};
</script>
<style lang="less" scoped>
.btn-contatner{
    margin-top: 30px;
    width: 400px;
}
</style>
