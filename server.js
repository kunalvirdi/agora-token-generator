const generateToken=require('./generateToken')
const express=require('express')
require('dotenv').config()
const app=express()
const cors=require('cors')
app.use(express.json())
app.use(cors())
app.post('/generate-token',(req,res)=>{
	const {uid,channelName}=req.body;
	const token=generateToken(uid,channelName)
	res.json({rtcToken:token})
})

app.listen(process.env.port || 8080,()=>{
	console.log("Server is running")
})
