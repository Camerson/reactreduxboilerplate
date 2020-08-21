import React from 'react'
import Nav from "../components/nav";
import Footer from "../components/footer";

class Main extends React.Component {
    render(){
        return (
            <React.Fragment>
                <Nav />
                {this.props.children}
                <Footer />
            </React.Fragment>
        )
    }
}

export default Main;
