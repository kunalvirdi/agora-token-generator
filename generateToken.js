const {RtcRole, RtcTokenBuilder} = require("agora-token");

const generateToken=(uid,channelName)=>{
	const appId=process.env.APP_ID
	const appCertificate= process.env.APP_CERTIFICATE
	const role=RtcRole.PUBLISHER

	const expirationTimeInSeconds=365*24*60*60
	const currentTimestamp=Math.floor(Date.now()/1000)

	const privilegeExpiredTs=currentTimestamp+expirationTimeInSeconds

	const token=RtcTokenBuilder.buildTokenWithUid(
		appId,
		appCertificate,
		channelName,
		uid,
		role,
		expirationTimeInSeconds,
		privilegeExpiredTs
	)
	return token
}

module.exports=generateToken