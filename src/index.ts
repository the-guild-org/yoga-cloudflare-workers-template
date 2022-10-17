import { createYoga, createSchema } from "graphql-yoga";

const schema = createSchema({
  typeDefs: /* GraphQL */ `
    type PokemonSprites {
      front_default: String!
      front_shiny: String!
      front_female: String!
      front_shiny_female: String!
      back_default: String!
      back_shiny: String!
      back_female: String!
      back_shiny_female: String!
    }
    type Pokemon {
      id: ID!
      name: String!
      height: Int!
      weight: Int!
      sprites: PokemonSprites!
    }
    type Query {
      pokemon(id: ID!): Pokemon
    }
  `,
  resolvers: {
    Query: {
      pokemon: async (_parent, { id }) => {
        const result = await fetch(
          new Request(`https://pokeapi.co/api/v2/pokemon/${id}`),
          {
            // @ts-expect-error
            cf: {
              // Always cache this fetch regardless of content type
              // for a max of 1 min before revalidating the resource
              cacheTtl: 50,
              cacheEverything: true,
            },
          }
        );
        return await result.json();
      },
    },
  },
});

const yoga = createYoga({
  schema,
  graphiql: {
    defaultQuery: /* GraphQL */ `
      query samplePokeAPIquery {
        pokemon: pokemon(id: 1) {
          id
          name
          height
          weight
          sprites {
            front_shiny
            back_shiny
          }
        }
      }
    `,
  },
});

self.addEventListener("fetch", yoga);
