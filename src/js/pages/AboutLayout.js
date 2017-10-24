import React from "react";
import {intro_animation} from "../animations";
export default class AboutLayout extends React.Component {
    render(){
        return(
        <div id="landing" class="background-blue">
            <div id="title-container">
                <h1 class="sliding-middle-out">ABOUT ME</h1>
            </div>
        </div>
        );
    }

    componentDidMount(){
        /* After the layout rendered, run the animation */
        intro_animation();
    }
}
