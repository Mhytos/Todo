import { Injectable, signal } from "@angular/core";
import { CreateTodo, Todo } from "../interfaces/todo";

@Injectable({
    providedIn: 'root',
})

export class TodoService {
    //we only want this calss to update the signel (# makes it private)
    #todos = signal<Todo[]>([]);


    //where as this can be read publicly
    todos = this.#todos.asReadonly();

//Updating the addTodo to work with createTodo 
    addTodo(todo: CreateTodo) {
        this.#todos.update((todos) => [
            ...todos,
            {...todo, id: Date.now().toString()},
        ]);
    }
}