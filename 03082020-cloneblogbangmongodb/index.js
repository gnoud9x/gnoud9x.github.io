const express = require('express')
const ejs = require('ejs')
const { ObjectID } = require('mongodb')
const MongoClient = require('mongodb').MongoClient
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

let db

MongoClient.connect("mongodb://localhost:27017", (err, client) => {
  if (err) {
    return console.log(err)
  }
  db = client.db("blog")
  console.log("Đã kết nối tới database")
})

app.listen(3000)

app.get("/blog", function (req, res) {
  let blogList = db.collection("newblog").find().toArray().then(results => {
    console.log(results)
    res.render("index.ejs", { blogList: results })
  }).catch(error => {
    console.error(error)
  })
})

app.get("/blog/:blogId", function (req, res) {
  let id = req.params["blogId"]
  let objectId = require('mongodb').ObjectID
  db.collection("newblog").findOne({_id: new ObjectID(id)}).then(results => {
    console.log(results)
    res.render("blog.ejs", { blog: results })
  }).catch(error => {
    console.error(error)
  })
})

app.post("/new-blog", function(req, res) {
  console.log("Đã nhận request", req.body)
  db.collection("newblog").insertOne(req.body).then(results => {
    console.log(results)
  }).catch(error => {
    console.error(error)
  })
  res.redirect('/blog')
})

app.post("/update-blog", function(req, res) {
  console.log("Đã nhận request", req.body)
  let objectId = require('mongodb').ObjectID
  db.collection("newblog").findOneAndUpdate( 
    {_id: new objectId(req.body.blogId)}, 
    {$set: {image: req.body.blogImage, title: req.body.blogTitle, date: req.body.blogDate}
  }).then(results => {
    console.log(results)
  }).catch(error => {
    console.error(error)
  })
  res.redirect('/blog')
})

app.post("/delete-blog", function(req, res) {
  console.log("Đã nhận request", req.body)
  let objectId = require('mongodb').ObjectID
  db.collection("newblog").deleteOne( 
    {_id: new objectId(req.body.blogId)}).then(results => 
  {console.log(results)
  }).catch(error => {
    console.error(error)
  })
  res.redirect('/blog')
})