import  { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, } from 'react-bootstrap';
import AdminLogo from '../assets/admin.png';
import {storage} from '../firebaseConfig';
import { ref, deleteObject, uploadBytesResumable, getDownloadURL, listAll } from 'firebase/storage';
import UploadModal from '../components/UploadModal';
const AdminDashboard = () => {

	// State for user list
	const [users, setUsers] = useState([
		{ id: 1, name: 'User 1' },
		{ id: 2, name: 'User 2' },
		{ id: 3, name: 'User 3' },
	]);

	// Function to handle file upload
	

	const [greeting, setGreeting] = useState('');

	useEffect(() => {
		const currentTime = new Date();
		const currentHour = currentTime.getHours();

		if (currentHour < 12) {
			setGreeting('Good morning');
		} else if (currentHour < 18) {
			setGreeting('Good afternoon');
		} else {
			setGreeting('Good evening');
		}
	}, []);

	// Function to handle user deletion
	const handleDeleteUser = (userId) => {
		setUsers(users.filter((user) => user.id !== userId));
	};

	const [file, setFile] = useState('');
    const [uploading, setUploading] = useState(false)
    const [percent, setPercent] = useState(0)
	const [data, setData] = useState([])
	
    const handleUpload = (e) => {
        e.preventDefault();
        if (!file) {
            alert('Please choose a file first!');
            return;
        }
        const storageRef = ref(storage, `/files/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        setUploading(true)

        uploadTask.on(
            'state_changed',
            (snapshot) => {
                const progress =
                    Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100)
                setPercent(progress);
            },
            (err) => {
                console.log(err);
                setUploading(false)
            },
            () => {
                setUploading(false)
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    console.log(`Download URL: ${url}`);
                });
            },
        );
    }
        
    //Fetch all files
    useEffect(() => {
        const fetchFiles = async () => {

            try {
                const filesRef = ref(storage, '/files');
                const filesList = await listAll(filesRef);
                const urls = await Promise.all(filesList.items.map((item) => getDownloadURL(item)))
                setData(urls);
            } catch (err) {
                console.error('Error fetching files:', err);
            }

        }
        
        fetchFiles();

    }, [])

    
    const deleteFile = async (fileName) => {
        try {
            const fileRef = ref(storage, `/files/${fileName}`);
            await deleteObject(fileRef);
            alert(`File ${fileName} deleted`)
        } catch (err) {
            console.error('Error deleting file: ' + err.message)
        }
    }

    const handleDeleteFile = (fileName) => {
        deleteFile(fileName)
    }

	
const listItem = () => {
		return data.map((url, index) => {
            // Extracting filename from the URL
            const fileName = url.substring(url.lastIndexOf('/') + 9);
            const shortenedFilename = fileName.length > 20 ? fileName.substring(0, 20) + '...' : fileName;
			return (
				<li
					key={index}
					className='list-group-item d-flex justify-content-between align-content-center'>
					<span>{shortenedFilename}</span>
					<button className='btn btn-danger' onClick={() => handleDeleteFile(fileName)}>
						<i className='bi bi-trash'></i>
					</button>
				</li>
			);
		});
	};


	return (
		<Container>
			<Row className='mt-4'>
				<Col>
					<Card>
						<Card.Body>
							<Row>
								<Col
									xs={12}
									md={6}>
									<h2>{greeting}, Admin!</h2>
									<p>
										Current Date and Time:{' '}
										{new Date().toLocaleString()}
									</p>
								</Col>
								<Col
									xs={12}
									md={6}
									sm={3}
									className='text-sm-end text-md-end'>
									<img
										src={AdminLogo}
										style={{
											width: '50px',
											height: '50px',
										}}
										alt='Admin'
										className='img-fluid img border border-2 rounded-4 m-4'
									/>
								</Col>
							</Row>
						</Card.Body>
					</Card>
				</Col>
			</Row>

			<Row className='mt-4'>
				<Col>
					<Card>
						<Card.Body>
							<Col className='d-flex justify-content-between'>
								<h2>Uploaded Files</h2>
								<div className='btn-container'>
									<UploadModal
										uploading={uploading}
										setUploading={setUploading}
										percent={percent}
										handleUpload={handleUpload}
										setFile={setFile}
									/>
								</div>
							</Col>
							<Col className="mt-3 border overflow-auto scroll" style={{height: '150px'}}>
								{listItem}
							</Col>
						</Card.Body>
					</Card>
				</Col>
			</Row>

			<Row className='my-4'>
				<Col>
					<Card>
						<Card.Body className='container'>
							<h2>User List</h2>
							<ul className='list-group list-group-flush w-100'>
								{users.map((user) => (
									<li
										className='list-group-item'
										key={user.id}>
										<Button
											variant='link'>
											{user.name}
										</Button>
										<Button
											variant='danger'
											size='sm'
											className='ms-2 bi-trash float-end'
											onClick={() =>
												handleDeleteUser(user.id)
											}>
											{' '} Remove
										</Button>
									</li>
								))}
							</ul>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default AdminDashboard;
