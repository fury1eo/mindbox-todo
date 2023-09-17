import styles from './styles.module.scss';
import { FC } from 'react';

interface TodoClearProps {
    children: string,
    deleteCompletedTodos: () => void
}

const TodoClear: FC<TodoClearProps> = ({ children, deleteCompletedTodos }) => {
    return (
        <div data-testid='clear-btn' onClick={deleteCompletedTodos} className={styles.clear_btn}>
            {children}
        </div>
    );
};

export default TodoClear;