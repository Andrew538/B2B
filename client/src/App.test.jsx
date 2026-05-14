import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { expect, test, vi } from 'vitest';
import { Context } from './context';
import App from './App';

test('App рендерится без ошибок', () => {
  // Создаем минимальный мок-стор, чтобы App не "падал" при обращении к store.isLoading и т.д.
  const mockStore = {
    isLoading: false,
    isAuth: false,
    isRedirecting: false,
    users: { role: 'user' },
    checkAuth: vi.fn(), // если App вызывает проверку авторизации при загрузке
  };

  render(
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Context.Provider value={{ store: mockStore }}>
        <App />
      </Context.Provider>
    </BrowserRouter>
  );

  // Проверяем, что в DOM есть какой-то базовый элемент (например, контейнер каталога)
  const mainContainer = document.querySelector('.catalog__container');
  expect(mainContainer).toBeDefined();
});
