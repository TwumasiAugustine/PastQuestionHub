
import AdminDashBoard from '../components/AdminDashboard';
import Header from '../components/Header';
import Footer from '../components/Footer';


const AdminInterface = () => {


    return (
        <div className="Admin-interface">
            <Header/>
            <AdminDashBoard />
            <Footer/>
        </div>
    )
}


export default AdminInterface;