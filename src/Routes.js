import React from 'react';
import { Switch } from 'react-router';
import { Route } from 'react-router-dom';
import ReactRouter from './container/ReactRouter';
import Home from './container/Home';
import Contact from './container/Contact';
import Blog from './container/Blog';
import About from './container/About';
import BlogSingle from './container/BlogSingle';

class Routes extends React.Component {
    render() {
        return (
            <Switch>
           
                <Route exact path="/" component={ReactRouter} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/blog" component={Blog} />
                    <Route exact path="/blog/:id" component={BlogSingle}/>
        
             </Switch>
            
        );
    }
};
export default Routes;
