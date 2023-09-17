import { fireEvent, render, screen } from '@testing-library/react';
import TodoClear from '..';

describe('TodoClear', () => {
    const mockDeleteCompletedTodos = jest.fn();
    const mockChildren = 'Clear completed';

    test('todo-clear render test', () => {
        render(
            <TodoClear deleteCompletedTodos={mockDeleteCompletedTodos}>
                {mockChildren}
            </TodoClear>
        );
        expect(screen.getByTestId('clear-btn')).toBeInTheDocument();
    });

    test('todo-clear clear button test', () => {
        render(
            <TodoClear deleteCompletedTodos={mockDeleteCompletedTodos}>
                {mockChildren}
            </TodoClear>
        );
        fireEvent.click(screen.getByTestId('clear-btn'));
        expect(mockDeleteCompletedTodos).toHaveBeenCalledTimes(1);
    });
});