import { Database } from "@vuex-orm/core";
import Todo from "@/models/Todo";
import TodoList from "@/models/TodoList";

const database = new Database();

database.register(TodoList);
database.register(Todo);

export default database;
