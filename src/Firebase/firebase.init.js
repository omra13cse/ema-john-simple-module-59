import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
const initializeAuthentication = () =>{
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;
/*
steps for authentication
------
1.Initial setup
2.create web app
3.get configeration
4.initilaze firebase
5.Enable auth mode

step 2 :setup component
1.create Login Component
2.Create Register
3.Create route for login & Register

step 3:set auth system
1.set up Login method
2.Set up sign up method
3.user state
4.special observer.
5.necessary steps for firebase.
...................
step 4:create auth context (UseAuth)
1.create auth context.
2.create context provider.
3.use Auth provider.
4.provider context value.
5.use Auth hook.
---------------------
step 5: create private route
1. create private Route.
2.set private route

*/