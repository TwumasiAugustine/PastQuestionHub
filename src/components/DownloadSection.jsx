import FileModal from '../components/FileModal'
import {Card, Form, InputGroup} from 'react-bootstrap'
const DownloadSection = () => {


	const handleFileDownload = () => {
		// Download file based on user selection
	};

	return (
		<div className='container my-5 DownloadSection'>
			<div className='welcome-user m-2'>
				<h3>Welcome, User!</h3>
			</div>
			<div className='filterFiles p-2'>
				<Card>
					<Card.Body>
						<Card.Title>
							<p className='p-2'>
								Search and download your files here!
							</p>
						</Card.Title>
						<div className='search-container w-100'>
							<Form>
								<InputGroup>
									<InputGroup.Text id='search'>
										<i className='bi-search'></i>
									</InputGroup.Text>
									<Form.Control
										className='form-control'
										type='search'
										placeholder='Search for files...'
										name='search'
										autoFocus
									/>
								</InputGroup>
								<Form.Group>
									<button
										type='submit'
										className='btn bi-search btn-primary m-2 float-end'
										onClick={handleFileDownload}>
										{' '}
										Search
									</button>
								</Form.Group>
							</Form>
						</div>
					</Card.Body>
				</Card>
				<div className='container card mt-2'>
					<ul className='list-group list-group-flush w-100'>
						<li className='list-group-item'>
							File 1
							<button
								className='btn bi-download btn-primary float-end'
								onClick={handleFileDownload}>
								{' '}
								Download
							</button>
						</li>
						<li className='list-group-item'>
							File 2
							<button
								className='btn bi-download btn-primary float-end'
								onClick={handleFileDownload}>
								{' '}
								Download
							</button>
						</li>
						<li className='list-group-item'>
							File 3
							<button
								className='btn bi-download btn-primary float-end'
								onClick={handleFileDownload}>
								{' '}
								Download
							</button>
						</li>
						<li className='list-group-item'>
							File 4
							<button
								className='btn bi-download btn-primary float-end'
								onClick={handleFileDownload}>
								{' '}
								Download
							</button>
						</li>
						<li className='list-group-item'>
							File 5
							<button
								className='btn bi-download btn-primary float-end'
								onClick={handleFileDownload}>
								{' '}
								Download
							</button>
						</li>
					</ul>
				</div>
				<div className='container my-4 otherFilesLink'>
					<h4>Download other files here</h4>
					<FileModal />
				</div>
			</div>
		</div>
	);
};

export default DownloadSection;
