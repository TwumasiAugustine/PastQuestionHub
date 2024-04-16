import { useState } from 'react';
import AdminInterface from '../page/AdminInterface';
import UserProfile from '../components/UserProfile';
import Settings from '../components/Settings';
import { Navbar, Nav, Modal, Button } from 'react-bootstrap';
// import {checkAdminRole} from '../utils/firebaseUtils'

const Header = () => {
	// const [isAdmin, setIsAdmin] = useState(true);
	const [showAdminModal, setShowAdminModal] = useState(false);
	const [showSettingsModal, setShowSettingsModal] = useState(false);
	const [showUserProfileModal, setShowUserProfileModal] = useState(false);

	const handleAdminClick = () => setShowAdminModal(true);
	const handleSettingsClick = () => setShowSettingsModal(true);
	const handleUserProfileClick = () => setShowUserProfileModal(true);

	const handleCloseModals = () => {
		setShowAdminModal(false);
		setShowSettingsModal(false);
		setShowUserProfileModal(false);
	};

	
	return (
		<>
			<Navbar
				className='Header p-2'
				expand='lg'>
				<Navbar.Brand
					className='h1'
					href='#'>
					Past Question Hub
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='navbarNav' />
				<Navbar.Collapse id='navbarNav'>
					<Nav className='ms-auto'>
						{<Nav.Link onClick={handleAdminClick}>
							Admin
						</Nav.Link>}
								<Nav.Link onClick={handleUserProfileClick}>
									User Profile
								</Nav.Link>
								<Nav.Link onClick={handleSettingsClick}>
									Settings
								</Nav.Link>

								<Nav.Link >
									Log Out
								</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			{/* Admin Modal */}
				<Modal
					show={showAdminModal}
					onHide={handleCloseModals}
					centered>
					<Modal.Header closeButton>
						<Modal.Title>Admin</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<AdminInterface />
					</Modal.Body>
					<Modal.Footer>
						<Button
							variant='secondary'
							onClick={handleCloseModals}>
							Close
						</Button>
					</Modal.Footer>
				</Modal>
			<Modal
				show={showSettingsModal}
				onHide={handleCloseModals}
				centered>
				<Modal.Header closeButton>
					<Modal.Title>Settings</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Settings  />
				</Modal.Body>
				<Modal.Footer>
					<Button
						variant='secondary'
						onClick={handleCloseModals}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
			<Modal
				show={showUserProfileModal}
				onHide={handleCloseModals}
				centered>
				<Modal.Header closeButton>
					<Modal.Title>User Profile</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<UserProfile  />
				</Modal.Body>
				<Modal.Footer>
					<Button
						variant='secondary'
						onClick={handleCloseModals}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default Header;
