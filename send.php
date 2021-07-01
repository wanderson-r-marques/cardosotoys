<?php
require 'phpmailer/PHPMailerAutoload.php';

$nome = $_POST['nome'];
$celular = $_POST['celular'];
$whatsapp = $_POST['whatsapp'];

if ($whatsapp == 1)
    $recebe = 'Sim';
else
    $recebe = 'Não';

$email = "site@gelasorvetinho.com.br";

$mail = new PHPMailer;

// Enable verbose debug output
// $mail->SMTPDebug = 1;

$mail->isSMTP();

$mail->CharSet = 'UTF-8'; // Set mailer to use SMTP
$mail->Host = 'mail.gelasorvetinho.com.br';
$mail->SMTPOptions = array(
    'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
    )
); // Specify main and backup SMTP servers
$mail->SMTPAuth = true; // Enable SMTP authentication
$mail->Username = 'site@gelasorvetinho.com.br'; // SMTP username
$mail->Password = 'Senha@741'; // SMTP password
$mail->SMTPSecure = false; // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587; // TCP port to connect to

$mail->setFrom($email, "Contato do Site");
// Add a recipient

$mail->addAddress("atendimento@gelasorvetinho.com.br"); // Name is optional
// $mail->addAddress('cardosotoys@blendcomunicacao.com.br'); // Name is optional

// Optional name
$mail->isHTML(true); // Set email format to HTML

$mail->Subject = "Contato do Site";

$mail->Body = "
<h3>Mensagem enviada pelo formulário do site</h3><br><br>
Nome: " . $nome . "<br>
Telefone: " . $celular . "<br>
Receber Zap: " . $recebe . "<br>
";

try {
    
    if ($mail->send()) {        
        echo "<script>alert('Contato enviado com sucesso!');
        window.history.back();</script>";        
    }
    
} catch (Exception  $th) {    
    // print_r($mail->send());
}
