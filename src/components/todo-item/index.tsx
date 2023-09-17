import { FC } from 'react';
import { ITodo } from '../../types/types';
import styles from './styles.module.scss';
import { AiOutlineCheck } from 'react-icons/ai'

interface TodoItemProps {
    data: ITodo,
    toggleCompleteTodo: (id: number) => void
}

const TodoItem: FC<TodoItemProps> = ({ data, toggleCompleteTodo }) => {
    return (
        <div data-testid='todo-item' className={styles.todo_item}>
            <div
                data-testid='toggle-btn'
                onClick={() => toggleCompleteTodo(data.id)}
                style={data.completed ? {borderColor: '#18aa23'} : {}} 
                className={styles.completed}>
                    {data.completed ? <AiOutlineCheck/> : null}
            </div>
            <div 
                style={data.completed ? {textDecoration: 'line-through', color: '#aaa'} : {}} 
                className={styles.title}>
                    {data.text}
            </div>
        </div>
    );
};

export default TodoItem;