/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../style/signIn.css';
import { Button, Form } from 'react-bootstrap';
import Logo from '../assets/download.png';

const SignIn = () => {
	const [showPassword, setShowPassword] = useState(false);

	const navigate = useNavigate();

	

	return (
		<div className=' SignIn container d-flex flex-column align-items-center justify-content-center container-sm'>
			<div className='logo m-2'>
				<img className='img-fluid' style={{ width: "50px" }} src={Logo} alt='logo' />
			</div>
				<h1>Past Questions Hub</h1>
			<Form className='border rounded bg-white p-4 m-4 shadow'>
				<h3>Sign In</h3>
				<Form.Group
					className='mb-3'
					controlId='formBasicEmail'>
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type='email'
						placeholder='example@email.com'
						autoFocus
					/>
					<Form.Text className='text-muted'>
						We&apos;ll never share your email with anyone else.
					</Form.Text>
				</Form.Group>

				<Form.Group
					className='mb-3'
					controlId='formBasicPassword'>
					<Form.Label>Password</Form.Label>
					<Form.Control
						type='password'
						placeholder='Password'
					/>
				</Form.Group>
				<Form.Group
					className='mb-3 fs-6'
					controlId='formBasicCheckbox'>
					<Form.Check
						type='checkbox'
						label='Show password'
					/>
				</Form.Group>
				<Form.Group className='w-100'>
					<Button
						className='w-100'
						variant='primary'
						type='submit'>
						Sign In
					</Button>
				</Form.Group>
				<Form.Group>
					<Form.Text className='text-muted'>
						<Link to='/'>Forgot Password?</Link>
					</Form.Text>
				</Form.Group>
				<Form.Group>
					<Form.Text className='text-muted p-'>
						Don&apos;t have an account?
						<Link to='/createUser'> Sign Up</Link>
					</Form.Text>
				</Form.Group>
			</Form>
		</div>
	);
};

export default SignIn;
