import '../style/userInterface.css';
import DownloadSection from '../components/DownloadSection';
import Header from '../components/Header';


const UserInterface = () => {
	
	return (
		<div className='user-interface'>
			<Header
				
			/>
			<h1 className='m-4'>Welcome, !</h1>
			<DownloadSection />
		</div>
	);
};

export default UserInterface;
