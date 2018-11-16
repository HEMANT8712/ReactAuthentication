import React from 'react';
import {Link} from 'react-router-dom';

const Ramen = () =>(
    <div> 
        <h2> Ramen</h2>
        <Link to='/'> Home</Link>
        <div><img src='https://greatist.com/sites/default/files/SlowCooker-Pork-Ramen_0.jpg' /> </div>
    </div>
);

export default Ramen;