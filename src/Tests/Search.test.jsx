import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Search from '../Components/Search';

test('debería llamar a la función onSearch al cambiar el texto', () => {
  // Definir una función de simulación para onSearch
  const onSearch = jest.fn();

  // Renderizar el componente Search y proporcionar la función de simulación onSearch
  const { getByPlaceholderText } = render(<Search onSearch={onSearch} />);

  // Obtener el campo de entrada por su marcador de posición
  const input = getByPlaceholderText('Buscar provincias...');

  // Simular un cambio en el valor del campo de entrada
  fireEvent.change(input, { target: { value: 'Buenos Aires' } });

  // Verificar si la función onSearch se llamó con el valor correcto
  expect(onSearch).toHaveBeenCalledWith('Buenos Aires');
});
