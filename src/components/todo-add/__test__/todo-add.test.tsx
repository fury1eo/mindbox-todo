import { fireEvent, render, screen } from '@testing-library/react';
import TodoAdd from '..';

describe('TodoAdd', () => {
    const mockAddTodo = jest.fn();

    test('todo-add render test', () => {
        render(<TodoAdd addTodo={mockAddTodo}/>);
        expect(screen.getByTestId('add-input')).toBeInTheDocument();
    });

    test('todo-add input state value test', () => {
        render(<TodoAdd addTodo={mockAddTodo}/>);
        fireEvent.input(screen.getByTestId('add-input'), 
            { target: {value: 'Test text'} 
        });
        expect(screen.getByTestId('add-input')).toContainHTML('Test text');
    });

    test('todo-add have empty input when button is clicked test', () => {
        render(<TodoAdd addTodo={mockAddTodo}/>);
        fireEvent.input(screen.getByTestId('add-input'), 
            { target: {value: 'Test text'} 
        });
        fireEvent.click(screen.getByTestId('add-btn'));
        expect(screen.getByTestId('add-input')).toContainHTML('');
    });

    test('todo-add button click test', () => {
        render(<TodoAdd addTodo={mockAddTodo}/>);
        fireEvent.input(screen.getByTestId('add-input'), 
            { target: {value: 'Test todo'} 
        });
        fireEvent.click(screen.getByTestId('add-btn'));
        expect(mockAddTodo).toHaveBeenCalledTimes(1);
    });
});