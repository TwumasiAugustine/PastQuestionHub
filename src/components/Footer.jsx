const Footer = () => {
	return (
		<footer className='footer-container  w-100 bg-secondary p-2'>
			<p className='footer-text text-center'>© 2021 All Rights Reserved</p>
            <p className='footer-text my-2 company-name text-center'>
                Made with <span className="text-danger">❤️</span> by &nbsp;
                <a
                    rel="noreferrer"
					href='https://www.example.com'
					className='btn text-white text-decoration-none'
					target='_blank'>
					DevTech IT Solutions
				</a>
            </p>
		</footer>
	);
};

export default Footer;
