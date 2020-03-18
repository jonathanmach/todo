<template lang="pug">
.flex
  .navmenu.flex.flex-col.min-h-screen
    .flex.px-4.items-center
      span.text-3xl 🧑🏽
      .pl-3.text-sm
        p Jonathan
        p.text-xs machadofjonathan@gmail.com
    hr.my-2
    ul.menu.flex-grow
      li 📥 Inbox
      li ⭐ Important
      li 📆 Calendar
      li 🏠 Tasks
      hr.my-2
      li 🎓 Studying
      li 👔 Work
      li 💡 Dev blog
      li(v-for="list in todoListArray" v-bind:key="list.id", contenteditable="true") {{list.title}}
    
    //- Add new TodoList
    .flex-grow-0.border.justify-between.h-12.flex.items-center.px-4
      .span.text-sm.cursor-pointer(@click="addNewList()") ➕ New list
      .span.text-sm.cursor-pointer +🎯
      
  
  .main-content

    .header
      span(contenteditable="true").text-2xl.font-semibold.flex-grow.text-left 🏃‍♂️ Health
      .actions-wrapper
        .header-action 💡
        .header-action 💬
    
    .list-grid
      .card(v-for="todo in todoArray" v-bind:key="todo.id")
        input.mr-4(type="radio")
        span.flex-grow.text-left.outline-none(contenteditable="true") {{todo.title}}
        span.star.opacity-25 ⭐

    //- @todo - Add a Fab on mobile instead of showing the New Task dialog by default
    //- .fab(@click="showNewTaskDialog = !showNewTaskDialog").absolute.bottom-0.right-0.m-8
    //-   .h-12.w-12.bg-white.rounded-full.flex.items-center
    //-     span.mx-auto +

    .new-task.pb-4.flex-grow-0.opacity-75
      .rounded.bg-gray-200.shadow.flex.items-center.p-4
        span.mr-4 ➕
        input(placeholder="Add a task", v-model="newTask", v-on:keyup.enter="test").flex-grow.text-left.bg-transparent.outline-none

</template>

<script>
// @ is an alias to /src
import TodoList from "@/models/TodoList";
import Todo from "@/models/Todo";

export default {
  name: "Home",
  components: {},
  methods: {
    test() {
      const fakeTodo = { title: this.newTask, list: 2 };
      Todo.insert({ data: fakeTodo });
      this.newTask = null;
    },
    addNewList() {
      const fakeList = { title: "🤸‍♂️ Untitled" };
      TodoList.insert({ data: fakeList });
    }
  },
  computed: {
    todoArray() {
      return Todo.all()
    },
    todoListArray(){
      return TodoList.all()
    }
  },
  data() {
    return {
      newTask: null,
      showNewTaskDialog: false,
    };
  }
};
</script>

<style>
ul.menu li {
  @apply pb-4 py-3 pl-4;
}
ul.menu li:hover {
  @apply bg-gray-200;
}
.navmenu {
  @apply w-64 h-full pt-4 text-left hidden;
}
@screen md {
  .navmenu {
    @apply block;
  }
  .fab {
    @apply invisible;
  }
}

.main-content {
  @apply bg-gray-200 flex flex-col h-screen bg-red-500 flex-grow p-4 px-8;
}
.header {
  @apply flex justify-between text-white py-6;
}
.actions-wrapper {
  @apply text-center flex justify-center items-center;
}
.header-action {
  @apply bg-red-400 rounded cursor-pointer text-xl w-10 h-auto py-1 ml-3;
}
.list-grid {
  @apply flex flex-col h-full flex-grow;
}
.card {
  @apply rounded bg-white shadow flex items-center p-4 mb-1 cursor-pointer;
}
.card:hover {
  @apply shadow-xl bg-gray-200;
}
.star {
  cursor: pointer;
}
.star:hover {
  @apply opacity-100;
}
</style>
