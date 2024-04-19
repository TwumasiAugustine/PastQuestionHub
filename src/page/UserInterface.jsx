import '../style/userInterface.css';
import DownloadSection from '../components/DownloadSection';
import Header from '../components/Header';
import Footer from '../components/Footer';

const UserInterface = () => {
	return (
		<div className='user-interface'>
			<Header />
			<DownloadSection />
			<Footer />
		</div>
	);
};

export default UserInterface;
