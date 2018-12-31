const { GraphQLServer } = require('graphql-yoga');
const mongoose = require('mongoose');
const resolvers = require ('./resolver/resolvers');
const typeDefs = require('./schema/types');
const path = require('path')

//connect to MongoDB with mongodb database with moongoose
const URI = 'mongodb://oleariyah:police8791@ds213472.mlab.com:13472/exercise'; // nothing on 27016
const OPTS = { useNewUrlParser: true };

//local db
//mongodb://localhost/exercise

mongoose.connect(URI, OPTS, function(err) {
    if (err) { return console.error(err);}
  }); 
  

 //options
 const opts = {
  endpoint: path.resolve(`${__dirname}`, "dist/public/indext.html")
} 
//run the server
const server = new GraphQLServer({ typeDefs, resolvers, opts })
mongoose.connection.once('open', () => 
server.start(() => console.log('Server is running on localhost:4000')));

//nodemon ./server.js localhost 4000