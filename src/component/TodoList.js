import {useRecoilValue} from 'recoil';

import filteredTodoListState from '../selector/filteredTodoList';

import TodoItemCreator from './TodoItemCreator';
import TodoItem from './TodoItem';
import TodoListStats from './TodoListStats';
import TodoListFilters from './TodoListFilters';



function TodoList() {
    const todoList = useRecoilValue(filteredTodoListState);

    return (
        <> 
            <TodoListStats />
            <TodoListFilters />
            <TodoItemCreator />

            {todoList.map((todoItem, index) => (
                <TodoItem key={todoItem.id} item={todoItem} index={index} />
            ))}
        </>
    );
}

export default TodoList;