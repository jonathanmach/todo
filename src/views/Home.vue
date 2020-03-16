<template lang="pug">
.flex
  .navmenu
    ul.menu
      li 📥 Inbox
      li ⭐ Important
      li 📆 Calendar
      li 🏠 Tasks
      hr.my-2
  
  .main-content

    .header
      span(contenteditable="true").text-2xl.font-semibold 🏃‍♂️ Health
      .text-center.flex.justify-center.items-center
        div.bg-red-400.rounded.cursor-pointer.text-xl.w-10.h-auto.py-1.ml-3 💡
        div.bg-red-400.rounded.cursor-pointer.text-xl.w-10.h-auto.py-1.ml-3 💬
    
    .list-grid
      .card(v-for="todo in todoList" v-bind:key="todo.id")
        input.mr-4(type="radio")
        span.flex-grow.text-left {{todo.title}}
        span.star.opacity-25 ⭐

    .p-4.flex-grow-0.opacity-75
      .rounded.bg-gray-200.shadow.flex.items-center.p-4.mb-1
        span.mr-4 +
        input(placeholder="Add a task", v-model="newTask", v-on:keyup.enter="test").flex-grow.text-left

</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  methods: {
    test() {
      this.todoList.push({ title: this.newTask, id: 2 });
      this.newTask = null;
    }
  },
  data() {
    return {
      newTask: null,
      todoList: [
        { title: "Bike ride", id: 1 },
        { title: "Gym @ the morning", id: 1 }
      ]
    };
  }
};
</script>

<style >
ul.menu li {
  @apply pb-4 py-3 pl-4;
}
ul.menu li:hover {
  @apply bg-gray-200;
}
.navmenu {
  @apply w-64 h-full pt-10 text-left hidden;
}
@screen md {
  .navmenu {
    @apply block;
  }
}
.main-content {
  @apply bg-gray-200 flex flex-col h-screen bg-red-500 flex-grow p-4 px-10;
}
.header {
  @apply flex justify-between text-white py-6;
}
.list-grid {
  @apply flex flex-col h-full flex-grow;
}
.card {
  @apply rounded bg-white shadow flex items-center p-4 mb-1;
}
.star {
  cursor: pointer;
}
.star:hover {
  @apply opacity-100;
}
</style>
