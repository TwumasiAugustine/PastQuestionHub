// DownloadSection where student can download past questions
const DownloadSection = () => {
    // Fetch and display downloadable content based on user data
    
    const handleFileDownload = () => {
        // Download file based on user selection
    }


    return (
		<div className='DownloadSection'>
			<div className='filter-container mt-2'>
				{/* Display categories and filters */}
				<div className='filters'>
					<div className='filter mt-2'>
						<label className='form-label' htmlFor='programme'>Programme</label>
						<select
							className='form-select form-select-lg form-select-sm'
							name='programme'
							id='programme'>
							<option value=''>Select programme</option>
							<option value='primary-education'>B.Ed Primary Education </option>
							<option value='jhs-education'>B.Ed JHS Education</option>
							<option value='early-childhood'>Early Childhood Education</option>
						</select>
					</div>
					<div className='filter mt-2'>
						<label className='form-label' htmlFor='year'>Year</label>
						<select
							className='form-select form-select-lg form-select-sm'
							name='year'
							id='year'>
                            <option value=''>Select year</option>
                            <option value='2025'>2025</option>
                            <option value='2024'>2024</option>
                            <option value='2023'>2023</option>
                            <option value='2022'>2022</option>
                            <option value='2021'>2021</option>
                            <option value='2020'>2020</option>
							<option value='2019'>2019</option>
						</select>
					</div>
					<div className='filter mt-2'>
						<label className='form-label' htmlFor='elective'>Elective</label>
						<select
							className='form-select form-select-lg form-select-sm'
							name='elective'
							id='elective'>
							<option value=''>Select your elective</option>
							<option value='social-studies'>Social Studies</option>
							<option value='english'>English</option>
                            <option value='rme'>RME</option>
                            <option value='music'>Music</option>
                            <option value='bdt'>Basic Design</option>
						</select>
					</div>
				</div>
			</div>
			{/* Download button and functionality */}
			<div className='download-container mt-3'>
				<button className='btn btn-primary form-control' onClick={handleFileDownload}>Download</button>
			</div>
		</div>
	);
}


export default DownloadSection;