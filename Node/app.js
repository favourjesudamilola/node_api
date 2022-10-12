const express = require('express')
const app = express()
app.use(express.json({extended:true}))
const port = 5000


const httpServer = require('http').createServer(app);
let PORT;
process.env.STATUS === 'production'
? (PORT = process.env.PROD_PORT)
: (PORT = process.env.DEV_PORT);
httpServer.listen(PORT, () => {
  console.log(`Server in ${process.env.STATUS} mode, listening on *:${PORT}`);
});

// client error / server error

let firstDifference = {
  clientError: "an error with the first digit as 4 is a client error",
  serverError: "an error with the first digit as 5 is a server error",
};

let secondDifference = {
  clientError: "a result of http request sent by a user",
  serverError: "server error occurs when failure to render a page falls on the server",
};

let thirdDifference = {
  clientError: "a client error is caused by the user",
  serverError: "a server error is caused by the server",
};

let fourthDifference = {
  clientError: "can be fixed when the user inputs the correct request",
  serverError: "can be fixed when the webpage is reloaded",
};

let fifthDifference = {
  clientError: "are also referred to as client side error",
  serverError: "are also referred to as server side error",
};

// endpoint for status code
app.get('/ok', (req, res)=>{
  res.status(200).json({status:"OK"})
})

app.get('/bad-request', (req, res)=>{
  res.status(400).json({status:"BAD REQUEST"})
})

app.get('/unauthorized', (req, res)=>{
  res.status(401).json({status:"UNAUTHORIZED"})
})

app.get('/not-acceptable', (req, res)=>{
  res.status(406).json({status:"NOT ACCEPTABLE"})
})

app.get('/not-found', (req, res)=>{
  res.status(404).json({status:"NOT FOUND"})
})

app.get('/forbidden', (req, res)=>{
  res.status(401).json({status:"FORBIDDEN"})
})

app.get('/internal-server-error', (req, res)=>{
  res.status(500).json({status:"INTERNAL SERVER ERROR"})
})

app.get('/bad-gateway', (req, res)=>{
  res.status(502).json({status:"BAD GATEWAY"})
})

app.get('/service-unavailable', (req, res)=>{
  res.status(503).json({status:"SERVICE UNAVAILABLE"})
})

app.get('/not-implemented', (req, res)=>{
  res.status(501).json({status:"NOT IMPLEMENTED"})
})

app.get('/upgrade-required', (req, res)=>{
  res.status(426).json({status:"UPGRADE REQUIRED"})
})

app.get('/too-many-requests', (req, res)=>{
  res.status(429).json({status:"TOO MANY REQUESTS"})
})

app.get('/request-timeout', (req, res)=>{
  res.status(408).json({status:"REQUEST TIMEOUT"})
})

app.get('/not-modified', (req, res)=>{
  res.status(304).json({status:"NOT MODIFIED"})
})

app.get('/found', (req, res)=>{
  res.status(302).json({status:"FOUND"})
})

app.get('/created', (req, res)=>{
  res.status(201).json({status:"CREATED"})
})

app.get('/reset-content', (req, res)=>{
  res.status(205).json({status:"RESET CONTENT"})
})

app.get('/network-read-timeout-error', (req, res)=>{
  res.status(598).json({status:"NETWORK READ TIMEOUT ERROR"})
})

app.get('/use-proxy', (req, res)=>{
  res.status(305).json({status:"USE PROXY"})
})

app.get('/temporary-redirect', (req, res)=>{
  res.status(307).json({status:"TEMPORARY REDIRECT"})
})

// endpoint

app.get('/', (req, res) => {
  res.json('Hello World!')
})

app.listen(port, () => {
  console.log(`Favour's app listening on port ${port}`)
})