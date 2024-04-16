/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import '../style/signIn.css';


const SignIn = () => {


	
	
	const [showPassword, setShowPassword] = useState(false);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
	
	};

	const togglePassword = () => {
		setShowPassword(!showPassword);
	};

	

	return (
		<div className='signInUser'>
			<div className=' col-md-6 col-sm-12'>
				<h1 className='text-center mb-4'>Past Question Hub</h1>
				<small className='error-container text-danger'>
					{}
				</small>
				<div className='signIn mt-2 form-container'>
					<form
						id='form'
						onSubmit>
						<div className='form-group mt-2'>
							<label
								className='form-label'
								htmlFor='email'>
								Email{' '}
							</label>
							<input
								className='form-control form-control-lg'
								type='email'
								name='email'
								id='acc-user'
								required
								onChange={handleInputChange}
								placeholder='Enter your email'
								value
								autoComplete='current-email'
							/>
						</div>
						<div className='form-group mt-2'>
							<label
								className='form-label'
								htmlFor='password'>
								Password{' '}
							</label>
							<input
								className='form-control form-control-lg'
								type={showPassword ? 'text' : 'password'}
								name='password'
								id='password'
								required
								onChange={handleInputChange}
								placeholder='Enter Password'
								value
								autoComplete='current-password'
							/>
							<i
								className={
									showPassword
										? 'bi bi-eye-slash'
										: 'bi bi-eye'
								}
								onClick={togglePassword}></i>
						</div>
						<div className='form-group forgot-password mt-2'>
							<a href='#'>Forget Password?</a>
						</div>
						<div className=' form-group mb-2 button-container'>
							<button
								type='submit'
								className='btn btn-primary form-control'>
								{/* { ? 'Signing in...' : 'Sign in'} */} Sign In
							</button>
						</div>
					</form>
					<div className='createAccount'>
						<p>
							Don&apos;t have an account?
							<Link
								className='m-2'
								to='/createUser'>
								Create Account
							</Link>
						</p>
						<Outlet />
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignIn;
