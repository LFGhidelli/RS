import './App.css';
import PostList from './Posts/postList';
import Nav from './Navbar/nav';
import Enviromental from './Enviromental/enviroment';
import Governance from './Governance/governance';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Route } from 'react-router-dom';
// import { Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <Nav/>
      <PostList/>
      <Enviromental/>
      <Governance/>
    </div>
  );
}

export default App;
