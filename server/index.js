const { GraphQLServer } = require('graphql-yoga');
const express = require('express')
const path = require('path');
const mongoose = require('mongoose');
const resolvers = require ('./resolver/resolvers');
const typeDefs = require('./schema/types');

//connect to MongoDB with mongodb database with moongoose
const URI = 'mongodb://oleariyah:police8791@ds213472.mlab.com:13472/exercise'; // nothing on 27016
const OPTS = { useNewUrlParser: true };

//localhost db
/*
const URI = 'mongodb://localhost/exercise'; // nothing on 27016
const OPTS = { useNewUrlParser: true };
*/

mongoose.connect(URI, OPTS, function(err) {
    if (err) { return console.error(err);}
  }); 
  
//run the server
const server = new GraphQLServer({ typeDefs, resolvers })

server.express.use(express.static('./dist/public'));
server.express.get('*', (req, res) => {
  res.sendFile(path.resolve( "./dist/public", "index.html"))
});

const PORT = process.env.PORT || 4000

mongoose.connection.once('open', () => 
server.start(PORT, () => console.log(`Server is running on localhost:${PORT}`)));

//nodemon ./server.js localhost 4000