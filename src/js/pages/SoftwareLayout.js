import React from "react";
import {fade_in, intro_left_to_right} from "../animations";


export default class SoftwareLayout extends React.Component {
    render(){
        return(
            <div id="landing" class="background-blue">
                <center>
                    <h1  class=" article-title sliding-left-right">Software</h1>
                    <p class=" fade-in article-paragraph">
                    With background in Computer Science and Computer Engineering, I enjoy working on backend-heavy web applications. I also enjoy working as a full-stack guy on different projects.
                </p>

                <p class=" fade-in article-paragraph">
                    I believe in slick, performant, lightweight, maintainable FOSS software.
                </p>


                <h2 class="fade-in article-title">Projects:</h2>

                <h3 class="fade-in article-subtitle">Dendrites</h3>
                <p class=" fade-in article-paragraph">
                    Simple back-propagation neural network tool that aims to be  straightfoward and very easy to use.
                    With its simple and intuitive API, dendrites is ideal for people who
                    want to play around with neural networks, or for people who
                    are just getting fammiliar with neural networks.
                </p>

                <h3 class="fade-in article-subtitle">Jam</h3>
                <p class=" fade-in article-paragraph">
                    Modern web jukebox for bars and restaurants. Jam was awarded title "Software Project of The Year" by Croatian Association for Computer Science (HSIN).
                </p>
                <h3 class="fade-in article-subtitle">rBiter</h3>
                <p class=" fade-in article-paragraph">
                    Software for fast and safe code evaluation, ment to be used on programming competitions. As a lead backend developer, I came up with a                  method of utilizing the LXC (Linux Containers)
                    feature of the Linux Kernel, for quick, isolated, lightweight, and safe code evaluation
                </p>

                <div class="space-20-vh"></div>
                </center>
        </div>
        );
    }

    componentDidMount(){
        /* After the layout rendered, run the animation */
        intro_left_to_right();
        fade_in();
    }
}
