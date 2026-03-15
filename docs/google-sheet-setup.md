# Запись заявок в Google Таблицу

Форма «Оставьте заявку» отправляет данные на API сайта, который пересылает их в Google Таблицу через веб-приложение Apps Script.

## Шаг 1. Создать таблицу и скрипт

1. Создайте новую [Google Таблицу](https://sheets.google.com).
2. В меню: **Расширения** → **Apps Script**.
3. Удалите содержимое файла `Code.gs` и вставьте код ниже.

## Код Apps Script

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    if (sheet.getLastRow() === 0) {
      sheet.getRange(1, 1, 1, 4).setValues([["Дата", "Имя", "Телефон или Email", "Сообщение"]]);
    }
    const body = e.postData ? JSON.parse(e.postData.contents) : {};
    sheet.appendRow([
      new Date(),
      body.name || "",
      body.contact || "",
      body.message || "",
    ]);
    return ContentService.createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ ok: false, error: String(err) })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Сохраните проект (Ctrl+S), дайте ему имя, например «Заявки с сайта».

## Шаг 2. Развернуть как веб-приложение

1. В Apps Script нажмите **Развернуть** → **Новое развертывание**.
2. Тип: **Веб-приложение**.
3. **Описание**: например «Приём заявок».
4. **Запуск от имени**: ваш аккаунт.
5. **У кого есть доступ**: **Все пользователи** (иначе запросы с сайта будут блокироваться).
6. Нажмите **Развернуть**, подтвердите доступ при первом развертывании.
7. Скопируйте **URL веб-приложения** (вид: `https://script.google.com/macros/s/.../exec`).

## Шаг 3. Настроить проект

1. В корне проекта создайте файл `.env.local` (он не коммитится).
2. Добавьте строку:

```
GOOGLE_SCRIPT_WEB_APP_URL=https://script.google.com/macros/s/ВАШ_ID/exec
```

Подставьте скопированный URL вместо `https://script.google.com/macros/s/ВАШ_ID/exec`.

3. Перезапустите dev-сервер (`npm run dev`).

После этого при нажатии «Отправить заявку» данные будут сохраняться в вашей Google Таблице.
