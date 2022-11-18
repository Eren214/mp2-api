var express = require("express");
var router = express.Router();

  let decaves=[
  {id: 1,location: "Mall of Asia",link: "", title:"December Avenue",date: "December 12, 2022",time:"8:30 PM"},
  {id: 2,location: "Araneta Coliseum",link: "", title: "December Avenue",date: "December 17, 2022",time:"8:00 PM"},
  {id: 3,location: "KIA Theatre",link: "",title:"December Avenue", date: "December 19, 2022",time:"8:00 PM"},
  {id: 4,location: "BGC Grounds",link: "", title:"December Avenue",date: "December 20, 2022",time:"8:30 PM"},
  {id: 5,location: "SM Seaside",link: "", title:"December Avenue",date: "November 15, 2022",time:"8:30 PM"},
  {id: 6,location: "Phil. Arena",link: "", title: "December Avenue",date: "December 14, 2022",time:"8:30 PM"},
  {id: 7,location: "Mall of Asia",link: "", title:"December Avenue",date: "December 15, 2022",time:"8:30 PM"},
  {id: 8,location: "Meralco Theater",link: "", title: "December Avenue",date: "December 17, 2022",time:"8:30 PM"},
  {id: 9,location: "Mall of Asia","link": "", title:"December Avenue",date: "December 21, 2022",time:"8:30 PM"},
  {id: 10,location: "Newport Performing Arts",link: "", title:"December Avenue",date: "December 22, 2022",time:"8:30 PM"},
  {id: 11,location: "Mall of Asia",link: "", title: "December Avenue",date: "January 10, 2022",time:"8:30 PM"},
  {id: 12,location: "New Frontier Theater",link: "", title:"December Avenue",date: "January 27, 2022",time:"8:30 PM"},
  {id: 13,location: "Cuneta Astrodome",link: "", title:"December Avenue",date: "January 31, 2022",time:"8:30 PM"},
  {id: 14,location: "Music Museum",link: "", title:"December Avenue",date: "February 14, 2022",time:"8:30 PM"},
  {id: 15,location: "Mall of Asia",link: "",title:"December Avenue",date: "February 15, 2022",time:"8:30 PM"},
  {id: 16,location: "New frontier theater",link: "", title:"December Avenue",date: "February 19, 2022",time:"8:30 PM"},
  {id: 17,location: "Music Museum",link: "", title:"December Avenue",date: "February 22, 2022",time:"8:30 PM"},
  {id: 18,location: "Music Museum",link: "", title:"December Avenue",date: "February 24, 2022",time:"8:30 PM"},
  {id: 19,location: "One Music PH",link: "", title:"December Avenue",date: "February 26, 2022",time:"8:30 PM"},
  {id: 20,location: "One Music PH",link: "", title:"December Avenue",date: "February 29, 2022",time:"8:30 PM"}
];

router.get('/', (req, res) => {
    res.send(decaves);
  });
  
  router.get("/:id", (req, res) => {
    const { id } = req.params;
    let result = decaves.find((item) => {
        return item.id == Number(id);
    });
    res.status(200).send(result ? result : "Record not found!");
  });

  module.exports = router;