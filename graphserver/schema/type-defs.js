const { gql } = require("apollo-server")

const typeDefs = gql `

type Country{
  id:ID!
  name: String!
  regions:[Regions]
  mainGrape:[MainGrape]
}

type Style{
  id:ID!
  type: String!
  grapes:[Grape]
}

type Regions {
  id: ID!
  name: String!  
}


type MainGrape{
  id:ID!
  name:String!
  pairing: [Pairing]
}

type Pairing {
  id: ID!
  name: String!   
}

type Grape {
  id: ID!
  name: String!  
  pairing:[Pairing]
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
        style(name:String!):Style!
       styles:[Style!]!  
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