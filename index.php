<?php

// verificar se o dispositivo é móvel ou desktop
$iphone = strpos($_SERVER['HTTP_USER_AGENT'], "iPhone");
$ipad = strpos($_SERVER['HTTP_USER_AGENT'], "iPad");
$android = strpos($_SERVER['HTTP_USER_AGENT'], "Android");
$palmpre = strpos($_SERVER['HTTP_USER_AGENT'], "webOS");
$berry = strpos($_SERVER['HTTP_USER_AGENT'], "BlackBerry");
$ipod = strpos($_SERVER['HTTP_USER_AGENT'], "iPod");
$symbian = strpos($_SERVER['HTTP_USER_AGENT'], "Symbian");
$windowsphone = strpos($_SERVER['HTTP_USER_AGENT'], "Windows Phone");

if ($iphone || $ipad || $android || $palmpre || $ipod || $berry || $symbian || $windowsphone == true) {
	$dispositivo = "mobile";
} else {
	$dispositivo = "computador";
}

// Definindo as ações para dispositivos móveis, desktop e para todos dispositivos

//Se for um dispositivo móvel
if ($dispositivo == "mobile") {

	header('Location: /mobile');
	exit;
}

//Se for um computador
if ($dispositivo == "computador") {

	// echo "<h1> Eu sou um COMPUTADOR <h1>";
	// echo '<img src="http://visualdicas.com.br/images/banners/visualdicas_logo2.png">';
}
?>
<!DOCTYPE html>
<html lang="pt-br">

<head>

	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<title>Cardoso Toys</title>
		<link rel="shortcut icon" type="image/png" href="images/favicon.png" />
		<link href="styles.css" rel="stylesheet" type="text/css">
		<link href="styles2.css" rel="stylesheet" type="text/css">
		<link href="styles3.css" rel="stylesheet" type="text/css">
	</head>

