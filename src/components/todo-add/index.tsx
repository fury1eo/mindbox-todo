import { FC, useState } from 'react';
import styles from './styles.module.scss';
import { AiOutlineDown } from 'react-icons/ai';

interface TodoAddProps {
    addTodo: (text: string) => void
}

const TodoAdd: FC<TodoAddProps> = ({ addTodo }) => {
    const [text, setText] = useState<string>('');

    const onAdd = () => {
        if (text) {
            addTodo(text);
            setText('');
        }
    }

    return (
        <div className={styles.add}>
            <div data-testid='add-btn' onClick={onAdd} className={styles.add_btn}><AiOutlineDown/></div>
            <input data-testid='add-input' value={text} onChange={e => setText(e.target.value)} type="text" placeholder='What needs to be done?'/>
        </div>
    );
};

export default TodoAdd;