/* eslint-disable react/prop-types */
// import react router-dom
import { Route, Routes } from 'react-router-dom';
import CreateUser from './page/CreateUser';
import SignIn from './page/SignIn';
import UserInterface from './page/UserInterface';
import AdminInterface from './page/AdminInterface'
import NoPage from './page/NoPage';


const App = () => {
	

	return (
		<div className='App'>
			<Routes>
				<Route
					index
					path='/'
					element={
						<SignIn
						/>
					}
				/>
				<Route
					path='/userInterface'
					element={<UserInterface />}
				/>
				<Route
					path='/adminInterface'
					element={<AdminInterface />}
				/>
				<Route
					path='/createUser'
					element={<CreateUser />}
				/>
				<Route
					path='*'
					element={<NoPage />}
				/>
			</Routes>
		</div>
	);
};
export default App;
