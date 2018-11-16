import React from 'react';
import { render } from 'react-dom';
import {EscapeInput, DanderousHTML, UserHref, Eval} from './components';

render(
    <div> 
        <hr />
        <EscapeInput />
        <hr />
        <DanderousHTML />
        <hr />
        <UserHref />
        <hr />
        <Eval />
    </div>,
    document.getElementById('root')
);