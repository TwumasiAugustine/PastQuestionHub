import { useState } from 'react';
import UploadSection from '../components/UploadSection'
import {Modal, Button} from 'react-bootstrap';

function UploadModal({uploading, setUploading,setFile, percent, handleUpload}) {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Button
			className='bi-upload'
				variant='primary'
				onClick={handleShow}> Upload
			</Button>

			<Modal
				show={show}
				onHide={handleClose}
				backdrop='static'
				keyboard={false}>
				<Modal.Header closeButton>
					<Modal.Title>Upload Form</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<UploadSection
						uploading={uploading}
						setUploading={setUploading}
						percent={percent}
						handleUpload={handleUpload}
						setFile={setFile}
					/>
				</Modal.Body>
				<Modal.Footer>
					<Button
						variant='secondary'
						onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default UploadModal;
