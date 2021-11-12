import './App.css';
import { 
  ApolloClient, 
  InMemoryCache, 
  ApolloProvider, 
  HttpLink, 
  from } from '@apollo/client'
import { onError } from '@apollo/client/link/error';
import GetTodos from './components/GetTodos';
import TodoForm from './components/TodoForm';


const errorLink = onError(({ graphQLErrors, networkError }) => {  // errorLink is a function for handling graphql errors
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});


const link = from([   // link is an array of links
  errorLink,
  new HttpLink({
    uri: process.env.REACT_APP_LOCAL_URI,
  })
]);


const client = new ApolloClient({   // client is an instance of ApolloClient
  cache: new InMemoryCache(),
  link: link
});

function App() {  // App is a function that returns JSX
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Apollo-React-Todo-App!</h1>
        <TodoForm />
        <GetTodos />
      </div>
    </ApolloProvider>
  );
}

export default App; // export App
