/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Container, Form, Button, Card, Collapse } from 'react-bootstrap';
import { EmailAuthProvider, updateProfile, getAuth } from 'firebase/auth';


const Settings = ({user}) => {
	
	const [updateDetailsOpen, setUpdateDetailsOpen] = useState(false);
	const [changePasswordOpen, setChangePasswordOpen] = useState(false);
	const [userDetails, setUserDetails] = useState({
		username: user.displayName,
		email: user.email,
		currentPassword: '',
		newPassword: '',
		confirmPassword: '',
	});
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setUserDetails((prev) => ({ ...prev, [name]: value }));
	};
	const handleUpdateDetails = async (e) => {
		e.preventDefault();
		const auth = getAuth();
		try {
			await updateProfile(auth.currentUser, {
				displayName: userDetails.username
			});
			alert('Details updated successfully!');
		} catch (error) {
			console.log(error.message);
		}
	};
	const handleChangePassword = async (e) => {
		e.preventDefault();
		if (userDetails.newPassword !== userDetails.confirmPassword) {
			alert('Passwords do not match!');
			return;
		}
		try {
			await user.reauthenticateWithCredential(
				EmailAuthProvider.credential(
					user.email,
					userDetails.currentPassword
				)
			);
			await user.updatePassword(userDetails.newPassword);
			alert('Password changed successfully!');
		} catch (error) {
			console.log(error.message);
		}
	};

	return (
		<Container className='mt-4'>
			<Card>
				<Card.Body>
					<Card.Title>
						<Button
							variant='link'
							onClick={() =>
								setUpdateDetailsOpen(!updateDetailsOpen)
							}
							aria-controls='update-details'
							aria-expanded={updateDetailsOpen}>
							Update Details
						</Button>
					</Card.Title>
					<Collapse in={updateDetailsOpen}>
						<div id='update-details'>
							<Form onSubmit={handleUpdateDetails}>
								<Form.Group
									className='mb-3'
									controlId='formUsername'>
									<Form.Label>Username</Form.Label>
									<Form.Control
										type='text'
										name='username'
										value={userDetails.username}
										onChange={handleInputChange}
									/>
								</Form.Group>
								<Form.Group
									className='mb-3'
									controlId='formEmail'>
									<Form.Label>Email</Form.Label>
									<Form.Control
										type='email'
										name='email'
										value={userDetails.email}
										onChange={handleInputChange}
									/>
								</Form.Group>
                                <Button
                                    className='form-control'
									variant='primary'
									type='submit'>
									Update Details
								</Button>
							</Form>
						</div>
					</Collapse>
				</Card.Body>
			</Card>
			<Card className='mt-4'>
				<Card.Body>
					<Card.Title>
						<Button
							variant='link'
							onClick={() =>
								setChangePasswordOpen(!changePasswordOpen)
							}
							aria-controls='change-password'
							aria-expanded={changePasswordOpen}>
							Change Password
						</Button>
					</Card.Title>
					<Collapse in={changePasswordOpen}>
						<div id='change-password'>
							<Form onSubmit={handleChangePassword}>
								<Form.Group
									className='mb-3'
									controlId='formCurrentPassword'>
									<Form.Label>Current Password</Form.Label>
									<Form.Control
										type='password'
										name='currentPassword'
										value={userDetails.currentPassword}
										onChange={handleInputChange}
									/>
								</Form.Group>
								<Form.Group
									className='mb-3'
									controlId='formNewPassword'>
									<Form.Label>New Password</Form.Label>
									<Form.Control
										type='password'
										name='newPassword'
										value={userDetails.newPassword}
										onChange={handleInputChange}
									/>
								</Form.Group>
								<Form.Group
									className='mb-3'
									controlId='formConfirmPassword'>
									<Form.Label>Confirm Password</Form.Label>
									<Form.Control
										type='password'
										name='confirmPassword'
										value={userDetails.confirmPassword}
										onChange={handleInputChange}
									/>
								</Form.Group>
                                <Button
                                    className='form-control'
									variant='primary'
									type='submit'>
									Change Password
								</Button>
							</Form>
						</div>
					</Collapse>
				</Card.Body>
			</Card>
		</Container>
	);
};

export default Settings;
