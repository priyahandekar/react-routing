import React, {Component} from 'react';
import { Link } from 'react-router-dom';
class ReactRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headerText: 'Welcome to React',
            contentText: 'In this lecture, we will learn about React Routers'
        }
    }
    // handleClick = () => {
    //     console.log("clicked");
    //     const history = BrowserRouter;
    //     history.push("/home");
    // }

    render() {
        return (
            <div className="App">
                <ul>
                    <li><Link to= "/home">Home</Link></li>
                    <li><Link to= "/contact">Contact</Link></li>
                    <li><Link to= "/about">About</Link></li>
                    <li><Link to= "/blog">Blog</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}

export default ReactRouter;

