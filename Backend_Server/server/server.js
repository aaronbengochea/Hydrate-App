const express = require('express');
const cors = require("cors");
const app = express();
const {db} = require('./firebase.js')


app.use(express.json());
app.use(cors());


app.post("/create_user", async (req,res) => {
  //print body
  console.log(req.body)

  //assign parts of body
  const { username, password, email, petName } = req.body

  //assign db map collections
  const docRef = db.collection('users').doc(username)
  const userPassMap = db.collection('userPassMap').doc(username)
  const userEmailMap = db.collection('userEmailMap').doc(username)
  const userPetMap = db.collection('userPetMap').doc(username)
  const petUserMap = db.collection('petUserMap').doc(petName)
  const emailPassMap = db.collection('emailPassMap').doc(email)
  const emailUserMap = db.collection('emailUserMap').doc(email)
  //const passwordMap = db.collection('passwordMap').doc(username)


  //E-mail Bouncer: Already registered? Well then you can't again with this token
  const emailQueryRef = db.collection('userEmailMap');
  const emailQuerySnapshot = await emailQueryRef.where('email','==',email).get();

  if (!emailQuerySnapshot.empty){
    console.log('Rejected due to email')
    res.send('Email already in use')
    return
  }

  //Username Bouncer:
  const usernameQueryRef = db.collection('emailUserMap');
  const usernameQuerySnapshot = await usernameQueryRef.where('username', '==', username).get();

  if (!usernameQuerySnapshot.empty){
    console.log('Rejected due to username')
    res.send('Username already in use')
    return
  }

  
  //Series of post to all child directories
  const post0 = await userPassMap.set({

    password: password,
  })

  const post1 = await userEmailMap.set({

    email: email,
  })

  const post2 = await userPetMap.set({

    petName: petName,
  })

  const post3 = await petUserMap.set({

    username: username,
  })

  const post4 = await emailPassMap.set({

    password: password,
  })

  const post5 = await emailUserMap.set({

    username: username,
  })

  const post6 = await docRef.set({
    
    username: username,
    password: password,
    email: email,
    petName: petName,
  })


  res.status(200).send("User information was added.")

});





app.post('/server/register', (req, res) => {
  // console.log(req);
  const formData = req.body;

  console.log(res);
  console.log(formData)
  res.send(formData)
  

});


app.get('/server', (req, res) => {
    //either send as a print to their screen or a json packet
    //res.send({success: true}) <--print to screen
    console.log('Someone came to witness')

    res.json({"users":["userone","userTwo","userThree"]}) //json
});

app.get('/backend_check', (req, res) => {
  console.log("Backend Check Triggered")
  res.send("Backend Server Active")
})


app.listen(5000, () => {
  console.log('Server listening on port 5000')
});