import { Component, computed, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TodoService } from "../shared/data-access/todo.service";
import { toSignal } from "@angular/core/rxjs-interop"

@Component({
    standalone: true,
    selector: 'app-detail',
    template: `
    @if (todo(); as todo){
        <h2>{{ todo.title }}</h2>
        <p>{{ todo.description }}</p>
    } @else {
        <p>Could not find todo...</p>
    }
    `,
})


export default class DetailComponent{
    private route = inject(ActivatedRoute);
    private TodoService = inject(TodoService);

    private paramMap = toSignal(this.route.paramMap);

    todo = computed(() =>
        this.TodoService
            .todos()
            .find((todo) => todo.id === this.paramMap()?.get('id'))
    );
}