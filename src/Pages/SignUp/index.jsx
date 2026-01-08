import Layout from "../../components/layout/index.jsx";
import {useContext} from "react";
import {UserContext} from "../../Context/index.jsx";
import {NavLink} from "react-router-dom";

function SignUp() {
    const userContext = useContext(UserContext);
    const createUser = (event) => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const verifyUser = userContext.registeredUsers.filter(registeredUser =>
        registeredUser.email === email)
        const isEmailRegistered = userContext.registeredUsers === []? false:
            verifyUser.length > 0
        if(isEmailRegistered){
            event.preventDefault();
            window.alert('This Email is already registered, use Another address');
            return
        }
        if(name === ''){
            event.preventDefault();
            window.alert('name required');
            return
        }
        if(email === ''){
            event.preventDefault();
            window.alert('email required');
            return
        }
        if(password === ''){
            event.preventDefault();
            window.alert('password required');
            return
        }
        const newUser = {
            'name': name,
            'email': email,
            'passowrd': password
        }
        userContext.setUser(newUser);
        userContext.setIsLoggedin(true);
        userContext.setRegisteredUsers([...userContext.registeredUsers, newUser])
        localStorage.setItem('user', JSON.stringify(newUser))
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('registeredUsers', JSON.stringify([...userContext.registeredUsers, newUser]))
    }
    return(
        <Layout>
            <h2 className='text-center text-xl '> Welcome</h2>
            <div className='flex flex-col text-start w-80 border m-7 p-7 border-black rounded-lg'>
                <div className='pt-6 flex flex-row justify-between mb-5'> <h3 className='font-semibold text-medium text-left'>Name </h3>
                    <input className='border border-black rounded-lg p-1 w-35' placeholder='your name' id='name' required></input>
                </div>
                <div className='pt-6 flex flex-row justify-between mb-5'> <h3 className='font-semibold text-medium text-left'>Your Email: </h3>
                    <input className='border border-black rounded-lg p-1 w-35' type='email' placeholder='add your email ' id='email'></input>
                </div>
                <div  className='pt-6 flex flex-row justify-between mb-5'><h3 className='font-semibold text-medium '>Your Password:</h3>
                    <input className='border border-black rounded-lg p-1 w-35'  placeholder='your Password' id='password'  type='password'></input>
                </div>
                <NavLink to='/'>
                    <div onClick={createUser} className='py-4 bg-black text-white cursor-pointer rounded-lg text-center'><h3>Create Account</h3></div>

                </NavLink>

            </div>

        </Layout>
    )
}

export default SignUp