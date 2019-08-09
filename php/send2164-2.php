<?php
// Файлы phpmailer
require 'class.phpmailer.php';
require 'class.smtp.php';

$name = $_POST['name'];
$number = $_POST['number'];
$email = $_POST['email'];
//$message = $_POST['message'];

// Настройки
$mail = new PHPMailer;
$mail->CharSet = 'UTF-8';

$mail->isSMTP(); 
$mail->Host = 'smtp.yandex.ru';  
$mail->SMTPAuth = true;                      
$mail->Username = 'navigard1'; // Ваш логин в Яндексе. Именно логин, без @yandex.ru
$mail->Password = 'Maraha234'; // Ваш пароль
$mail->SMTPSecure = 'ssl';                            
$mail->Port = 465;
$mail->setFrom('navigard1@yandex.ru'); // Ваш Email
$mail->addAddress('zilincorp@mail.ru'); // Email получателя
//$mail->addAddress('zilincorp@mail.ru'); // Еще один email, если нужно.

//// Прикрепление файлов
//  for ($ct = 0; $ct < count($_FILES['userfile']['tmp_name']); $ct++) {
//        $uploadfile = tempnam(sys_get_temp_dir(), sha1($_FILES['userfile']['name'][$ct]));
//        $filename = $_FILES['userfile']['name'][$ct];
//        if (move_uploaded_file($_FILES['userfile']['tmp_name'][$ct], $uploadfile)) {
//            $mail->addAttachment($uploadfile, $filename);
//        } else {
//            $msg .= 'Failed to move file to ' . $uploadfile;
//        }
//    }
//                                 
// Письмо
$mail->isHTML(true); 
$mail->Subject = "Новый заказ на 2164 с сайта 999-911.рф"; // Заголовок письма
$mail->Body    = "<strong>Новый заказ на 2164 с сайта 999-911.рф</strong> <br> Форма под характеристиками <br> Имя: $name <br> Телефон: $number <br> Почта: $email"; // Message

// Результат
if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'ok';
}
?>