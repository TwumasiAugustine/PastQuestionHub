import {Link, Outlet} from 'react-router-dom'
const NoPage = () => {

	return (
		<div className='NoPage container p-3 text-center'>
			<div className='NoPage-content'>
				<h1 className='error-404 text-danger'>404 - Not Found</h1>
				<p>
					Sorry, it seems you've entered an invalid URL. Please check the
					address or go back to the
				</p>
				<Link to='/'>home page</Link>
				<Outlet />
				<div className='NoPage-image-container'>
					<img
						className='img-fluid'
						src='https://i.imgur.com/qIufhof.png'
						alt='404'
					/>
				</div>
			</div>
		</div>
	);
};

export default NoPage;
