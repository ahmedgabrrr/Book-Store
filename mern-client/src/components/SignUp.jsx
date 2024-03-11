import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState, useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthProvider';

const SignUp = () => {
	const { createUser } = useContext(AuthContext)
	const [err, setErr] = useState("err")

	const location = useLocation();
	const navigate = useNavigate();

	const from = location.state?.from?.pathname || "/";

	const handleSignUp = (event) => {
		event.preventDefault();
		const form = event.target;
		const fname = form.fname.value;
		const lname = form.lname.value;
		const email = form.email.value;
		const password = form.password.value;
		createUser(email, password).then((userCredential) => {
			const user = userCredential.user;
			alert("You Are Signed Up !")
			navigate(from, { replace: true })
		}).catch((err) => {
			const errorCode = err.code;
			const errorMessage = err.message;
			setErr(errorMessage)
		})
	}
	return (
		<div className='min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12'>

			<div className="flex justify-center items-center w-screen h-screen bg-white">

				<form onSubmit={handleSignUp} className="container mx-auto my-4 px-4 lg:px-20">

					<div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
						<div className="flex">
							<h1 className="font-bold uppercase text-5xl">Send us a <br /> message</h1>
						</div>
						<div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
							<input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
								type="text" placeholder="First Name*" id='fname' name='fname' />
							<input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
								type="text" placeholder="Last Name*" id='lname' name='lname' />
							<input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
								type="email" placeholder="Email*" id='email' name='email' />
							<input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
								type="password" placeholder="password*" id='password' name='password' />
						</div>
						<div className="my-2 w-1/2 lg:w-1/4">
							<button className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
								Sign Up
							</button>
						</div>
						<p>if you have an account please <Link to="/login" className='text-bold underline text-blue-700'>login</Link></p>
					</div>


				</form>
			</div>


		</div>
	)
}

export default SignUp