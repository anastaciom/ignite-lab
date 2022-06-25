import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: import.meta.env.VITE_URI,
    headers:{
        'authorization': `Bearer ${import.meta.env.VITE_TOKEN_API}`
    },
    cache: new InMemoryCache()
})