<body>
	<section id="tela1" class="bg">
		<div id="background">
			<div id="selocompra">
				<p class="esconde">Compre agora</p>
				<a href="#Ondecomprar2">
					<img src="images/selocompra.png" class="tremendo">
				</a>
			</div>
			<div id="crianageladeira">
				<img src="images/crianageladeira.png">
			</div>
			<div id="video">
				<p class="esconde">Assista o vídeo</p><img src="images/video.png">
			</div>
			<div id="foto3">
				<p class="esconde">Tire o sorvetinho</p><img src="images/foto3.png">
			</div>
			<div id="foto2">
				<p class="esconde">Aperte o botão</p><img src="images/foto2.png">
			</div>
			<div id="foto1">
				<p class="esconde">Puxe a casquinha</p><img src="images/foto1.png">
			</div>
			<div id="ttulo">
				<h2 class="esconde">A brincadeira ficou mais gostosa</h2><img src="images/ttulo.png">
			</div>
			<div id="ageladeira">
				<h3 class="esconde">Chegou a geladeira com dispenser de sorvete!</h3><img src="images/ageladeira.png">
			</div>
			<div id="garanta">
				<p class="esconde">GARANTA A SUA! Estoque limitado.</p><img src="images/garanta.png">
			</div>
			<div id="geladeiragelasorveti">
				<h3 class="esconde">Geladeira gela sorvetinho</h3><img src="images/geladeiragelasorveti.png">
			</div>
			<div id="chegou"><img src="images/chegou.png"></div>
		</div>
	</section>

	<section id="tela2" class="bg">
		<div id="background2">
			<div id="VectorSmartObject2">
				<nav class="esconde">
					<h5 class="esconde">SWEET FANTASY Geladeira Gela Sorvetinho</h5>
					<a target="_blank" href="https://www.ciatoy.com.br/busca?ft=cardoso">CiaToy</a>
					<a target="_blank" href="https://www.abelhamix.com.br/produto/sweety-fantasy-geladeira-gela-sorvetinho-cardoso-toys-50cm.html">Abelhamix</a>
					<a target="_blank" href="https://www.lojacuba.com.br/catalogsearch/result/?q=cardoso">Loja Cuba</a>
					<a target="_blank" href="https://www.bumerangbrinquedos.com.br/cardoso">Bumerang</a>
					<a target="_blank" href="https://www.superlegalbrinquedos.com.br/cardoso?&utmi_p=_&utmi_pc=BuscaFullText&utmi_cp=cardoso#1">Superlegal</a>
				</nav>
				<img src="images/VectorSmartObject2.png">
			</div>
			<div id="ciatoy2" class="tremendoPassaMouse"><a target="_blank" href="https://www.ciatoy.com.br/busca?ft=cardoso"><img src="images/ciatoy2.png"></a></div>
			<div id="abelha2" class="tremendoPassaMouse"><a target="_blank" href="https://www.abelhamix.com.br/produto/sweety-fantasy-geladeira-gela-sorvetinho-cardoso-toys-50cm.html"><img src="images/abelha2.png"></a></div>
			<div id="cuba2" class="tremendoPassaMouse"><a target="_blank" href="https://www.lojacuba.com.br/catalogsearch/result/?q=cardoso"><img src="images/cuba2.png"></a></div>
			<div id="bumerang2" class="tremendoPassaMouse"><a target="_blank" href="https://www.bumerangbrinquedos.com.br/cardoso"><img src="images/bumerang2.png"></a></div>
			<div id="superlegal2" class="tremendoPassaMouse"><a target="_blank" href="https://www.superlegalbrinquedos.com.br/cardoso?&utmi_p=_&utmi_pc=BuscaFullText&utmi_cp=cardoso#1"><img src="images/superlegal2.png"></a></div>
			<div id="Forma12"><img src="images/Forma12.png"></div>
			<div id="menina2"><img src="images/menina2.png"></div>
			<div id="Forma22"><img src="images/Forma22.png"></div>
			<div id="Forma32"><img src="images/Forma32.png"></div>
			<div id="Camada12"><img src="images/Camada12.png"></div>
			<div id="Passo12">
				<p class="esconde">Com a forminha limpa, coloque o suco de sua preferência.</p><img src="images/Passo12.png">
			</div>
			<div id="layer_12"><img src="images/layer_12.png"></div>
			<div id="Passo22">
				<p class="esconde">Encaixe as bases dos sorvetes na forminha e leve ao freezer por aproximadamente 2 horas
					ou até congelar.</p>
				<img src="images/Passo22.png">
			</div>
			<div id="layer_22"><img src="images/layer_22.png"></div>
			<div id="Passo32">
				<p class="esconde">Hora de tirar o sorvetinho. Tire a forminha do freezer. Para desenformar o sorvetinho,
					molhe a forminha com um pouco de água.</p>
				<img src="images/Passo32.png">
			</div>
			<div id="layer_32"><img src="images/layer_32.png"></div>
			<div id="Passo42">
				<p class="esconde">Encaixe o sorvetinho na casquinha e está pronto. <strong>Agora é só saborear!</strong>
				</p>
				<img src="images/Passo42.png">
			</div>
			<div id="layer_42"><img src="images/layer_42.png"></div>
			<div id="Aprenda2">
				<h3 class="esconde">Aprenda como fazer bola de sorvete</h3>
				<img src="images/Aprenda2.png">
			</div>
			<div id="PRVENDACliquenalojad2">
				<p class="esconde"><strong>PRÉ-VENDA!!!</strong> Clique na loja de sua preferência acima e GARANTA JÁ A SUA
					DIVERSÃO.</p>
				<img src="images/PRVENDACliquenalojad2.png">
			</div>
			<div id="Ondecomprar2">
				<h3 class="esconde">Onde comprar?</h3>
				<img src="images/Ondecomprar2.png">
			</div>
			<div id="Ttulo2">
				<h2 class="esconde">E vem com forminha para fazer sorvete de verdade também!</h2>
				<img src="images/Ttulo2.png">
			</div>
		</div>
	</section>

	<section id="rodape" class="bg3">
		<div id="background3">
			<div id="Layer10"><img src="images/Layer10.png"></div>
			<div id="GelaSorvetinho"><img src="images/GelaSorvetinho.png"></div>
			<div id="BonecaSF">
				<p class="esconde">Geladeira Gela Sorvetinho</p>
				<img src="images/BonecaSF.png">
			</div>
			<div id="Face">
				<a target="_blank" href="https://www.facebook.com/CardosoToys/"><img src="images/Face.png"></a>
			</div>
			<div id="Insta">
				<a target="_blank" href="https://www.instagram.com/cardosotoys/?hl=pt-br"><img src="images/Insta.png"></a>
			</div>
			<div id="Formulario">
				<p>
					Preencha o formulário abaixo para receber as novidades CARDOSO TOYS em primeira mão!
				</p>

				<form action="send.php" method="post">
					<input required type="text" placeholder="Nome" name="nome">
					<input required type="text" placeholder="Celular" class="telefone" name="celular">
					<input type="submit" value="ENVIAR" name="celular">
				</form>

				<p class="esconde">
					Quero receber as novidades CARDOSO TOYS por Whatsapp
				</p>
			</div>
			<div id="Parasabermais">
				<h2 class="esconde">
					Para saber mais cadastre-se e siga-nos pelas redes sociais.
				</h2>
				<img src="images/Parasabermais.png">
			</div>
			<div id="Cardoso">
				<p class="esconde">
					SAC-Ligação gratuita: 0800-7073676 - Whatsapp:(11) 9-9948-1693 - De 2ª a 6ª das 8h às 12h e das 13h às 16h (exceto feriados) - Rua Matashiro Yamaguishi, 278/390 - Itaquera - São Paulo-SP - CEP 08260-040 - CNPJ: 57.464.109/0001-05
				</p>
				<img src="images/Cardoso.png">
			</div>
		</div>
	</section>
	<script src="js/jquery.js"></script>
	<script src="js/jquery.mask.min.js"></script>
	<script>
		$('.telefone').mask('(99) 9-9999-9999');
	</script>
</body>

</html>