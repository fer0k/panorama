<?php
define('ROOT_PATH', '../');


$LANG_AR=Array(
	"project_name" => "Имя проекта",
	"form_name" => "Имя формы",
	"admin_email"=> "Почта админа",
	"form_subject"=> "Идентификатор формы",
	"name"=> "Имя",
	"phone"=> "Номер телефона",
	"email"=> "Эл. почта",
	"course"=>"Выбранный курс",
	"qust"=>"Вопросы",
	"message"=>"Сообщение",
	
);

$BODY_MAIL=
		'<table width="100%" cellpadding="15" cellspacing="0" border="1">';

//echo "<pre>";	print_r($_POST);	echo "</pre>";
	
	
	foreach ($_POST as $name => $val){
		$BODY_MAIL.= '<tr> <td>';
			if(array_key_exists($name,$LANG_AR)){
				$BODY_MAIL.=  $LANG_AR[$name];
			} else 
				$BODY_MAIL.=  $name;
			
			$BODY_MAIL.=  " </td><td> ".$val;
		$BODY_MAIL.='</td></tr>';
		}
		
$BODY_MAIL.=
		'</table>';
		
//echo $BODY_MAIL;

  include ROOT_PATH."/services/mail_core/libmail.php";

		
  $m= new Mail();  // можно сразу указать кодировку, можно ничего не указывать ($m= new Mail;)
  $m->From( "Заявка;no-reply@panoramacomp.ru" ); // от кого Можно использовать имя, отделяется точкой с запятой
  //$m->ReplyTo( "pisec.ferok@ya.ru" ); // куда ответить, тоже можно указать имя
  $m->To( "no-reply@panoramacomp.ru" );   // куда ответить
  $m->Subject( "Форма обратной связи" );
  $m->Body($BODY_MAIL, "html");
  $m->Bcc( "panorama.smk@gmail.com"); // кому отправить скрытую копию
  $m->Priority(1) ;	// установка приоритета

  //$m->Attach( "/toto.gif", "", "image/gif" ) ;	// прикрепленный файл типа image/gif. типа файла указывать не обязательно
  //$m->smtp_on("smtp.yandex.ru","cry@ya.ru","passw", 25, 10); // используя эу команду отправка пойдет через smtp
  //$m->log_on(true); // включаем лог, чтобы посмотреть служебную информацию
  $m->Send();	// отправка
 // echo "Письмо отправлено, вот исходный текст письма:<br><pre>", $m->Get(), "</pre>"; 
echo "Ваша заявка отправлена";

?>