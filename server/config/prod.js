/*module.exports = {
  googleClientID: '294886226795-n3qie8o5744upm80svgl7jgeonobdq4v.apps.googleusercontent.com',
  googleClientSecret: 'v-HSrh82zMxnyV6Ucza0AKkF',
  mongoURI: 'mongodb://almiskea:password@ds163806.mlab.com:63806/emaily-prod',
  cookieKey: 'liy674cubhntvc709jniu6r447j5f8732643766v5b967tyrcgtehtrvwethgrwuy643'
}*/
module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  mongoURI: process.env.MONGO_URI,
  cookieKey:process.env.COOKIE_KEY
}
