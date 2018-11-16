import React from 'react';
import {Link} from 'react-router-dom';
import Auth from './../Auth';


const Home = () =>(
    <div> 
        <h2> Foodie Hub</h2>
        <div><Link to='/ramen'> Ramen</Link> </div>
        <div><Link to='/sushi'> Sushi</Link> </div>
    </div>
);

const App = props =>(
    <div>{
        props.auth.isAuthenticated() ? <Home /> : <div> log in </div>
    }</div>
      
);
export default App;