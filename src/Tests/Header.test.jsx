import React from 'react';
import { render } from '@testing-library/react';
import Header from '../Components/Header';

test('debería mostrar el título correctamente', () => {
  const title = 'Título de prueba';

  const { getByText } = render(<Header title={title} />);

  const titleElement = getByText(title);
  expect(titleElement).toBeInTheDocument();
});
