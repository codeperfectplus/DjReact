import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-dark bg-dark">
                    <a class="navbar-brand" href="#">
                        Todo Application With Django And React.
                        </a>
                    <span class="navbar-text">
                        CodePerfectPlus
                        </span>
                </nav>
            </div>
        )
    }
}

export default Navbar;
