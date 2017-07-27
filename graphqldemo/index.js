const schema = require('./schema')
const apolloServerFunctions = require('apollo-server-functions');

const graphqlOptions = { schema: schema};
const graphiqlOptions = { endpointURL: '/api/graphql'};

module.exports = apolloServerFunctions.graphqlAndGraphiqlFunctions(graphqlOptions, graphiqlOptions);
