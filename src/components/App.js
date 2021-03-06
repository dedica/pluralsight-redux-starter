// This component handles the app-template used on every page
import React, {PropTypes} from 'react';
import Header from './common/Header';

class App extends React.Component {
    render() {
        return (   
            <div className="container-fluid">
                <Header />
                {this.props.children}
            </div>
        );
    }
}


/* 
prop-type validation below, since we expect to receive child components.
Children are required prop-type on 
this component. */ 
App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;