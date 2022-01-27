const { UserList, MovieList, Grapes, Countries,Pairing, Styles } = require("../FakeData")
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
        updateCountry:(parent,args)=>{
            const {id, newCountry}=args.input;
            let countryUpdated;
            Countries.forEach((country)=>{
                if(country.id===Number(id)){
                    country.name=newCountry;
                    countryUpdated=country;
                }
            });
            return countryUpdated;
        },
        createNewGrape:(parent,args)=>{
            const grape = args.input;
            const lastId = Grapes[Grapes.length-1].id;
            grape.id=lastId+1;
            Grapes.push(grape);
            return grape;
        },
        createCountry:(parent,args)=>{
            const country = args.input;
            const lastId = Countries[Countries.length - 1].id;
            country.id=lastId+1;
            Countries.push(country);
            return country;
        },
        
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
        updateGrapeName: (parent, args) => {
            const { id, newGrape } = args.input;
            let grapeUpdated;
            Grapes.forEach((grape) => {
                if (grape.id === Number(id)) {
                    grape.name = newGrape;
                    console.log(grape.name)
                    grapeUpdated = grape;
                    
                }
            })
            return grapeUpdated;
        },
        deleteGrape: (parent, args) => {
            const id = args.id
            _.remove(Grapes, (grape) => grape.id === Number(id))
            return null
        },
        deleteCountry:(parent,args)=>{
            const id=args.id;
            _.remove(Countries,(country)=>country.id===Number(id));
            return null;
        },
    
        deleteUser: (parent, args) => {
            const id = args.id
            _.remove(UserList, (user) => user.id === Number(id))
            return null
        }
    },
    Query: {
        style:(parent,args)=>{
            const name = args.name;
            const style = _.find(Styles,{name})
            return style;
        },
        styles:()=>{
            return Styles
        },
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