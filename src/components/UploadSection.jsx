import { useState} from 'react';
import {Form, Button, Row, Col, Spinner} from 'react-bootstrap'

const UploadSection = ({uploading, setFile, handleUpload, percent}) => {
    
    const [location, setLocation] = useState('');
    const [selectedLevel, setSelectedLevel] = useState('');

    const handleFileChange = (e) => {
        e.preventDefault();
        setFile(e.target.files[0]);
    };



    const handleLocationChange = (e) => {
		setLocation(e.target.value);
		console.log(location)
    };
    
    const handleLevelChange = (e) => {
		setSelectedLevel(e.target.value);
		console.log(selectedLevel)
    };
    



    return (
		<div className='Upload-section'>
			{/* File upload form */}
			<Form onSubmit={handleUpload}>
				<Form.Group
					className='mb-3'
					controlId='uploadFile'>
					<Form.Label>Upload files here</Form.Label>
                    <Form.Control
                        onChange={handleFileChange}
						type='file'
						multiple
						accept='.pdf, .doc, .docx'
						placeholder='Choose file'
					/>
					<Form.Text className='text-muted'>
						File must be in PDF, DOC and DOCX format only!
					</Form.Text>
				</Form.Group>
				<Row>
					<Col>
						<Form.Group>
							<Form.Label>Location</Form.Label>
							<Form.Check
								type='radio'
								label='Primary'
								name='location'
								value='primary'
								checked={location === 'primary'}
								onClick={handleLocationChange}
							/>
							<Form.Check
								type='radio'
								label='Secondary'
								name='location'
								value='secondary'
								checked={location === 'secondary'}
								onClick={handleLocationChange}
							/>
						</Form.Group>
					</Col>
					<Col>
						<Form.Group>
							<Form.Label>Level</Form.Label>
							<Form.Check
								type='radio'
								label='100'
								name='level'
								value='100'
								checked={selectedLevel === '100'}
								onChange={handleLevelChange}
							/>
							<Form.Check
								type='radio'
								label='200'
								name='level'
								value='200'
								checked={selectedLevel === '200'}
								onChange={handleLevelChange}
							/>
							<Form.Check
								type='radio'
								label='300'
								name='level'
								value='300'
								checked={selectedLevel === '300'}
								onChange={handleLevelChange}
							/>
							<Form.Check
								type='radio'
								label='400'
								name='level'
								value='400'
								checked={selectedLevel === '400'}
								onChange={handleLevelChange}
							/>
						</Form.Group>
					</Col>
				</Row>
				<Form.Group>
					<Button
						className="bi bi-upload"
                        disabled={uploading}
						variant='primary'
						type='submit'>
                        {uploading ? <Spinner animation="border" /> : ' Upload'}
                    </Button>
				</Form.Group>
			</Form>
			{uploading && (
				<div className='progress mt-4 '>
					<div
						className='progress-bar'
						role='progressbar'
						aria-valuenow={percent}
						aria-valuemin='0'
						style={{ width: `${percent}%` }}
						aria-valuemax='100'
					/>
					<div className='progress-bar p-2'>
						<span className='sr-only'>{percent}%</span>
					</div>
				</div>
			)}
		</div>
	);
}



export default UploadSection;
