<?php
// Перевірка наявності параметра запиту
if (isset($_GET['query'])) {
    $query = htmlspecialchars($_GET['query']); // Захист від XSS-атак

    // Імітація пошуку в базі даних (в реальній ситуації тут треба запит до БД)
    $results = [];
    // Приклад результатів пошуку (можна замінити на реальний запит до БД)
    $sample_data = ['Пошук 1', 'Пошук 2', 'Пошук 3'];

    foreach ($sample_data as $item) {
        if (stripos($item, $query) !== false) { // Якщо запит знайдено в елементі
            $results[] = $item;
        }
    }

    // Якщо є результати
    if (!empty($results)) {
        foreach ($results as $result) {
            echo "<div class='search-result'>$result</div>";
        }
    } else {
        echo "Нічого не знайдено.";
    }
}
?>
<?php
// Тут можуть бути змінні для перевірки логіну чи реєстрації
$loginMessage = '';
$registerMessage = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Авторизація (login)
    if (isset($_POST['login'])) {
        // Тут перевірка даних для входу
        $username = $_POST['username'];
        $password = $_POST['password'];

        // Простий приклад перевірки
        if ($username == 'admin' && $password == 'password123') {
            $loginMessage = 'Вітаємо, ви успішно увійшли!';
        } else {
            $loginMessage = 'Невірний логін або пароль.';
        }
    }

    // Реєстрація (register)
    if (isset($_POST['register'])) {
        // Отримуємо дані з форми реєстрації
        $newUsername = $_POST['newUsername'];
        $newPassword = $_POST['newPassword'];

        // Простий приклад реєстрації (можна додати перевірки та збереження в БД)
        if (!empty($newUsername) && !empty($newPassword)) {
            // Тут можна додати код для збереження користувача в базу даних
            $registerMessage = 'Вітаємо, ви успішно зареєстровані!';
        } else {
            $registerMessage = 'Будь ласка, заповніть усі поля.';
        }
    }
}
?>