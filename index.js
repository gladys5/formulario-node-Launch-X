const express = require("express")
const path = require("path")
const app = express()
const router = express.Router()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/templates/index.html"))
})
router.get("/contacto", (req, res) => {
  res.sendFile(path.join(__dirname + "/templates/contacto.html"))
})
router.get("/perfil", (req, res) => {
  res.sendFile(path.join(__dirname + "/templates/perfil.html"))
})
router.post("/", (req, res) => {
  res.send(req.body)
})
app.use("/", router)
app.listen(process.env.port || 4000)
console.log("Running at Port: http://localhost:4000/")
