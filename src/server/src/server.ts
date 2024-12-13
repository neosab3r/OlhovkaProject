// Импортируем модуль express и типы Request и Response
import express, { Request, Response } from 'express';

// Создаем экземпляр приложения express
const app = express();

// Определяем порт, на котором будет работать сервер
const port = 3000;

// Определяем маршрут для корневого URL
app.get('/', (req: Request, res: Response) => {
    // Отправляем ответ с сообщением "Hello, World!"
    res.send('Hello, World!');
});

// Запускаем сервер и слушаем на определенном порту
app.listen(port, () => {
    // Логируем сообщение о запуске сервера
    console.log(`Server is running on http://localhost:${port}`);
});


// Запустить серв:
//     npm run server:start