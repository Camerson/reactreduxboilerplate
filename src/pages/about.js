import React from 'react'
import Main from '../layouts/main'
import Header from "../components/header";
import {about} from '../variables/seo'

class About extends React.Component {
    render(){
        return (
            <Main>
                <Header
                    title={about.title}
                />
                <h1>{about.title}</h1>
                <p>An example of head elements coming from variable files.</p>
            </Main>
        )
    }
}

export default About;
