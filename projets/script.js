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
    content: "Bienvenue dans l'univers captivant de Nouvelle Plume, la librairie qui s'illumine à l'image de la Fête des Lumières à Lyon! Derrière chaque pixel, chaque ligne de code, se cache l'essence d'un projet moderne et vibrant, né de l'union entre créativité et expertise technique. Imaginons ensemble une cliente fictive exceptionnelle, notre précieuse coopératrice. De la conception du nom à l'élaboration du logo, de la définition de la charte graphique à la création d'une maquette résolument moderne, chaque étape fut un voyage exaltant. Les rendez-vous hebdomadaires avec notre coopératrice étaient autant d'occasions de transformer des idées en réalité. Chaque validation était une victoire, chaque ajustement une leçon apprise. Le site de Nouvelle Plume n'est pas simplement une vitrine en ligne, c'est une expérience visuelle moderne où compétences techniques, créativité et collaboration se fondent harmonieusement. Explorez chaque recoin de ce site, où la magie de la Fête des Lumières à Lyon s'exprime à travers un design éclairé. Entrez dans notre univers virtuel, où chaque clic résonne avec le savoir-faire acquis, où chaque page est une invitation à explorer les frontières de la conception web. Bienvenue dans Nouvelle Plume, une librairie moderne où la magie de la création rencontre la rigueur du développement, illuminant votre parcours en ligne.",
    warning: 'Attention, site uniquement accessible sur PC'
},
{
    id: 3,
    image: '../icons/portfolio.png',
    title: 'Portfolio',
    link: 'https://ferron.labo-g4.fr/'
},
{
    id: 2,
    image: '../icons/bde.jpg',
    title: 'BDE G4',
    link: 'https://ferron.labo-g4.fr/G4-BDE/'
},
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

const displayItem = (items) => {
    document.getElementById('root').innerHTML = items.map((item)=>
    {
        var{image, title, link, content} = item;
        return(
            `<div class="flex flex-col justify-between items-center bg-gradient-to-r from-blue-600 to-blue-500 md:w-[32%] h-auto mt-4 ml-[1%] mr-[1%] md:mr-0 rounded-[50px] shadow-blue-700 shadow-xl">
            <a href="${link}"><button class="text-white">${title}</button></a>
            <p class="p-5 ">${content}</p>
            </div>

            `)
    }).join('');
}
displayItem(categories);
//<h1 class="text-md text-white font-[Roboto]">${grade}</h1>