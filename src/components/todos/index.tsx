import { FC, useEffect, useState } from 'react';
import { ITodo } from '../../types/types';
import styles from './styles.module.scss';
import TodoItem from '../todo-item';
import TodoAdd from '../todo-add';
import TodoFilters from '../todo-filters';
import TodoClear from '../todo-clear';

interface TodosProps {
    data: ITodo[],
    setData: (data: ITodo[]) => void
}

const filters = ['All', 'Active', 'Completed'];

const Todos: FC<TodosProps> = ({ data, setData }) => {
    const [filteredData, setFilteredData] = useState<ITodo[]>(data);
    const [activeFilter, setActiveFilter] = useState<number>(0);
    const [id, setId] = useState<number>(0);

    useEffect(() => {
        filterTodo();
    }, [data, activeFilter])

    const filterTodo = () => {
        if (activeFilter === 0) {
            setFilteredData(data)
        } else if (activeFilter === 1) {
            setFilteredData(data.filter(todo => !todo.completed))
        } else if (activeFilter === 2) {
            setFilteredData(data.filter(todo => todo.completed))
        }
    }

    const toggleCompleteTodo = (id: number) => {
        setData(data.map(todo => {
          if (todo.id === id) todo.completed = !todo.completed;
          return todo;
        }))
      }
    
      const addTodo = (text: string) => {
        setData([...data, {id: id, text: text, completed: false}]);
        setId(id+1)
      }
    
      const deleteCompletedTodos = () => {
        setData(data.filter(todo => !todo.completed))
      }

    return (
        <div data-testid='todos' className={styles.todos}>
            <div className={styles.title}>todos</div>
            <div className={styles.todos_block}>
                <TodoAdd addTodo={addTodo}/>
                <div className={styles.todos_list}>
                    {filteredData.length > 0
                        ? filteredData.map(todo => <TodoItem key={todo.id} data={todo} toggleCompleteTodo={toggleCompleteTodo}/>)
                        : <div className={styles.nothing}>No tasks</div>
                    }
                </div>
                <div className={styles.info}>
                    <div className={styles.count}>{data.filter(todo => !todo.completed).length} tasks left</div>
                    <TodoFilters filters={filters} setActiveFilter={setActiveFilter} activeFilter={activeFilter}/>
                    <TodoClear deleteCompletedTodos={deleteCompletedTodos}>Clear completed</TodoClear>
                </div>
            </div>
        </div>
    );
};

export default Todos;