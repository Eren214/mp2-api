var express = require("express");
var router = express.Router();

  let artists=[
  {id: 1,image: "image/parokya_ni_edgar.jpg",location: "Mall of Asia",link: "", title: "Parokya ni Edgar",date: "December 16, 2022",time:"8:30 PM"},
  {id: 2,image: "image/december-avenue.jpg",location: "Araneta Coliseum",link: "", title: "December Avenue",date: "December 16, 2022",time:"8:30 PM"},
  {id: 3,image: "image/cueshe.jpg",location: "KIA Theatre",link: "",title: "Cueshe", date: "December 12, 2022",time:"8:00 PM"},
  {id: 4,image: "image/parokya_ni_edgar.jpg",location: "BGC Grounds",link: "", title: "Rocksteddy",date: "December 20, 2022",time:"8:30 PM"},
  {id: 5,image: "image/parokya_ni_edgar.jpg",location: "SM Seaside",link: "", title: "Silent Sanctuary",date: "November 16, 2022",time:"8:30 PM"},
  {id: 6, image: "image/parokya_ni_edgar.jpg",location: "Phil. Arena",link: "", title: "Itchyworms",date: "December 17, 2022",time:"8:30 PM"},
  {id: 7,image: "image/parokya_ni_edgar.jpg",location: "Mall of Asia",link: "", title: "Callalily",date: "December 19, 2022",time:"8:30 PM"},
  {id: 8,image: "image/parokya_ni_edgar.jpg",location: "Meralco Theater",link: "", title: "Sandwich",date: "December 23, 2022",time:"8:30 PM"},
  {id: 9,image: "image/parokya_ni_edgar.jpg",location: "Mall of Asia","link": "", title: "Spongecola",date: "December 22, 2022",time:"8:30 PM"},
  {id: 10,image: "image/parokya_ni_edgar.jpg",location: "Newport Performing Arts",link: "", title: "Ben and Ben",date: "December 14, 2022",time:"8:30 PM"},
  {id: 11,image: "image/parokya_ni_edgar.jpg",location: "Mall of Asia",link: "", title: "I belong to the zoo",date: "December 10, 2022",time:"8:30 PM"},
  {id: 12,image: "image/parokya_ni_edgar.jpg",location: "New Frontier Theater",link: "", title: "Session Road",date: "December 27, 2022",time:"8:30 PM"},
  {id: 13,image: "image/parokya_ni_edgar.jpg",location: "Cuneta Astrodome",link: "", title: "Hale",date: "December 31, 2022",time:"8:30 PM"},
  {id: 14,image: "image/parokya_ni_edgar.jpg",location: "Music Museum",link: "", title: "6Cyclemind",date: "December 28, 2022",time:"8:30 PM"},
  {id: 15,image: "image/parokya_ni_edgar.jpg",location: "Mall of Asia",link: "",title: "Brownman Revival",date: "December 29, 2022",time:"8:30 PM"},
  {id: 16,image: "image/parokya_ni_edgar.jpg",location: "New frontier theater",link: "", title: "Gigi de lana",date: "December 29, 2022",time:"8:30 PM"},
  {id: 17,image: "image/parokya_ni_edgar.jpg",location: "Music Museum",link: "", title: "Zack Tabudlo",date: "December 29, 2022",time:"8:30 PM"},
  {id: 18,image: "image/parokya_ni_edgar.jpg",location: "Music Museum",link: "", title: "Arthur Nery",date: "December 29, 2022",time:"8:30 PM"},
  {id: 19,image: "image/parokya_ni_edgar.jpg",location: "One Music PH",link: "", title: "Anji Salvacion",date: "December 29, 2022",time:"8:30 PM"},
  {id: 20,image: "image/parokya_ni_edgar.jpg",location: "One Music PH",link: "", title: "Michael Pangilinan",date: "December 29, 2022",time:"8:30 PM"}
];

router.get('/', (req, res) => {
    res.send(artists);
  });
  
  router.get("/:id", (req, res) => {
    const { id } = req.params;
    let result = artists.find((item) => {
        return item.id == Number(id);
    });
    res.status(200).send(result ? result : "Record not found!");
  });

  router.put("/:id", (req, res)=>{
    const { id } = req.params;
  
    let employee = artists.find((item) => {
        return item.id === Number(id);
    });
  
    artist.name = req.body.name;
    artist.title = req.body.title;
    artist.age = req.body.age;
    artist.gender = req.body.gender;
  
    res.status(200).send(artist);
  
  });
  
  router.post("/:id", (req, res)=>{
    const { id } = req.params;
  
    let lastItem =artists[artists.length - 1];
    console.log(req.body);
    let artist = {};
  
    artist.id = lastItem.id + 1;
    artist.name = req.body.name;
    artist.title = req.body.title;
    res.status(200).send( employee );
    artist.age = req.body.age;
    artist.gender = req.body.gender;
  
    artists.push(employee);
  
  });
  module.exports = router;