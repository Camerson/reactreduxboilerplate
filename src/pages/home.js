import React from 'react'
import {connect} from 'react-redux'
import Main from '../layouts/main'
import Header from "../components/header";

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: ''
        }
    }

    addOne = () => {
        this.props.increasecount()
        // const increaseCount = this.props.increasecount()
        // const increaseCountState = this.setState({count: this.state.count + 1})
        // Promise.all([increaseCount, increaseCountState])
        //     .then(values => {
        //         return values
        //     })
        //     .catch(err => {
        //         console.log(err)
        //     })
    }

    removeOne = () => {
        this.props.decreasecount()
        // const decreaseCount = this.props.decreasecount()
        // const decreaseCountState = this.setState({count: this.state.count - 1})
        // Promise.all([decreaseCount, decreaseCountState])
        //     .then(values => {
        //         console.log(values)
        //     })
        //     .catch(err => {
        //         console.log(err)
        //     })
    }

    componentDidMount(){
        this.setState({title: 'Home', count: this.props.count})
    }
    render(){
        return (
            <Main>
                <Header
                    title={this.state.title}
                />
                <h1>{this.state.title}</h1>
                <p>An example of head elements coming from state.</p>

                <div style={{display: 'flex', alignItems: 'center', alignContent: 'center'}}>
                    <button onClick={this.removeOne}>Decrease</button>
                    <p>{this.props.counter}</p>
                    <button onClick={this.addOne}>Increase</button>
                </div>
            </Main>
        )
    }
}

const mapStateToProps = state => {
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        increasecount: () => dispatch({
            type: 'INCREASE_COUNT'
        }),
        decreasecount: () => dispatch({
            type: 'DECREASE_COUNT'
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
