export interface Todo {
    id: string;
    title: string;
    description: string;
}
//essentially we created a new type called Todo, that needs to have a title and a description, both of them being a string (now we added the id aswell)
//The Point now is that we dont wanna manually supply an id for each Todo, but we need the id to be there or else Angular is gonna shout at us
//Thats why we can use the following
export type CreateTodo = Omit<Todo, 'id'>;
//type CreateTodo accepts input without a given id property