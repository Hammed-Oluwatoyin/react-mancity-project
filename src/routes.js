import React from 'react';
import Layout from './hoc/Layout';
import {Switch} from 'react-router-dom';
import Home from './Components/home';
import SignIn from './Components/signin';
import Dashboard from './Components/admin/Dashboard';
import PrivateRoute from './Components/authRoutes/privateRoutes';
import PublicRoute from './Components/authRoutes/publicRoutes';
import AdminMatches from './Components/admin/matches';
import AddEditMatch from './Components/admin/matches/addEditMatch';     
import AdminPlayers from './Components/admin/players';
import AddEditPlayers from './Components/admin/players/addEditPlayers';
import TheTeam from './Components/theTeam';
import TheMatches from './Components/theMatches';
import NotFound from './Components/ui/not_found';
const Routes = (props) => {
  
  return (
    
   <Layout>
     <Switch>
     <PrivateRoute {...props} exact component={AddEditPlayers}  path='/admin_players/add_players'/>
     <PrivateRoute {...props} exact component={AddEditPlayers}  path='/admin_players/add_players/:id'/>
     
     <PrivateRoute {...props} exact component={AdminPlayers}  path='/admin_players'/>
     <PrivateRoute {...props} exact component={AddEditMatch}  path='/admin_matches/edit_match'/>
     <PrivateRoute {...props} exact component={AddEditMatch}  path='/admin_matches/edit_match/:id'/>
     <PrivateRoute {...props} exact component={AdminMatches}  path='/admin_matches'/>
       <PrivateRoute {...props} exact component={Dashboard}  path='/dashboard'/>
      
      <PublicRoute {...props}  restricted={true} exact component={SignIn} path='/sign_in'/>  
      <PublicRoute {...props}  restricted={false} exact component={TheTeam} path='/the_team'/> 
      <PublicRoute {...props}  restricted={false} exact component={TheMatches} path='/the_matches'/> 
      <PublicRoute {...props}  restricted={false} exact component={Home} path='/'/> 
      <PublicRoute {...props}  restricted={false}  component={NotFound}/> 
     </Switch>
   </Layout>
  );
}

export default Routes;
