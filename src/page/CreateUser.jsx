import { useState } from 'react';
import logo from '../assets/download.png';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../style/createUser.css';
import { db } from '../firebaseConfig';
import {
	getAuth,
	createUserWithEmailAndPassword,
	updateProfile,
	sendEmailVerification,
} from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
const CreateUser = () => {
	let auth = getAuth();
	const [emailError, setEmailError] = useState('');
	const [usernameError, setUsernameError] = useState('');
	const [passwordError, setPasswordError] = useState('');
	const [confirmPasswordError, setConfirmPasswordError] = useState('');
	const [step, setStep] = useState(1);
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const [loading, setLoading] = useState(false);
	const [formData, setFormData] = useState({
		email: '',
		username: '',
		password: '',
		confirmPassword: '',
		institution: '',
		elective: '',
		level: '',
		programme: '',
	});

	const collectionRef = collection(db, 'users');

	const togglePassword = () => {
		setShowPassword(!showPassword);
	};

	const toggleConfirmPassword = () => {
		setShowConfirmPassword(!showConfirmPassword);
	};
	const nextStep = () => {
		clearErrors();
		setStep(step + 1);
	};

	const prevStep = () => {
		clearErrors();
		setStep(step - 1);
	};

	const clearErrors = () => {
		setEmailError('');
		setUsernameError('');
		setPasswordError('');
	};

	const clearForm = () => {
		setFormData({
			email: '',
			username: '',
			password: '',
			confirmPassword: '',
			institution: '',
			elective: '',
			level: '',
			programme: '',
		});
	};
	const isEmailValid = (email) => {
		const regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
		return regex.test(email);
	};

	const isUsernameValid = (username) => {
		const regex = /^[a-zA-Z]+[.]\d{6}$/;
		return regex.test(username);
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;

		setFormData((prevValue) => ({ ...prevValue, [name]: value }));

		if (name === 'email') {
			setEmailError(!isEmailValid(value) ? 'Email is invalid' : '');
		} else if (name === 'username') {
			setUsernameError(
				!isUsernameValid(value)
					? 'Username should be in the format: eg. ofce.123456'
					: '',
			);
		}
		const password = formData.password;
		const confirmPassword = formData.confirmPassword;
		if (password.length < 8) {
			setPasswordError('Password must be at least 8 characters');
		} else if (!/[A-Z]/.test(password)) {
			setPasswordError(
				'Password must contain at least one uppercase letter',
			);
		} else if (!/[a-z]/.test(password)) {
			setPasswordError(
				'Password must contain at least one lowercase letter',
			);
		} else if (!/\d/.test(password)) {
			setPasswordError('Password must contain at least one number');
		} else if (!/[!@#$%^&*]/.test(password)) {
			setPasswordError(
				'Password must contain at least one special character',
			);
		} else if (password !== confirmPassword) {
			setConfirmPasswordError('Passwords do not match');
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		const isValid = validateForm();
		if (isValid) {
			try {
				const userCredential = await createUserWithEmailAndPassword(
					auth,
					formData.email,
					formData.password,
				);
				const user = userCredential.user;
				await updateProfile(user, {
					displayName: formData.username,
				});
				await sendEmailVerification(user);
				await addDoc(collectionRef, {
					email: formData.email,
					username: formData.username,
					institution: formData.institution,
					elective: formData.elective,
					level: formData.level,
					programme: formData.programme,
				});
				clearForm();
				setLoading(false);
				setStep(1);
			} catch (error) {
				setLoading(false);
				if (error.code === 'auth/email-already-in-use') {
					setEmailError(
						'The email address is already in use by another account.',
					);
				} else if (error.code === 'auth/invalid-email') {
					setEmailError('The email address is invalid.');
				} else {
					console.error(
						'Unhandled error during account creation:',
						error,
					);
				}
			}
		}
	};

	const validateForm = () => {
		clearErrors();
		let isValid = true;
		if (
			!isEmailValid(formData.email) ||
			!isUsernameValid(formData.username)
		) {
			setEmailError('Email is invalid');
			setUsernameError(
				'Username should be in the format: eg. ofce.123456',
			);
			isValid = false;
		}
		if (formData.password.length < 8) {
			setPasswordError('Password must be at least 8 characters');
			isValid = false;
		} else if (!/[A-Z]/.test(formData.password)) {
			setPasswordError(
				'Password must contain at least one uppercase letter',
			);
			isValid = false;
		} else if (!/[a-z]/.test(formData.password)) {
			setPasswordError(
				'Password must contain at least one lowercase letter',
			);
			isValid = false;
		} else if (!/\d/.test(formData.password)) {
			setPasswordError('Password must contain at least one number');
			isValid = false;
		} else if (!/[!@#$%^&*]/.test(formData.password)) {
			setPasswordError(
				'Password must contain at least one special character',
			);
			isValid = false;
		} else {
			setPasswordError('');
		}

		if (formData.password !== formData.confirmPassword) {
			setConfirmPasswordError('Passwords do not match');
			isValid = false;
		} else {
			setConfirmPasswordError('');
		}

		return isValid;
	};

	return (
		<div className='createUser'>
			<div className='logo-container'>
				<img
					className='logo mx-auto d-block'
					src={logo}
					alt='logo'
				/>
				<h1 className='text-center'>Past Question Hub</h1>
			</div>
			<div className='form-container'>
				<form
					action='#'
					onSubmit={handleSubmit}
					id='form'>
					{step === 1 && (
						<div>
							<div className='form-group mt-2'>
								<label
									className='form-label'
									htmlFor='email'>
									Email address
								</label>
								<input
									name='email'
									required
									onChange={handleInputChange}
									value={formData.email}
									type='email'
									className='form-control form-control-lg'
									id='email'
									aria-describedby='emailHelp'
									placeholder='Enter email'
								/>
								<small
									id='emailHelp'
									className='form-text text-danger'>
									{emailError}
								</small>
							</div>
							<div className='form-group mt-2'>
								<label
									className='form-label'
									htmlFor='username'>
									Username
								</label>
								<input
									name='username'
									required
									onChange={handleInputChange}
									value={formData.username}
									type='text'
									className='form-control form-control-lg'
									id='username'
									placeholder='Enter username'
									aria-describedby='usernameHelp'
								/>

								<small
									id='usernameHelp'
									className='form-text text-danger'>
									{usernameError}
								</small>
							</div>
						</div>
					)}
					{step === 2 && (
						<div>
							<div className='form-group mt-2'>
								<label
									className='form-label'
									htmlFor='password'>
									Password
								</label>
								<input
									name='password'
									required
									onChange={handleInputChange}
									value={formData.password}
									type={showPassword ? 'text' : 'password'}
									className='form-control form-control-lg'
									id='password'
									placeholder='Password'
									aria-describedby='passwordHelp'
									autoComplete='new-password'
								/>
								<i
									className={
										showPassword
											? 'bi bi-eye-slash'
											: 'bi bi-eye'
									}
									onClick={togglePassword}></i>
								<small
									id='passwordHelp'
									className='form-text  text-danger'>
									{passwordError}
								</small>
							</div>
							<div className='form-group mt-2'>
								<label
									className='form-label'
									htmlFor='confirmPassword'>
									Confirm Password
								</label>
								<input
									name='confirmPassword'
									required
									onChange={handleInputChange}
									value={formData.confirmPassword}
									type={
										showConfirmPassword
											? 'text'
											: 'password'
									}
									className='form-control form-control-lg'
									id='confirmPassword'
									placeholder='Confirm Password'
									aria-describedby='confirmPasswordHelp'
									autoComplete='new password'
								/>
								<i
									className={
										showConfirmPassword
											? 'bi bi-eye-slash'
											: 'bi bi-eye'
									}
									onClick={toggleConfirmPassword}></i>
								<small
									id='confirmPasswordHelp'
									className='form-text text-danger'>
									{passwordError}
								</small>
							</div>
						</div>
					)}
					{step === 3 && (
						<div>
							<div className='form-group mt-2'>
								<label
									className='form-label'
									htmlFor='institution'>
									Institution
								</label>
								<input
									name='institution'
									required
									onChange={handleInputChange}
									value={formData.institution}
									type='text'
									className='form-control form-control-lg'
									id='institution'
									placeholder='Institution'
								/>
							</div>
							<div className='form-group mt-2'>
								<label
									className='form-label'
									htmlFor='programme'>
									Programme
								</label>
								<input
									name='programme'
									required
									onChange={handleInputChange}
									value={formData.programme}
									type='text'
									className='form-control form-control-lg'
									id='programme'
									placeholder='Programme'
								/>
							</div>
						</div>
					)}
					{step === 4 && (
						<div>
							<div className='form-group mt-2'>
								<label
									className='form-label'
									htmlFor='level'>
									Level
								</label>
								<input
									name='level'
									required
									onChange={handleInputChange}
									value={formData.level}
									type='text'
									className='form-control form-control-lg'
									id='level'
									placeholder='Level'
								/>
							</div>
							<div className='form-group mt-2'>
								<label
									className='form-label'
									htmlFor='elective'>
									Elective
								</label>
								<input
									name='elective'
									required
									onChange={handleInputChange}
									value={formData.elective}
									type='text'
									className='form-control form-control-lg'
									id='elective'
									placeholder='Elective'
								/>
							</div>
						</div>
					)}

					<div className='button-container'>
						{step > 1 && (
							<button
								type='button'
								onClick={prevStep}
								className='btn btn-secondary'>
								Previous
							</button>
						)}
						{step < 4 && (
							<button
								type='button'
								onClick={nextStep}
								className='btn btn-primary'>
								Next
							</button>
						)}
						{step === 4 && (
							<button
								type='submit'
								tabIndex={0}
								className='btn btn-success '>
								{loading
									? 'Creating Account...'
									: 'Create Account'}
							</button>
						)}
					</div>
				</form>
			</div>
		</div>
	);
};

export default CreateUser;
