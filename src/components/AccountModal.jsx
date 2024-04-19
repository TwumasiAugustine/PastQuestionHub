import { useState } from 'react';

import { Modal, Button, Table, Container } from 'react-bootstrap';

function AccountModal({show, setShowAccount,handleCloseAcc, handleShowAccount}) {
	

    const users = [{
        id: 1,
        name: 'John Doe',
        email: 'johndoe2@gmail.com',
        username: 'ofce.2020123',
        programme: 'Primary Education',
        level: '400',
        role: 'admin',
    }]
	return (
		<>
			<Modal
				show={show}
				onHide={handleCloseAcc}
				backdrop='static'
				keyboard={false}>
				<Modal.Header closeButton>
					<Modal.Title>Account Information</Modal.Title>
				</Modal.Header>
				<Modal.Body>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Programme</th>
                                <th>Level</th>
                                <th>Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.programme}</td>
                                    <td>{user.level}</td>
                                    <td>{user.role}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
				</Modal.Body>
				<Modal.Footer>
					<Button
						variant='secondary'
						onClick={handleCloseAcc}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default AccountModal;
