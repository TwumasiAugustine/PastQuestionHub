import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
const FileModal = () => {
	
	const [show, setShow] = useState(false);
    const handleFileDownload =() => console.log('Clicked')
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<>
			<div className='btn-group'>
				<Button
					variant='link'
					onClick={handleShow}>
					Level 100
				</Button>
				<Button
					variant='link'
					onClick={handleShow}>
					Level 200
				</Button>
				<Button
					variant='link'
					onClick={handleShow}>
					Level 300
				</Button>
				<Button
					variant='link'
					onClick={handleShow}>
					Level 400
				</Button>
			</div>
			<Modal
				show={show}
				onHide={handleClose}
				backdrop='static'
				keyboard={false}>
				<Modal.Header closeButton>
					<Modal.Title>Level 100 Past Questions</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className='container card mt-2'>
						<ul className='list-group list-group-flush w-100'>
							<li className='list-group-item'>
								File 1
								<button
									className='btn btn-primary float-end'
									onClick={handleFileDownload}>
									Download
								</button>
							</li>
							<li className='list-group-item'>
								File 2
								<button
									className='btn btn-primary float-end'
									onClick={handleFileDownload}>
									Download
								</button>
							</li>
							<li className='list-group-item'>
								File 3
								<button
									className='btn btn-primary float-end'
									onClick={handleFileDownload}>
									Download
								</button>
							</li>
							<li className='list-group-item'>
								File 4
								<button
									className='btn btn-primary float-end'
									onClick={handleFileDownload}>
									Download
								</button>
							</li>
							<li className='list-group-item'>
								File 5
								<button
									className='btn btn-primary float-end'
									onClick={handleFileDownload}>
									Download
								</button>
							</li>
						</ul>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button
						variant='secondary'
						onClick={handleClose}>
						Close
					</Button>
					<Button variant='primary'>Download All</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default FileModal;
