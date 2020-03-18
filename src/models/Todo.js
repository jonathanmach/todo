import { Model } from "@vuex-orm/core";
import TodoList from "./TodoList";

export default class Todo extends Model {
  // This is the name used as module name of the Vuex Store.
  static entity = "todo";

  // List of all fields (schema) of the post model. `this.attr` is used
  // for the generic field type. The argument is the default value.
  static fields() {
    return {
      id: this.uid(),
      title: this.attr(""),
      done: this.attr(false),
      //   Relationships
      list: this.belongsTo(TodoList, "list_id")
    };
  }
}
