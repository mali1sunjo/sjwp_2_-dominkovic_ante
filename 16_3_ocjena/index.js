const movies = [

{
title:"The Batman",
year:"2022",
genre:"Action",
desc:"Batman investigates corruption in Gotham.",
img:"https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgKnONONX.jpg"
},

{
title:"Dune",
year:"2021",
genre:"Sci-Fi",
desc:"A noble family fights for control of the galaxy.",
img:"https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg"
},

{
title:"Joker",
year:"2019",
genre:"Drama",
desc:"A comedian descends into madness.",
img:"https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
},

{
title:"Interstellar",
year:"2014",
genre:"Sci-Fi",
desc:"Explorers travel through a wormhole.",
img:"https://image.tmdb.org/t/p/w500/b6IRp6Pl2Fsq37r9jF3uXvQHq2.jpg"
},

{
title:"Avatar The Way of Water",
year:"2022",
genre:"Adventure",
desc:"Jake Sully lives with his family on Pandora.",
img:"https://image.tmdb.org/t/p/w500/r7XifzvtezNt31ypvsmb6Oqxw49.jpg"
},

{
title:"John Wick 4",
year:"2023",
genre:"Action",
desc:"John Wick fights the High Table.",
img:"https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
},

{
title:"Spider-Man No Way Home",
year:"2021",
genre:"Superhero",
desc:"Spider-Man faces villains from other universes.",
img:"https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg"
},

{
title:"Doctor Strange 2",
year:"2022",
genre:"Fantasy",
desc:"Doctor Strange explores the multiverse.",
img:"https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg"
},

{
title:"Inception",
year:"2010",
genre:"Sci-Fi",
desc:"A thief steals secrets through dreams.",
img:"https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg"
},

{
title:"The Dark Knight",
year:"2008",
genre:"Action",
desc:"Batman faces the Joker.",
img:"https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
},

{
title:"Titanic",
year:"1997",
genre:"Romance",
desc:"A tragic love story aboard the Titanic.",
img:"https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg"
},

{
title:"Gladiator",
year:"2000",
genre:"Action",
desc:"A Roman general seeks revenge.",
img:"https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg"
},

{
title:"The Matrix",
year:"1999",
genre:"Sci-Fi",
desc:"A hacker discovers the truth about reality.",
img:"https://image.tmdb.org/t/p/w500/aoiJb6GdE9HkQ0Z3F1k1o1tKTbm.jpg"
},

{
title:"Deadpool",
year:"2016",
genre:"Comedy / Action",
desc:"A wisecracking mercenary seeks revenge.",
img:"https://image.tmdb.org/t/p/w500/inVq3FRqcYIRl2la8iZikYYxFNR.jpg"
},

{
title:"Iron Man",
year:"2008",
genre:"Marvel",
desc:"Tony Stark becomes Iron Man.",
img:"https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg"
},

{
title:"Thor Ragnarok",
year:"2017",
genre:"Marvel",
desc:"Thor must stop Ragnarok.",
img:"https://image.tmdb.org/t/p/w500/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg"
},

{
title:"Black Panther",
year:"2018",
genre:"Marvel",
desc:"The king of Wakanda defends his nation.",
img:"https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg"
},

{
title:"Shang-Chi",
year:"2021",
genre:"Marvel",
desc:"A martial artist confronts his past.",
img:"https://image.tmdb.org/t/p/w500/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg"
},

{
title:"Top Gun Maverick",
year:"2022",
genre:"Action",
desc:"Maverick trains a new generation of pilots.",
img:"https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg"
},

{
title:"Fast X",
year:"2023",
genre:"Action",
desc:"Dom faces his most dangerous enemy.",
img:"https://image.tmdb.org/t/p/w500/fiVW06jE7z9YnO4trhaMEdclSiC.jpg"
}

]

const container = document.getElementById("moviesContainer")

movies.forEach((movie,index)=>{

container.innerHTML += `
<div class="movie" onclick="openModal(${index})">
<img src="${movie.img}">
<h3>${movie.title}</h3>
</div>
`

})

function openModal(index){

document.getElementById("modal").style.display="flex"

document.getElementById("title").innerText=movies[index].title
document.getElementById("year").innerText="Year: "+movies[index].year
document.getElementById("genre").innerText="Genre: "+movies[index].genre
document.getElementById("desc").innerText=movies[index].desc

}

function closeModal(){
document.getElementById("modal").style.display="none"
}