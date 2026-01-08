import Layout from "../../components/layout/index.jsx";
import { NavLink} from "react-router-dom";
import {useContext} from "react";
import {UserContext} from "../../Context/index.jsx";

function SignIn(){
   const userContext = useContext(UserContext)

    const login = (event) => {
       const email = document.getElementById('email').value
        const password = document.getElementById('password').value;
       const verifyUser = userContext.registeredUsers.filter
       (registeredUser =>
       registeredUser.email === email)
       const isEmailRegistered = userContext.registeredUsers === []? false:
           verifyUser.length > 0
        if(!isEmailRegistered){
            event.preventDefault();
            window.alert('wrong Password');
            return
        }
        userContext.setUser(verifyUser[0])
        userContext.setIsLoggedin(true);
        localStorage.setItem('user', JSON.stringify(verifyUser[0]))
        localStorage.setItem('isLoggedIn', 'true')
   }


    return(
        <Layout>
            <h2 className='text-center text-xl '> Welcome</h2>
            <div className='flex flex-col text-start w-80 border  m-7 p-7 border-black rounded-lg'>
                <div className='pt-6 flex flex-row justify-between mb-8'> <h3 className='font-semibold text-medium text-left'>Your Email: </h3>
                <input id='email' className='border border-black rounded-lg p-1 w-35' placeholder='add your email ' required></input>
                </div>
                <div  className='pt-6 flex flex-row justify-between mb-8'><h3 className='font-semibold text-medium '>Your Password:</h3>
                <input id='password' type='password' className='border border-black rounded-lg p-1 w-35'  placeholder='your Password'></input>
                </div>
                <NavLink to='/'>
                    <div onClick={login} className='py-4 bg-black text-white cursor-pointer rounded-lg text-center'><h3>Log In</h3></div>
                </NavLink>

                <div className='py-4 cursor-pointer underline text-sm text-center '><h3 className='font-semibold text-medium '>Forgot my Password</h3></div>
                <NavLink to='/sign-up'>
                    <div  className='py-4 border border-black text-black cursor-pointer rounded-lg text-center'>
                        <h3>Sign Up</h3>
                    </div>
                </NavLink>

            </div>
        </Layout>
    )
}
export default SignIn