import { fireEvent, render, screen } from '@testing-library/react';
import { ITodo } from '../../../types/types';
import TodoItem from '..';

describe('TodoItem', () => {
    const mockToggleCompleteTodo = jest.fn();
    const mockData: ITodo = {id: 0, text: 'Test Todo', completed: false}

    test('todo-item render test', () => {
        render(<TodoItem data={mockData} toggleCompleteTodo={mockToggleCompleteTodo}/>);
        expect(screen.getByTestId('todo-item')).toBeInTheDocument();
    });

    test('todo-item toggle button click test', () => {
        render(<TodoItem data={mockData} toggleCompleteTodo={mockToggleCompleteTodo}/>);
        fireEvent.click(screen.getByTestId('toggle-btn'));
        expect(mockToggleCompleteTodo).toHaveBeenCalledTimes(1);
    });
});