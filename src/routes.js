import React from 'react';
import Layout from './hoc/Layout';
import {Switch} from 'react-router-dom';
import Home from './Components/home';
import SignIn from './Components/signin';
import Dashboard from './Components/admin/Dashboard';
import PrivateRoute from './Components/authRoutes/privateRoutes';
import PublicRoute from './Components/authRoutes/publicRoutes';
const Routes = (props) => {
  console.log(props )
  return (
   <Layout>
     <Switch>
       <PrivateRoute {...props} exact component={Dashboard}  path='/dashboard'/>
      
      <PublicRoute {...props}  restricted={true} exact component={SignIn} path='/sign_in'/>  
      <PublicRoute {...props}  restricted={false} exact component={Home} path='/'/> 
     </Switch>
   </Layout>
  );
}

export default Routes;
