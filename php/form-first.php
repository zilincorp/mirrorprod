<?php
// Файлы phpmailer
require 'class.phpmailer.php';
require 'class.smtp.php';

$name = $_POST['lastname'];
$number = $_POST['phone'];
$email = $_POST['email'];

// Настройки
$mail = new PHPMailer;
$mail->CharSet = 'UTF-8';

$mail->isSMTP(); 
$mail->Host = 'smtp.yandex.ru';  
$mail->SMTPAuth = true;                      
$mail->Username = 'vladislav.mirror'; // Ваш логин в Яндексе. Именно логин, без @yandex.ru
$mail->Password = 'Mirrorproduction39'; // Ваш пароль
$mail->SMTPSecure = 'ssl';                            
$mail->Port = 465;
$mail->setFrom('vladislav.mirror@yandex.ru'); // Ваш Email
$mail->addAddress('mirrorprod@inbox.ru'); // Email получателя
//$mail->addAddress('dev@stark-media.ru'); // Еще один email, если нужно.

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
$mail->Subject = "Новый заказ с сайта mirrorprod.ru"; // Заголовок письма
$mail->Body    = "<strong>Новый заказ с сайта mirrorprod.ru</strong> <br> Форма под характеристиками <br> Имя: $name <br> Телефон: $number <br> Почта: $email"; // Message

// Результат
if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'ok';
}
?>
