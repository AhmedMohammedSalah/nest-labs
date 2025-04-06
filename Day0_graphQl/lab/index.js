const { ApolloServer, gql } = require('apollo-server');
const mongoose = require('mongoose');
const Book = require ('./Models/Book');
const User = require('./Models/User');
mongoose.connect('mongodb://localhost:27017/graphql').then(()=>console.log("connected successfully")).catch((err)=>console.error(err))

const typeDefs = gql`

type User{
    id: ID
    name: String
    email: String
    password: String
    role: String
    isVerified: Boolean

}


type Query{

    users: [User]
    user(id: ID!): User
}

type Mutation{

    addUser(name: String!, email: String!, password: String!, isVerified: Boolean, role: String ) :User
    deleteUser(id: ID!): String
}

`

const resolvers = {
    Query:{
        users: async()=>{
            const allUsers = await User.find({});
            return allUsers;
        },

        user: async (_, args)=>{
            const {id} = args;
            const singleUser = await User.findById(id);
            return singleUser;
        }
    },
    Mutation:{

        addUser: async (_, args)=>{
            const { name, email, password, isVerified, role} = args;
            const newUser = new User({name, email, password, isVerified, role});
            const savedUser = await newUser.save()
            return newUser;
        },
        deleteUser: async (_, args)=>{
            const {id} = args;
            const deletedUser = await User.findByIdAndDelete(id)
            if(deletedUser){
                return 'deleted Successfully';
            }else{
                return 'couldn\'t delete';
            }
        }
    }
}


const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen({port:4000, path:'/graphql'}).then(({url})=>{
    console.log(`${url}`);
});