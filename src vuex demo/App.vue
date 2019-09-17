<template>
  <div>
      <p>click {{count}} times count is{{eventOrOdd}}</p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
      <button @click="incrementIfOdd">increment if add</button>
      <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script type="text/ecmascript-6">
 import {mapState,mapGetters,mapMutations,mapActions} from "vuex";
  export default {
    computed:{
        ...mapState(['count']),
        ...mapGetters(['eventOrOdd'])
     }, 
     methods:{
      //  increment(){
      //    this.$store.commit('INCREMENT')
      //  },
      //  decrement(){
      //   this.$store.commit('DECREMENT')
      //  },
      //  //触发actions调用
      //  incrementIfOdd(){
         
      //     this.$store.dispatch('incrementIfOdd')
      //  }, 
      //  incrementAsync(){
      //      this.$store.dispatch('incrementAsync')
      //  }
      //方法和属性名一致
      ...mapActions(['incrementIfOdd','incrementAsync']),
      //方法和属性名不一致
      ...mapMutations({
         increment:'INCREMENT',
         decrement:'DECREMENT'
      })
     }
  }
</script>

<style scoped>

 
</style>
