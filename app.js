const express   = require("express");
const hbs       = require("hbs");
const app       = express();
const path      = require("path");
 
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
hbs.registerPartials(__dirname + "/views/partials");
app.use(express.static(path.join(__dirname, "public")));
 
app.get('/', (req, res, next) => {
    res.render("inicioSesion")
  })
 

app.post('/home', (req, res) => {
    const {username,password}=req.body
    console.log(req.body)
    if(username != "pepe@pepe.com"){
      //const error="El nombre no es el correcto"
      console.log("El nombre no es correcto")
    
      res.render('inicioSesion')
    }
    if(password != "1234"){
      //const error="El nombre no es el correcto"
      console.log("La contraseña no es correcta")
      res.render('inicioSesion')  
    }
    else {
      res.render('home');
    }
  });

app.get('/esperanzaVida', (req, res, next) => {
    
    const players = [
      {
        name: "Rusell",
        lastName: "Westbrook",
        team: "OKC",
        photo: "https://thunderousintentions.com/wp-content/uploads/getty-images/2017/12/891998404-oklahoma-city-thunder-v-indiana-pacers.jpg.jpg",
        average: [
          { year: 2013, points: 82 },
          { year: 2014, points: 82 },
          { year: 2015, points: 60 },
          { year: 2016, points: 46 },
          { year: 2017, points: 67 },
          { year: 2018, points: 80 }
        ]
      },
      {
        name: "Kevin",
        lastName: "Durant",
        team: "GSW",
        photo: "https://img.bleacherreport.net/img/images/photos/003/670/482/hi-res-3c2473cd8600df96c4b94c93808562c8_crop_north.jpg?h=533&w=800&q=70&crop_x=center&crop_y=top",
        average: [
          { year: 2013, points: 76 },
          { year: 2014, points: 80 },
          { year: 2015, points: 65 },
          { year: 2016, points: 50 },
          { year: 2017, points: 67 },
          { year: 2018, points: 78 }
        ]
      },
      {
        name: "Lebron",
        lastName: "James",
        team: "CLE",
        photo: "https://static.diariovasco.com/www/multimedia/202202/13/media/cortadas/LEBRON-kmEE-U160930735423QkC-624x385@Diario%20Vasco.jpg",
        average: [
          { year: 2013, points: 78 },
          { year: 2014, points: 82 },
          { year: 2015, points: 76 },
          { year: 2016, points: 84 },
          { year: 2017, points: 67 },
          { year: 2018, points: 60 }
        ]
      },
      {
        name: "Emanuel",
        lastName: "Ginóbilli",
        team: "SAS",
        photo: "https://cdn.vox-cdn.com/thumbor/Z9kR0HDJrzOzxOdwGe7Jwyxxvjk=/0x0:2802x4203/1200x800/filters:focal(1329x1158:1777x1606)/cdn.vox-cdn.com/uploads/chorus_image/image/57733525/usa_today_10429631.0.jpg",
        average: [
          { year: 2013, points: 82 },
          { year: 2014, points: 76 },
          { year: 2015, points: 74 },
          { year: 2016, points: 80 },
          { year: 2017, points: 66 },
          { year: 2018, points: 63 }
        ]
      },
      {
        name: "Kyrie",
        lastName: "Irving",
        team: "BOS",
        photo: "https://cdn-s3.si.com/s3fs-public/styles/marquee_large_2x/public/2017/11/11/kyrie-irving-mvp-case.jpg?itok=PWYqUSGf",
        average: [
          { year: 2013, points: 74 },
          { year: 2014, points: 72 },
          { year: 2015, points: 66 },
          { year: 2016, points: 82 },
          { year: 2017, points: 64 },
          { year: 2018, points: 61 }
        ]
      }
    ];
    res.render("players", { players });
  });
 
  app.get('/natalidad', (req, res, next) => {

    const teams = [
        {
            name: "Lakers",
            photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQQlguW65cyIkInIak2TPBR2suJq0-4X_SIw&usqp=CAU",
        },
        {
            name: "Golden State Warriors",
            photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXE_6ntDGhivPAdt2MQJnf3QH4lZvqu_ingA&usqp=CAU",
        },
        {
            name: "Miami Heat",
            photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl6AD85t7tDFbmJDKm_boBAJXmLI1M9v7UXg&usqp=CAU",
        }
    
    

      
    ];
    res.render("teams", { teams });
  });

  app.get('/poblacion', (req, res, next) => {

    const teams = [
        {
            name: "Lakers",
            photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQQlguW65cyIkInIak2TPBR2suJq0-4X_SIw&usqp=CAU",
        },
        {
            name: "Golden State Warriors",
            photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXE_6ntDGhivPAdt2MQJnf3QH4lZvqu_ingA&usqp=CAU",
        },
        {
            name: "Miami Heat",
            photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl6AD85t7tDFbmJDKm_boBAJXmLI1M9v7UXg&usqp=CAU",
        }
    
    

      
    ];
    res.render("teams", { teams });
  });

 
app.listen(3000);