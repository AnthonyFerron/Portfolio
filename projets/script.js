const btns=[
{
    id: 1,
    name: 'All',
    tag: 'true'
},
{
    id: 2,
    name: 'Clients',
    tag: 'true'
},
{
    id: 3,
    name: 'Pour moi',
    tag: 'true'
},
]

const filters = [...new Set(btns.map((btn)=>
    {return btn}))]

document.getElementById('btns').innerHTML=filters.map((btn)=>{
    var {name, id, tag} = btn;
    if(id=='1'){
        return(
            "<button class='flex justify-center items-center bg-gradient-to-b from-blue-500 shadow backdrop-blur rounded-[30px] text-3xl md:w-[300px]  w-[196px] h-[55px] text-white mr-5 font-[Oswald]' onclick='document.location.reload("+(tag)+`)'>${name}</button>`
    )}
    else{
        return(
            "<button class='flex justify-center items-center bg-gradient-to-b from-blue-500 shadow backdrop-blur rounded-[30px] text-3xl md:mt-0 mt-3 md:w-[300px]  w-[196px] h-[55px] text-white mr-5 font-[Oswald]' onclick='filterItems("+(id)+`)'>${name}</button>`
        )
    }
}).join('');

const product = [
{
    id: 2,
    image: '../icons/librairie.png',
    title: 'Librairie',
    link: 'https://ferron.labo-g4.fr/librairie/',
    content: "Ce projet avait pour but de créer une identité visuelle complète pour une cliente. Cela allait du nom au site web finis, en passant par le logo et la maquette. Ce projet m'aura apporté des connaissances en PAO, ainsi qu'une expérience en tant que chef de projet, et une expérience de relation client. Nous avons dû apprendre de nouveaux langages tel que tailwind, javascript et php, qui nous serviront pour sur dans les prochains projets. Ce site est donc un site vitrine pour une toute nouvelle librairie ayant ouvert le 8 décembre 2023. Notre but, par équipe de 3, était de promouvoir cette librairie a l'aide d'une vitrine commerciale forte. Nous avons également créé un stop-trottoir, un flyer, ainsi qu'un marque page aux couleurs de la librairie.",
    responsives: 0,
    statuts: "Chef de projet <br> Equipe de 3 développeurs"
},
{
    id: 3,
    image: '../icons/portfolio.png',
    title: 'Portfolio',
    link: 'https://ferron.labo-g4.fr/',
    content: "Le Portfolio sur lequel vous êtes actuellement, est un projet réalisé en partie en cours, mais surtout sur mon temps libre. Ce projet a été créé dans le but de me présenter auprès des recruteurs ou même des autres développeurs. Les principales fonctions sont donc la présentation de mes projets et les possibilités de contact. Ce site a été construit avec le framework HTML Tailwind Css. Il y a également du PHP et du Javascript pour la gestion du formulaire de contact ou du filtre dans la page projet.",
    responsives: 1,
    statuts: "Unique développeur"
},
{
    id: 2,
    image: '../icons/bde.png',
    title: 'BDE G4',
    link: 'https://ferron.labo-g4.fr/G4-BDE/',
    content : "Dans ce projet par équipes de 4, nous devions créer le site du BDE de notre école. Ce site avait pour but de créer un moyen de communication et d'annonce rapide et efficace pour leurs événements. Il nous fallait donc un design simple, présentant les membres du BDE ainsi que les événements à venir. Nous avons également pris la liberté de créer une page souvenir, nous rappelant à tous les meilleurs moments passés dans leurs événements.",
    responsives: 1,
    statuts: "Chef de projet <br> Equipe de 4 développeurs"
},
{
    id: 2,
    image: "../icons/poisson-free.png",
    title : 'Poisson Free',
    link: "http://89.168.41.124/",
    content: "Ce Projet est actuellement en cours de développement. Vous pouvez néanmoins visiter le site pour en connaître son avancement. Le but de ce projet est de créer un site de restaurant click and collect avec suivi des commandes en temps réel. Le site est codé en Reactjs avec Tailwind Css pour le frontend, Express JS pour le backend ainsi que SQL pour la base de données. L'équipe frontend est composée de 3 personnes, tandis que l'équipe backend, que je dirige, est composée de 6 personnes dont 2 s'occupant de la base de données.",
    responsives: 1,
    statuts: "Chef de la partie Backend <br> 9 personnes dont 6 dans mon équipe "

    
}
];

const categories = [...new Set(product.map((item)=>
    {return item}))]

const filterItems = (a)=>{
    const filterCategories = categories.filter(item);
    function item(value){
        if(value.id==a){
            return(
                value.id
            )
        }
    }
    displayItem(filterCategories)
}

function responsive(statut) {
    if(statut == 1) {
        return("Site accessible sur Mobile et PC");
    }else{
        return("Site accessible uniquement sur PC");
    }
    
}

const displayItem = (items) => {
    document.getElementById('root').innerHTML = items.map((item)=>
    {
        var{image, title, link, content, statuts, responsives} = item;
        return(
            `<div class="flex flex-col justify-between items-center bg-gradient-to-r from-blue-600 to-blue-500 xl:w-[32%] xl:my-10 my-10 h-auto mt-4 md:mr-0 rounded-[50px] shadow-blue-700 shadow-xl">
            <h1 class="text-2xl mt-2 mb-5">${title}</h1>
            <a href="${link}"><img class="rounded-[20px] p-2" src="${image}"></a>
            <p class="text-center text-white text-xl">${statuts}</p>
            <p class="p-5 mt-[-5px] text-white text-justify">${content}</p>
            <p class="text-center text-white text-xl mb-5">${responsive(responsives)}</p>
            <a href="${link}" target="_blank"class="flex justify-center items-center bg-blue-700 hover:bg-blue-600  w-[200px] h-[75px] rounded-[30px] mb-5"><button class="text-white text-xl">Visiter le site </button></a>
            </div>

            `)
    }).join('');
}
displayItem(categories);