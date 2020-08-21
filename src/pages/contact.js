import React from 'react';
import Main from "../layouts/main";
import Header from "../components/header";

class Contact extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            newcontact: {
                name: '',
                password: '',
                newsletter: true
            },
            submitted: false,
            showpassword: false
        }
        this.togglePassword = this.togglePassword.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleCheckChange = this.handleCheckChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    togglePassword = () => this.setState({showpassword: !this.state.showpassword})

    handleChange = e => {
        let newcontact = this.state.newcontact
        let name = e.target.name;
        newcontact[name] = e.target.value;
        this.setState({newcontact})
    }

    handleCheckChange = e => {
        let newcontact = this.state.newcontact
        let name = e.target.name;
        newcontact[name] = !newcontact[name];
        this.setState({newcontact})
    }

    updateSubmitted = () => {
        this.setState({submitted: false})
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state.newcontact)
        this.setState({
            newcontact: {
                name: '',
                newsletter: true
            },
            submitted: true
        }, () => {
            setTimeout(this.updateSubmitted, 3000)
        })
    }
    render(){
        return (
            <Main>
                <Header
                    title={"Contact Us"}
                />
                {this.state.submitted ? <p>Submitted Form</p> : ''}
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Name</label>
                        <input
                            type={'text'}
                            name={'name'}
                            value={this.state.newcontact.name}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label>
                            <input
                                type={'checkbox'}
                                name={'newsletter'}
                                checked={this.state.newcontact.newsletter}
                                onChange={this.handleCheckChange}
                            />
                            Newsletter
                        </label>
                    </div>
                    <div>
                        <label>Password</label>
                        <input
                            type={this.state.showpassword ? 'text' : 'password'}
                            name={'password'}
                            value={this.state.newcontact.password}
                            onChange={this.handleChange}
                        />
                        <button
                            type={'button'}
                            onClick={this.togglePassword}
                        >
                            {this.state.showpassword ? 'Hide' : 'Show'} Password
                        </button>
                    </div>
                    <button type={'submit'}>Submit Form</button>
                </form>
            </Main>
        )
    }
}

export default Contact;
