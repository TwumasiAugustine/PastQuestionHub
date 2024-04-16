
import { Container, Row, Col, Card } from 'react-bootstrap';





const UserProfile = () => {
	

	return (
		<Container className='mt-4'>
			<Row>
				<Col md={8}>
					<Card>
						<Card.Body>
							<Card.Title>User Bio</Card.Title>
							<Card.Text>
								<strong>Username:</strong>Ama
							</Card.Text>
							<Card.Text>
								<strong>Email:</strong> abd
							</Card.Text>
							<Card.Text>
								<strong>Institution:</strong> dggdj
							</Card.Text>
							<Card.Text>
								<strong>Programme:</strong>
							</Card.Text>
							<Card.Text>
								<strong>Level:</strong>
							</Card.Text>
						</Card.Body>
						<Card.Footer>
							<Card.Text>
								<strong>Joined:</strong>{' '}
								
							</Card.Text>
							<Card.Text>
								<strong>Last Updated:</strong>{' '}
								ff
							</Card.Text>
						</Card.Footer>
						<Card.Footer>
							<strong>Last Login:</strong>{' '}
							jj
						</Card.Footer>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default UserProfile;
