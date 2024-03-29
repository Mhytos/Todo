import { Component, EventEmitter, Output, inject } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { CreateTodo } from "../../shared/interfaces/todo";

@Component({
    standalone: true,
    selector: 'app-todo-form',
    template: `
    <form [formGroup]="todoForm"
        (ngSubmit)="todoSubmitted.emit(todoForm.getRawValue())"
    >
        <input type="text" formControlName="title" placeholder="title..."/>
        <input
            type="text"
            formControlName="description"
            placeholder="description..."
        />
        <button [disabled]="!todoForm.valid" type="submit">Add todo</button>
    </form>
    `,
    imports: [ReactiveFormsModule],
})

export class TodoFormComonent {
    @Output() todoSubmitted = new EventEmitter<CreateTodo>();

    private fb = inject(FormBuilder);

    //nonNullable dissalows inputs that are undefined/ null
    todoForm = this.fb.nonNullable.group({
        title: ['', Validators.required],
        description: ['']
    });
}