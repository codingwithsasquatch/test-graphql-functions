const typeDefs = `
type Planet {
  name: String
  diameter: Float
}

type Query {
  planets: [Planet]
}

`;

const planets = [
  { name: 'Venus', diameter: 0.949},
  { name: 'Mercury', diameter: 0.382},
  { name: 'Earth', diameter: 1.0},
  { name: 'Mars', diameter: 0.532},
  { name: 'Jupiter', diameter: 11.209},
  { name: 'Saturn', diameter: 9.449},
  { name: 'Uranus', diameter: 4.007},
  { name: 'Neptune', diameter: 3.883},
]

const resolvers = {
  Query: {
    planets: () => planets
  }
}

const makeExecutableSchema = require('graphql-tools').makeExecutableSchema;

const schema = makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers,
});

module.exports = schema;