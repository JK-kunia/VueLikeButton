(function() {
  'use strict';

  var likeComponent = Vue.extend({
    props: {          //カスタム属性を受け取る(HTMLのmessage)
      message: {
        type: String,
        default: 'いいね'
      }
    },
    data: function() { //値を持たせる Componentsのdataは関数で返してあげる
      return {
        count: 0
      }
    },
    template: '<button @click="countUp">{{ message }} {{ count }}</button>', //クリックするたびcountUpを呼び出す
    methods: {
      countUp: function() {
        this.count++;
        this.$emit('increment');  //componentのcountが増えたときにincrementというカスタムイベントが発火
      }
    }
  });

  var app = new Vue({
    el: '#app',
    components: {                     //componentsを使うよ
      'like-component': likeComponent //中身はlikeComponentsというオブジェクトだよ
    },
    data: {     //dataでtotalを保持
      total: 0
    },
    methods: {
      incrementTotal: function() {
        this.total++;
      }
    }
  });

})();
