import { Component, inject } from "@angular/core";
import { TodoFormComonent } from "./ui/todo-form.component";
import { TodoService } from "../shared/data-access/todo.service";
import { TodoListComponent } from "./ui/todo-list.component";

@Component({
    standalone: true,
    selector: 'app-home',
    template: `<h1>ToDo</h1>
    <app-todo-form (todoSubmitted)="todoService.addTodo($event)"/>
    <app-todo-list [todos]="todoService.todos()"/>
    `,
    imports: [TodoFormComonent, TodoListComponent]
})

//Here we use default to export the component. We use that for smart/ routed components that we supply to the router display
export default class HomeComponent {
    todoService = inject(TodoService);
}