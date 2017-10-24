import React from "react";
import { Link } from "react-router-dom";

import {intro_animation} from "../animations";
export default class IndexLayout extends React.Component {
    render(){
        return(
        <div id="landing" class="background-blue">
            <div id="title-container">
                <h1 class="sliding-middle-out">Stjepan Brkić</h1>
            </div>
            <div id="links-container">
                <Link class="link" to='/software'>Software</Link>
                <span class="link">Photography</span>
                <span class="link">Other</span>
                <span class="link">Blog</span>
                <Link class="link" to='/about'>About</Link>
            </div>
        </div>
        );
    }

    componentDidMount(){
        /* After the layout rendered, run the animation */
        intro_animation();
    }
}
