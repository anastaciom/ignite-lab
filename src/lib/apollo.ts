import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4of2me523mn01z7fo5zh0su/master',
    cache: new InMemoryCache()
})