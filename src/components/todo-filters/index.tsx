import styles from './styles.module.scss';
import { FC } from 'react';

interface TodoFiltersProps {
    filters: string[],
    setActiveFilter: (id: number) => void,
    activeFilter: number
}

const TodoFilters: FC<TodoFiltersProps> = ({ filters, setActiveFilter, activeFilter }) => {
    return (
        <div data-testid='filters' className={styles.filters}>
            {filters.map((filter, i) => 
                <div 
                    data-testid='filter-btn'
                    key={i}
                    onClick={() => setActiveFilter(i)} 
                    className={`${styles.filter} ${activeFilter === i ? styles.active : ''}`}>
                        {filter}
                </div>
            )}
        </div>
    );
};

export default TodoFilters;