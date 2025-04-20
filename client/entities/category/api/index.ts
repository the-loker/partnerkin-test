import type { ICategory } from '../model';

export const getCategories = async (): Promise<Array<ICategory>> => {
  return [
    { id: 1, name: 'Веб-дизайн' },
    { id: 2, name: 'Креативы' },
    { id: 3, name: 'WebView' },
    { id: 4, name: 'Лидогенерация' },
    { id: 5, name: 'Настройка трафика' },
    { id: 6, name: 'Создание семантического ядра' },
    { id: 7, name: 'Интеграция' },
    { id: 8, name: 'Лендинги' },
    { id: 9, name: 'Скрипты, парсеры, чат-боты' },
    { id: 10, name: 'Копирайтинг' },
  ];
};
