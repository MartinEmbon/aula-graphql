const { gql } = require("apollo-server")

const typeDefs = gql `

type Grape {
  id: ID!
  name: String!  
  pairing:[Pairing]
}

type Pairing {
  id: ID!
  name: String!   
}

type Country{
  id:ID!
  name: String!
  regions:[Regions]
  mainGrape:[MainGrape]
}

type MainGrape{
  id:ID!
  name:String!
  pairing: [Pairing]!
}

type Regions {
  id: ID!
  name: String!  
}

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
        countries:[Country!]!
        country(name:String!):Country!
        grapes:[Grape!]!  
        grape(name:String!):Grape!  
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