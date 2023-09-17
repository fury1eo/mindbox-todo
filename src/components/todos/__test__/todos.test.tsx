import { render, screen } from '@testing-library/react';
import { ITodo } from '../../../types/types';
import Todos from '..';

describe('Todos', () => {
    const mockSetData = jest.fn();
    const mockData: ITodo[] = [{id: 0, text: 'Test Todo', completed: false}]

    test('todos render test', () => {
        render(
            <Todos 
                data={mockData} 
                setData={mockSetData}
            />
        );
        expect(screen.getByTestId('todos')).toBeInTheDocument();
    });
});