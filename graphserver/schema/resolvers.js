const { UserList, MovieList, Grapes, Countries,Pairing } = require("../FakeData")
const _ = require("lodash")

const resolvers = {
    UsersResult: {
        __resolveType(obj){
            if (obj.users){
                return "UsersSuccesfulResult"
            }
            if (obj.message){
                return "UsersErrorResult"
            }
            return null;
        }
    },
    Mutation: {
        createUser: (parent, args) => {
            const user = args.input;
            const lastId = UserList[UserList.length - 1].id;
            user.id = lastId + 1;
            UserList.push(user);
            return user;
        },
        updateUsername: (parent, args) => {
            const { id, newUsername } = args.input;
            let userUpdated;
            UserList.forEach((user) => {
                if (user.id === Number(id)) {
                    user.username = newUsername;
                    userUpdated = user;
                }
            })
            return userUpdated;
        },
        deleteUser: (parent, args) => {
            const id = args.id
            _.remove(UserList, (user) => user.id === Number(id))
            return null
        }
    },
    Query: {
        grapes: () => {
            return Grapes;
        },
        grape:(parent, args)=>{
            const name = args.name;
            const grape = _.find(Grapes,{name})
            return grape
        },
        countries:()=>{
            return Countries
        },
        country:(parent,args)=>{
            const name = args.name;
            const country = _.find(Countries,{name})
            return country
        },
        users: () => {
            return UserList;
            //if (UserList) return {users: UserList}
            //return {message:"Error"}
        },
        user: (parent, args, context, info) => {
            const id = args.id;
            const user = _.find(UserList, { id: Number(id) });
            return user;
        },
        //Movie resolvers
        movies: () => {
            return MovieList;
        },
        movie: (parent, args) => {
            const name = args.name;
            const movie = _.find(MovieList, { name });
            return movie;
        }
    },
    User: {
        favoriteMovies: () => {
            return _.filter(MovieList, (movie) =>
                movie.yearOfPublication >= 2000 && movie.yearOfPublication <= 2010)
        }
    }
}


module.exports = { resolvers }