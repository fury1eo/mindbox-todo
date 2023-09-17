import { fireEvent, render, screen } from '@testing-library/react';
import TodoFilters from '..';

describe('TodoFilters', () => {
    const mockActiveFilter = 0;
    const mockFilters = ['All', 'Active', 'Completed'];
    const mockSetActiveFilter = jest.fn();

    test('todo-filters render test', () => {
        render(
            <TodoFilters 
                filters={mockFilters} 
                setActiveFilter={mockSetActiveFilter} 
                activeFilter={mockActiveFilter}
            />
        );
        expect(screen.getByTestId('filters')).toBeInTheDocument();
    });

    test('todo-filters filter buttons test', () => {
        render(
            <TodoFilters 
                filters={mockFilters} 
                setActiveFilter={mockSetActiveFilter} 
                activeFilter={mockActiveFilter}
            />
        );
        fireEvent.click(screen.getAllByTestId('filter-btn')[0]);
        fireEvent.click(screen.getAllByTestId('filter-btn')[1]);
        fireEvent.click(screen.getAllByTestId('filter-btn')[2]);
        expect(mockSetActiveFilter).toHaveBeenCalledTimes(3);
    });
});