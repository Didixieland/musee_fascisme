//sur la base du script fourni par a-frame et à l'aide d'un llm ici on voit le code pour la gestion des differentes infopanels
AFRAME.registerComponent('info-panel', {
  init: function () {
    var buttonEls = document.querySelectorAll('.menu-button');

    // Selcetion des elemets pour l'infopanel
    this.movieTitleEl = document.querySelector('#infoTitle');
    this.movieDescriptionEl = document.querySelector('#infoDescription');
    
    // Seleziona il clickCatcher (overlay invisibile)
    this.clickCatcherEl = document.querySelector('#clickCatcher');

    // Texte Infopanel pour chaque image
    this.movieInfo = {
      MatteottiImg: {
        title: 'La crise Matteotti',
        description: "Giacomo Matteotti, chef du Parti socialiste unitaire, est brutalement assassiné par une équipe fasciste en mai 1924. Avant les faits, il avait dénoncé les violences de Mussolini et de son parti lors des élections précédentes et préparait une enquête sur la corruption du Duce, qui aurait révélé ses relations avec des compagnies pétrolières étrangères. Son assassinat provoque plusieurs mouvements de protestation, notamment parmi les parlementaires d'autres partis qui, à la sortie de la chambre, se réunissent pour réclamer à grands cris que justice soit faite dans cette affaire, qui reste toutefois mystérieuse et prend du temps. Jamais autant que dans les derniers instants du régime de Mussolini, le fascisme ne se révèle fragile aux yeux du monde, entraînant une crise qui risque de miner le nouveau mouvement au pouvoir."
      },
      
      MussoliniParlamento: {
        title: 'Discours du 3 janvier 1925',
        description: "L'assassinat de Matteotti a provoqué une grave crise au sein du fascisme, mais n'a pas réussi à l'arrêter. Dans un discours prononcé en janvier 1925, Mussolini assume la responsabilité de la mort du député, tandis que l'opposition antifasciste ne parvient pas à faire tomber le gouvernement avec ses protestations et ses demandes de justice dans cette affaire qui reste mystérieuse. À partir de là, le Duce réussit à instaurer une dictature en promouvant une série de lois antidémocratiques. C'est ici que commence le 'biennio' de dictature fasciste."
      },
      PreviatiGuerraImg: { title: 'La Grande Guerre 1914-1918', description: "La Grande Guerre marque à jamais le destin et l'esprit des femmes et des hommes de cette époque. Les jeunes, autrefois enthousiasmés par la propagande des pays en guerre, sortent maintenant des tranchées après des années de combats et une série de morts derrière eux En Italie comme dans d'autres pays, de grandes grèves ont lieu et le parti socialiste semble prendre le dessus. Une ère de grand chaos et de violence s'annonce. (Gaetano Previati, Les horreurs de la guerre, 1917. Huile sur toile)" },
      ProtestaReduciImg: { title: 'Protestations des anciens combattants', description: "Après la guerre, la société entre dans une crise profonde et beaucoup ont du mal à survivre. Cette photo en est l'emblème, le graffiti dit : « Les mutilés demandent du pain au gouvernement ». Les anciens combattants ont du mal à se réinsérer dans la société et leur expérience de la Grande Guerre les a marqués à jamais. Pour certains d'entre eux, comme les premiers fascistes qui se réunissent sur une place de Milan en 1919, la violence est désormais le seul moyen qu'ils connaissent et le seul qui leur permette de s'imposer dans une société nouvelle. "},
      CGILViolenzaFascistaImg: {
        title: 'Violences vers les syndicats et les socialistes',
        description: "De nombreuses usines et fermes sont désormais entre les mains des ouvriers et des travailleurs. La classe patronale s'adresse à ce nouveau mouvement de vétérans de guerre qui, avec la complicité du gouvernement et des forces de l'ordre, organise des équipes d'assaut. Les fascistes frappent et violent ceux qui se dressent devant eux. Cette période est appelée « le biennio nero ». Cette photo montre un incendie allumé en 1921 par les fascistes au siège de la CGIL, le plus grand syndicat italien."
      },
      TecaOlioRicino1: {
        title: 'Huile de recin',
        description: "L'huile de ricin peut être citée parmi tant d'autres exemples pour illustrer la violence fasciste. Elle était administrée aux victimes des agressions des squadristi en raison de ses effets laxatifs. Elles étaient ensuite conduites sur la place publique pour être humiliées."
      },
      MarciaSuRomaImg: {
        title: 'Marcia su Roma 1922',
        description: "Mussolini et son mouvement, désormais conscients de la fragilité de la classe politique bourgeoise qui avait dirigé le pays pendant des décennies et conduit à une guerre désastreuse, savaient qu'ils pouvaient prendre le pouvoir. Avec une grande partie du patronage de son côté et plusieurs membres déçus par les résultats des élections précédentes, il fit marcher les groupes fascistes vers Rome en 1922 pour un coup d'État. Le roi, qui dirigeait l'armée italienne, ne se sentit pas capable de risquer un affrontement, même si les fascistes étaient peu armés et peu enclins à se battre. Le roi, désireux de maintenir la stabilité dans son pays, confia alors à Mussolini la tâche de former un nouveau gouvernement. Mais il était encore trop tôt pour la dictature sanglante du Duce, il faudra attendre « la crise Matteotti »."
      },strageAddisAbaba: {
        title: 'Strages en Ethiopie 1935-1941',
        description: "Pendant la guerre d'Éthiopie (1935-1936) et l'occupation italienne qui a suivi, le régime fasciste a exercé une violence systématique et planifiée contre la population éthiopienne. L'armée italienne a utilisé des armes chimiques en violation des conventions internationales, touchant des civils et des infrastructures.  À cela s'ajoutent des exécutions, des déportations, des camps de concentration et une politique de terreur contre la résistance éthiopienne. Des événements tels que le massacre d'Addis-Abeba en février 1937 et la destruction de monastères et de communautés religieuses montrent que la violence n'était pas ponctuelle, mais faisait partie intégrante du projet colonial fasciste, fondé sur le racisme, la domination et l'anéantissement de l'ennemi."
      }, palazzoBraschiSi: {
        title: "Palazzo Braschi",
        description: "Façade du palais Braschi. Siège de la fédération fasciste de Rome, pendant la campagne électorale de 1934. L'image, visible de loin, transformait le bâtiment en une affiche politique permanente, fusionnant architecture historique et culte du chef. Il ne s'agissait pas d'une simple décoration, mais d'un dispositif de mobilisation symbolique : l'espace urbain était occupé par le régime afin de rendre le consensus apparemment total et inévitable. Le palais Braschi est ainsi devenu un exemple emblématique de la manière dont le fascisme utilisait Rome comme décor politique, imposant la présence du Duce dans la vie quotidienne à travers des images monumentales de propagande. "
      },
      leggiRazziali: {
        title: "les 'Lois raciales' du 1938",
        description: "Les lois raciales fascistes, promulguées à partir de 1938, marquèrent un tournant ouvertement discriminatoire et persécuteur du régime de Mussolini. Les mesures touchèrent principalement les Juifs italiens, qui furent exclus de l'école, de l'université, de l'armée, de l'administration publique et de nombreuses professions, en plus de subir des restrictions de leurs droits civils et patrimoniaux. Les lois ont introduit une définition « biologique » de l'appartenance raciale, fondée sur des critères pseudo-scientifiques et sur un racisme d'État jusqu'alors absent de manière systématique en Italie. Elles n'ont pas été imposées par l'Allemagne nazie, mais élaborées et mises en œuvre de manière autonome par le régime fasciste, préparant le terrain aux persécutions les plus radicales pendant l'occupation allemande et aux déportations après 1943."
      },
      primoLeviImg: {
        title: 'Primo Levi sur les atrocités fascistes',
        description: "Primo Levi, chimiste et écrivain italien, l’un des rares survivants des camps de concentration, répond à une question lors d’une interview à la télévision publique italienne en 1975. À la question: « Pensez-vous que de telles atrocités soient encore possibles ? il répond : « Aujourd’hui, non », mais à l’avenir, c’est possible. « Mais pourquoi seulement les Allemands ? Il y a eu et il y a des camps de concentration en Grèce ou en Algérie, au Brésil, au Chili… Moi, je sais qu’on peut en faire partout. Là où il y a un fascisme, il n’est pas dit qu’il soit identique à celui-là...là où s’impose un verbe nouveau, comme celui qu’aiment les nouveaux fascistes aujourd’hui en Italie, à savoir : “nous ne sommes pas tous égaux”, “nous n’avons pas tous les mêmes droits”… là où ce discours prend racine, à la fin il y a le Lager! Cela, je le sais avec certitude!»"
      },
      meloniImg: {
        title: "Fratelli d'Italia et Giorgia Meloni",
        description: "Aujourd'hui, le gouvernement italien est dirigé par la Première ministre Giorgia Meloni. Son parti, « Fratelli d'Italia », a été créé par d'anciens membres du parti fasciste après la chute du régime sous le nom de « Movimento Sociale Italiano ». Son symbole est la flamme tricolore, également symbole du « Front National » en France. La flamme qui brûle avec ces couleurs veut communiquer un amour ardent pour la patrie et l'idée d'une identité nationale qui ne s'éteint pas, mais elle fait également référence à la flamme qui brûle sur la tombe de Mussolini. De plus, de nombreux membres de ce parti et d'autres partis affiliés d'extrême droite ne cachent pas leur sympathie pour le Duce, comme le président du Sénat Ignazio la Russa qui possède des statues du dictateur dans sa résidence. "
      },
      mussoliniShopImg: {
        title: 'Marchandises - la banalisation du fascisme',
        description: "Cette image est une capture d'écran d'un des nombreux sites qui vendent des produits dérivés du Duce et du fascisme. Ce phénomène, très courant également dans la ville natale de Mussolini où se réunissent chaque année plusieurs néofascistes, témoigne d'une banalisation du phénomène. Aujourd'hui, il est en effet possible de trouver des vins, des broches, des t-shirts et des tasses à l'effigie de Mussolini ou avec ses citations célèbres. "
      },
      protestMuskImg: {
        title: "Le salut nazi de Musk?",
        description: "Un exemple controversé de référence à un symbole fasciste est le salut « romain » d'Elon Musk. Le salut romain a été inventé par Mussolini et repris par Hitler comme un symbole fort d'adhésion au régime, s'inspirant de la Rome antique sans toutefois disposer de preuves historiques à cet égard. Certains de ces gestes publics de Musk et de membres d'autres mouvements d'extrême droite dans le monde ont été interprétés par l'opinion publique comme ambigus ou évocateurs de symboles d'extrême droite. Ce mécanisme est typique des stratégies contemporaines de communication politique, où le non-dit et le « double sens » contribuent à normaliser des symboles ou des références auparavant marginaux, repoussant progressivement les limites de ce qui est acceptable. L'image montre des protestations contre la figure de Musk. Êtes-vous d'accord pour dire qu'il s'agit d'une apologie du fascisme ?"
      },
      overtonImg: {
        title: "La fenêtre d'Overton - Rester vigilant·e·s",
        description: "La fenêtre d'Overton désigne l'ensemble des idées politiques qui, à un moment donné, sont considérées comme acceptables par la majorité de la société. Des idées qui semblaient auparavant impensables peuvent devenir tolérables, puis normales et enfin officielles, si le contexte culturel et médiatique change. Overton, son créateur, ne pensait pas au fascisme, mais prenait l'exemple du cannibalisme. Inacceptable pour une société civile occidentale, il peut, si des personnalités politiques veulent le promouvoir, le rendre progressivement plus acceptable. Je vous pose maintenant la question : est-ce le cas du fascisme ?"
      },
      liberazioneImg: {
        title: "La libération et la fin du régime fasciste",
        description: "Vous entendez une chanson très connue. Il s'agit de « Bella ciao », symbole de la libération de l'Italie du nazisme et du fascisme, aujourd'hui célèbre grâce à la série « La casa di carta ». Après une résistance acharnée des partisans et en collaboration avec les forces alliées, les forces fascistes de Mussolini et d'Hitler en Italie tombent définitivement le 25 avril 1945. Ce fut la victoire de la résistance partisane. Cette date est encore aujourd'hui un jour férié en Italie. L'image que vous voyez représente deux jeunes partisans heureux après la libération de Venise en 1945. Entrez dans la troisième et dernière salle pour essayer de comprendre la situation actuelle."
      },
      mussoliniBraschiImg: {
        title: "Le 'Biennio' fasciste",
        description: "Vous écoutez le discours prononcé par Mussolini devant la foule rassemblée à Rome le 10 juin 1940. Dans ce discours, le Duce déclare la guerre aux puissances alliées, scellant ainsi l'entrée de l'Italie dans le camp de Hitler. La foule acclame son leader. Entrez dans la salle 2 pour vous plonger dans les vingt années de dictature fasciste."
      },
    };

    // association fonction click.
    this.onMenuButtonClick = this.onMenuButtonClick.bind(this);
    this.onOverlayClick = this.onOverlayClick.bind(this);

    // stop propagation click.
    this.el.addEventListener('click', function (evt) {
      evt.stopPropagation();
    });

    // evnmt click pour chaque bouton.
    for (var i = 0; i < buttonEls.length; ++i) {
      buttonEls[i].addEventListener('click', this.onMenuButtonClick);
    }
    
    this.clickCatcherEl.addEventListener('click', this.onOverlayClick);

    // propriété render.
    this.el.object3D.renderOrder = 2;
    this.el.object3D.depthTest = false;
  },

  onMenuButtonClick: function (evt) {
    evt.stopPropagation();

    var info = this.movieInfo[evt.currentTarget.id] || {
      title: evt.currentTarget.id,
      description: 'Contenuto in arrivo.'
    };
    
    // obtient pos image cliqué
    var imagePos = evt.currentTarget.getAttribute('position');

    // Obtient rotation
    var imageRot = evt.currentTarget.getAttribute('rotation');

    // distance offset
    var offset = 1.5;

    // calcule position sur base rotation image
    var forwardVector = new THREE.Vector3(0, 0, 1);
    var quaternion = new THREE.Quaternion();
    quaternion.setFromEuler(new THREE.Euler(
        THREE.MathUtils.degToRad(imageRot.x),
        THREE.MathUtils.degToRad(imageRot.y),
        THREE.MathUtils.degToRad(imageRot.z)
    ));
    forwardVector.applyQuaternion(quaternion);
    forwardVector.multiplyScalar(offset);

    //Fix infopanels mal positionnés ou revnersées
    if (
      evt.currentTarget.id === 'palazzoBraschiSi' ||
      evt.currentTarget.id === 'leggiRazziali'||
      evt.currentTarget.id === 'overtonImg'  || evt.currentTarget.id === 'mussoliniShopImg' || evt.currentTarget.id === 'primoLeviImg' || evt.currentTarget.id === 'liberazioneImg'  ) {
      forwardVector.multiplyScalar(-1);
    }

    // donner autre rotation panel
    if (imagePos.x > 0) {
        forwardVector.multiplyScalar(-1);
    };
    
    var newPanelPos = {
        x: imagePos.x + forwardVector.x,
        y: imagePos.y - 1,  // panel seuelement un peu plus haut
        z: imagePos.z + forwardVector.z
    };

//hauteur infopanel plus haut
    if (evt.currentTarget.id === "palazzoBraschiSi" || evt.currentTarget.id === "leggiRazziali" || evt.currentTarget.id === 'overtonImg'  || evt.currentTarget.id === 'mussoliniShopImg'|| evt.currentTarget.id === 'primoLeviImg' || evt.currentTarget.id === 'protestMuskImg'|| evt.currentTarget.id === 'meloniImg' || evt.currentTarget.id === "strageAddisAbaba" ) {
      newPanelPos.y += 2.7;   
  };


if (evt.currentTarget.id === "TecaOlioRicino1") {
  newPanelPos.y += 0.7;  
};
    //rotation corrigé
    var newPanelRot = {
        x: imageRot.x,
        y: (imageRot.y ) ,  
        z: imageRot.z
    };
// fix infopanel dierrière
    if ( evt.currentTarget.id === 'protestMuskImg') {
      newPanelPos.x -= 3;
    };
    if (evt.currentTarget.id === 'primoLeviImg') {
      newPanelPos.x += 3;
    }

    // Orientation tj vers interieur salle---
var yaw = ((imageRot.y % 360) + 360) % 360; 
var tol = 25; 

if (Math.abs(yaw - 90) <= tol) {
  // les murs: x pour comprendre si droit ou gauche
  newPanelRot.x = 0;
  newPanelRot.y = (imagePos.x > 0) ? -90 : 90; 
  newPanelRot.z = 0;
} else if (Math.abs(yaw - 0) <= tol || Math.abs(yaw - 360) <= tol) {
  // mur de front: panel vers interieur
  newPanelRot.x = 0;
  newPanelRot.y = 180;
  newPanelRot.z = 0;
} else if (Math.abs(yaw - 180) <= tol) {
  // mur en arrière panel vers interieur
  newPanelRot.x = 0;
  newPanelRot.y = 0;
  newPanelRot.z = 0;
}
    newPanelRot.x = 0; //rotation du panel tj la même
    newPanelRot.z = 0; 
    //fix de la rotation de certain panels
    if (evt.currentTarget.id === 'TecaOlioRicino1' || evt.currentTarget.id === 'overtonImg' || evt.currentTarget.id === 'liberazioneImg'|| evt.currentTarget.id === 'mussoliniBraschiImg') {
      newPanelRot.y = (newPanelRot.y + 180) % 360;
    };
    this.el.setAttribute('position', newPanelPos);
    this.el.setAttribute('rotation', newPanelRot);

    this.el.object3D.visible = true;
// scale de default
this.el.object3D.scale.set(2, 2, 2);

// panel plus petit seulement pour huile de recin
if (evt.currentTarget.id === 'TecaOlioRicino1' || evt.currentTarget.id === 'liberazioneImg' ) {
  this.el.object3D.scale.set(1, 1, 1);
}
    //clickCatcher pour couvrir la scene
    this.clickCatcherEl.setAttribute('position', '0 2 -7.5');
    this.clickCatcherEl.object3D.visible = true;

    // mise à jour titre et description selon image cliqué
    this.movieTitleEl.setAttribute('troika-text', 'value', info.title);
    this.movieDescriptionEl.setAttribute('troika-text', 'value', info.description);
}
,
  onOverlayClick: function () {
    // fermature panneau
    this.el.object3D.scale.set(0.001, 0.001, 0.001);
    this.el.object3D.visible = false;
    // deplace clickcatcher dehors de la scene
    this.clickCatcherEl.setAttribute('position', '0 -1000 0');
    this.clickCatcherEl.object3D.visible = false;
  }
});
