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
    content: "Ce projet avait pour but de créer une identité visuelle complète pour une cliente. Cela allait du nom au site web finis, en passant par le logo et la maquette. Ce projet m’aura apporté des connaissances en PAO, ainsi qu’une expérience en tant que chef de projet, et une expérience de relation client. Ce site est donc un site vitrine pour une toute nouvelle librairie ayant ouvert le 8 décembre 2023. Notre but, par équipe de 3, était de promouvoir cette librairie a l’aide d’une vitrine commerciale forte. Nous avons également créé un stop-trottoir, un flyer, ainsi qu’un marque page aux couleurs de la librairie.",
    warning: 'Attention, site uniquement accessible sur PC'
},
{
    id: 3,
    image: '../icons/portfolio.png',
    title: 'Portfolio',
    link: 'https://ferron.labo-g4.fr/',
    content: "",
    warning: "Site accessible sur téléphone et PC"
},
{
    id: 2,
    image: '../icons/bde.jpg',
    title: 'BDE G4',
    link: 'https://ferron.labo-g4.fr/G4-BDE/',
    content : "Dans ce projet par équipes de 4, nous devions créer le site du BDE de notre école. Ce site avait pour but de créer un moyen de communication et d'annonce rapide et efficace pour leurs événements. Il nous fallait donc un design simple, présentant les membres du BDE ainsi que les événements à venir. Nous avons également pris la liberté de créer une page souvenir, nous rappelant à tous les meilleurs moments passés dans leurs événements.",
    warning: ""
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
            `<div class="flex flex-col justify-center items-center bg-gradient-to-r from-blue-600 to-blue-500 md:w-[32%] h-full mt-4 ml-[1%] mr-[1%] md:mr-0 rounded-[50px] shadow-blue-700 shadow-xl">
            <h1 class="text-2xl mt-2 mb-5">${title}</h1>
            <img class="rounded-[20px] p-2" src="${image}">
            <p class="p-5 mt-[-5px]">${content}</p>
            <a href="${link}" target="_blank"><button class="text-white">${title}</button></a>
            </div>

            `)
    }).join('');
}
displayItem(categories);
//<h1 class="text-md text-white font-[Roboto]">${grade}</h1>