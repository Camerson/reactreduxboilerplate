import React from 'react'
import Main from '../layouts/main'
import Header from "../components/header";
import {config} from "../config";

class Dynamic extends React.Component {
    render(){
        return (
            <Main>
                <Header
                    title={config.dynamicpagetitle}
                />
                <h1>Dynamic Page - {this.props.match.params.slug}</h1>
                <p>Page Title From Environment Variable</p>
            </Main>
        )
    }
}

export default Dynamic;
