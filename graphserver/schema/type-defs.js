const { gql } = require("apollo-server")

const typeDefs = gql `
type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: Nationality!
    friends: [User]
    favoriteMovies: [Movie]
  }

  enum Nationality {
    CANADA
    BRAZIL
    INDIA
    GERMANY
    CHILE
}

  type Movie {
    id: ID!
    name: String!
    yearOfPublication: Int!
    isInTheaters: Boolean!
  }
    
    type Query {
        users: [User!]!
        user(id: ID!): User
        movies: [Movie!]!
        movie(name: String!): Movie!
      }

      input CreateUserInput {
        name: String!
        username: String!
        age: Int!
        nationality: Nationality = BRAZIL
      }
      input UpdateUsernameInput {
        id:ID!
        newUsername:String!
      }
      
      type Mutation {
        createUser(input: CreateUserInput!): User
        updateUsername(input:UpdateUsernameInput!): User
        deleteUser(id:ID!):User
    }

    
    type UsersSuccesfulResult {
      users: [User!]!
    }
    type UsersErrorResult {
      message: String!
    }

    union UsersResult = UsersSuccesfulResult | UsersErrorResult


`

module.exports={typeDefs}
//type Query {users:[User!]!
//users: UsersResult
//}