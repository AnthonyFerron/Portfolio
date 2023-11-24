<!doctype html>
<html lang="fr">
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Anthony Ferron</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="style.css" />
  <script type="text/javascript">window.$crisp=[];window.CRISP_WEBSITE_ID="58beb3a6-b2f5-4ebb-a9bf-c4931a278a3d";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();</script>
</head>
<body class="bg-gradient-to-r from-sky-950 to-blue-950 text-white scroll-down">
  <!-- head -->
  <nav class="flex w-[100%] h-[100px] bg-blue-700 shadow-zinc-800 shadow-xl mb-[120px] md:mb-10">
    <label for="toggle" class="md:hidden cursor-pointer text-[40px] absolute top-[15px] left-[30px] ">☰</label>
    <input type="checkbox" class="hidden" id="toggle">
    <div id="links" class="hidden flex-col bg-blue-700 h-[220px] md:flex md:flex-row w-full md:h-full justify-around items-center "> <!-- main_pages -->
      <a href="#" class="md:w-[33%] md:flex md:items-center md:justify-center md:h-[100px] hover:bg-blue-400 md:shadow-zinc-800 md:shadow-xl">Contact</a>
      <a href="#" class="md:w-[33%] md:flex md:items-center md:justify-center md:h-[100px] hover:bg-blue-400 md:shadow-zinc-800 md:shadow-xl">Anthony Ferron</a>
      <a href="#" class="md:w-[33%] md:flex md:items-center md:justify-center md:h-[100px] hover:bg-blue-400 md:shadow-zinc-800 md:shadow-xl">Mes Projets</a>
    </div>
  </nav>
  <!-- body -->

  <div class="flex md:flex-row flex-col">
    <div class="bg-gradient-to-r from-blue-600 to-blue-500 md:w-[47%] h-auto mt-4 ml-[2%] mr-[2%] md:mr-0 rounded-[50px] shadow-blue-700 shadow-xl">
      <h1 class="flex text-white text-3xl mt-2 items-center justify-center">Qui suis-je ?</h1>
      <p class="text-xl text-center mt-5 mb-5 mr-5 ml-5">Je m'appelle Anthony Ferron, j'ai 18 ans.<br>
        Je suis actuellement en &eacute;cole d'informatique &agrave; l'institut G4, &agrave; Lyon 9.<br>
        Je suis &eacute;galement en alternance chez MSI-Experts, une entreprise de support informatique pour le groupe Orpea. <br>
        Passionn&eacute; depuis tout petit par la technologie, c'est tout d'abord par les jeux vid&eacute;os, passion transmise par mon p&egrave;re, que l'informatique a pris une place importante dans ma vie. <br>
        J'ai commenc&eacute; le d&eacute;veloppement au coll&egrave;ge avec du scratch, et j'ai de suite voulu savoir coder. <br>
        Je me suis int&eacute;ress&eacute; &agrave; Python pour commencer, avant de me diversifier sur plusieurs autres langages au cours des ann&eacute;es.<br>
        En arrivant en classe de premi&egrave;re, j'ai d&ucirc; changer de lyc&eacute;e pour pouvoir continuer l'informatique, et suis donc parti rejoindre le lyc&eacute;e Louis Lachenal &agrave; Annecy pour suivre la NSI.<br>
        C'est finalement apr&egrave;s avoir obtenu mon baccalaur&eacute;at que j'ai rejoint l'institut G4.<br>
          </p>
      <div class="w-[100%] flex items-center justify-center">
        <img src="./icons/moi.png" class="flex w-[50%]">
      </div>
    </div>
    <div class="bg-gradient-to-r from-blue-600 to-blue-500 md:w-[47%] h-auto mt-4 ml-[2%] mr-[2%] md:mr-0 rounded-[50px] shadow-blue-700 shadow-xl">
      <h1 class="flex text-white text-3xl mt-2 mb-5 items-center justify-center">Mes comp&eacute;tences</h1>
      <h1 class="flex text-white text-xl mt-2 items-center justify-center">Languages de programmations :</h1>
      <div class="w-full">
        <img src="./icons/logo/">
      </div>
    </div>
  </div>

  <!-- contact -->

  <?php
  if (isset($_POST["message"])){            $message = "Ce message vous a été envoyé via la page contact du site du BDE Institut G4
      Nom : " . $_POST["nom"] . "
      Email : " . $_POST["email"] . "
      Nom : " . $_POST["message"];
      $retour  = mail("anthony.ferron74@gmail.com", "message formulaire BDE Institut G4" , "Email: ". $_POST["email"]." "."Nom: ".$_POST["nom"] ."  "."Message: ".$_POST["message"],"");
      if ($retour) {
          echo '<div class="alert alert-light text-align-center" role="alert">
          le message a bien été envoyé!
        </div>';
      }
  }
  ?>

  <div class="flex md:flex-row flex-col">
    <div class="flex justify-around items-center bg-gradient-to-r from-blue-600 to-blue-500 md:w-[47%] h-auto mt-4 ml-[2%] mr-[2%] md:mr-0 rounded-[50px] shadow-blue-700 shadow-xl">
      <div class="flex justify-center items-center w-[100%] text-2xl font-bold text-white" >
        <h1>CONTACTEZ-NOUS</h1>
      </div>
       <div class="flex justify-center items-center w-[100%]">   <!-- id:forme class=formes -->
        <div class="flex flex-col" > <!-- id/class:formulaire -->
          <h3>Formulaire de contact</h3>
          <p class="texte">Laissez nous votre message.</p>
          <form name="register-form" method="post" class="form form-control">
            <div>
              <input type="text" size="60%" name="nom" class="form-control" placeholder="Nom..." required />
            </div>
            <div>
              <input type="text" name="email" class="form-control" placeholder="e-mail..." required />
            </div>
            <div>
              <input type="text" id="register-form[message]" name="message" class="form-control" placeholder="Message..." required />
            </div>
              <div class="btn">
              <input type="submit" value="Envoyer le message" name="Envoyer" class=" btn btn-outline-info"/>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  

  <!-- foot -->

  <!-- end foot -->
</body>
</html>
