import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom';
import CityLogo from '../ui/icons';
import {firebase} from '../../firebase'




 class Header extends Component {
   state ={
        currentUser:null
    }
    unsubscribeFromAuth = null;

    componentDidMount(){
        this.unsubscribeFromAuth =firebase.auth().onAuthStateChanged(async userAuth => this.setState({currentUser:userAuth}))

    
    }
    componentWillUnmount (){
        this.unsubscribeFromAuth =null  ;
    }
    render() {
        
        return (
           <AppBar
                position='fixed'
                style={{
                        backgroundColor:'#98c5e9',
                        boxShadow: 'none',
                        padding:'10px 0',
                        borderBottom:'2px solid #00285e',
                        fontFamily: 'inherit'

                }}
           >
               <Toolbar style={{display:'flex'}}>
                   <div style={{flexGrow:1}}>
                       <div className='header_logo'>
                           <CityLogo 
                           link={true}
                           linkTo='/'
                           width='70px'
                           height='70px'
                           />
                       </div>
                   </div>
                   <NavLink to='/the_team'>
                    <Button color='inherit'>The Team</Button>
                </NavLink>
                <NavLink to='/the_matches'>
                    <Button color='inherit'>Matches</Button>
                </NavLink>
                { this.state.currentUser ? null :

                    <NavLink to='/sign_in'>
                    <Button color='inherit'>Sign In</Button>
                    </NavLink> 
                }
                
               
                
               
                
                
               </Toolbar>
               
           </AppBar>
        )
    }
}
export default Header;