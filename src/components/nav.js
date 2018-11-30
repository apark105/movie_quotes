import React, { Component, Fragment } from 'react'; 
import { Link } from 'react-router-dom';
import { userSignOut } from '../actions';
import { connect } from 'react-redux'; 

class Nav extends Component {
    renderLink(){
        const { auth, signIn, signOut } = this.props;

        if(auth){
            return (
                <Fragment>
                    <li>
                        <Link to='/secret-list'>Secret-List</Link>
                    </li>
                    <li>
                        <Link to='/quotes'>Quotes</Link>
                    </li>
                    <li>
                        <button onClick={signOut} className="btn yellow darken-2">Sign Out</button>
                    </li>
                </Fragment> 
            )
            
        }
        return ( 
            <Fragment>
                <li>
                    <Link to='/sign-in'>Sign In</Link>
                </li>
                <li>
                    <Link to='/sign-up'>Sign Up</Link>
                </li>
            </Fragment>
        )
    }

    render() {
        const style = {
            padding: '0 8px' 
        }
        console.log('User Auth: ', this.props.auth);
        return (
            <nav className="light-blue darken-4" style={style}>
                <div className="nav-wrapper">
                    <Link to='/' className='brand-logo'>Movie Quotes!</Link>

                    <ul className='right'>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='/public-list'>Public List</Link>
                        </li>
                        <li>
                            {this.renderLink()}
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

function mapStateToProps(state) {
    return {
        auth: state.user.auth
    }
}

export default connect(mapStateToProps, {
    signOut: userSignOut
})(Nav); 