import { useState, useEffect} from 'react';
import {storage} from '../firebaseConfig';
import { ref, deleteObject, uploadBytesResumable, getDownloadURL, listAll } from 'firebase/storage';


const UploadSection = () => {
    const [file, setFile] = useState('');
    const [uploading, setUploading] = useState(false)
    const [percent, setPercent] = useState(0);
    const [data, setData] = useState([])

    const handleFileChange = (e) => {
        e.preventDefault();
        setFile(e.target.files[0]);
    };

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
        
    // Fetch all files
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
		
        <div className='Upload-section'>
            {/* File upload form */}
            <form
                className='form form-group'
                onSubmit={handleUpload}>
                <label
                    className='form-label'
                    htmlFor='file'>
                    Upload Files Here
                </label>
                <input
                    className='form-control'
                    type='file'
                    name='file'
                    onChange={handleFileChange}
                    accept='.doc, .docx, .pdf'
                    placeholder='Choose File'
                />
                <button
                    type='submit'
                    className='btn btn-primary mt-3'>
                    Upload
                </button>
            </form>
            {uploading && (<div className='progress mt-4 '>
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
            <div className='uploaded-files mt-3'>
                <h2>Uploaded Files</h2>
                <ul className='list-group mt-2'>
                    {listItem()}
                </ul>
            </div>
        </div>
    )
}



export default UploadSection;
