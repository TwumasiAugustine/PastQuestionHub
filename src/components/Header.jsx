import {useState} from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import Logo from '../assets/download.png';
import AccountModal from '../components/AccountModal';
import ThemeToggle from '../components/ThemeToggle';

const Header = () => {
	const [show, setShowAccount] = useState(false);

	const handleCloseAcc = () => setShowAccount(false);
	const handleShowAccount = () => setShowAccount(true);

	return (
		<Navbar
			collapseOnSelect
			expand='lg'
			className='bg-body-tertiary'
			variant='white'>
			<Container>
				<Navbar.Brand href='#home'>
					Past Questions Hub
					<img
						className='img bi-image mx-2 bi-image-alt'
						src={Logo}
						alt='logo'
						style={{ width: '40px', height: '40px' }}
					/>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='me-auto'>
						<Nav.Link
							href='#account'
							onClick={handleShowAccount}>
							Account Info
						</Nav.Link>
						<AccountModal
							handleCloseAcc={handleCloseAcc}
							show={show}
							setShowAccount={setShowAccount}
						/>
						<NavDropdown
							title='Settings'
							id='collapsible-nav-dropdown'>
							<NavDropdown.Item href='#'>
								<ThemeToggle/>
							</NavDropdown.Item>
							<NavDropdown.Item href='#action/3.2'>
								Change Email or Password
							</NavDropdown.Item>
							<NavDropdown.Item href='#action/3.3'>
								Update Profile
							</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href='#action/3.4'>
								Last Login
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
					<Nav>
						<Nav.Link href='#deets'>
							Message Inbox{' '}
							<span className='badge bg-danger rounded-pill'>
								0
							</span>
						</Nav.Link>
						<Nav.Link
							eventKey={2}
							href='#memes'>
							Log Out
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
