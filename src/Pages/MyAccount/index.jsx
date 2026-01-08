import Layout from "../../components/layout/index.jsx";
import {useContext} from "react";
import {UserContext} from "../../Context/index.jsx";
import {NavLink} from "react-router-dom";

function MyAccount(){
   const userContext = useContext(UserContext)
    const logOut = () => {
       userContext.setUser(null)
        userContext.setIsLoggedin(false)
    }
    return(
        <Layout>
            <h2 className='text-center text-xl '>
                My Account
            </h2>
            <div className='flex flex-col mt-7 text-center w-80 border  p-7 border-black rounded-lg'>
                    <div className='flex flex-row justify-between '>
                        <span className='font-bold text-lg  text-left '>Name: </span>
                        <span className='font-semibold text-lg pr-10'> {userContext.user.name}</span>
                    </div>
                    <div  className='flex flex-row justify-between' >
                        <span className='font-bold text-lg'>Email:</span>
                        <span className='font-semibold text-lg pr-10'>{userContext.user.email}</span>
                    </div>

                <div className='underline mt-5 mt-4 '>
                <h3>Edit</h3>
                </div>
                <NavLink to='/sign-in'>
                    <div className='border border-black rounded-lg py-4 mt-4'
                    onClick={logOut}
                    >
                    <h3>log Out</h3>
                </div>
                </NavLink>

            </div>
        </Layout>
    )
}

export default MyAccount