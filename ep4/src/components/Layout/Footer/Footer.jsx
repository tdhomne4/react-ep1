import React from 'react'

const Footer = () => {
	return (
		<>
			<div className="footer_container">
				<div className="footer_col_1">
					<div className="footer_col_1_img">
						<img src="" alt="Footer Logo" />
					</div>
				</div>
				<div className="footer_col_1">
						<h2>Multi-Restaurant</h2>
					<div className="footer_col_1_menu">
						<ul>
							<li>
								<a href="/">Home</a>
								<a href="/about">About</a>
								<a href="/contact">Contact</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="footer_col_1">
					<div className="footer_col_1_social">
						<ul className='social_icons'>
							<li>
								<a href="/">Facebook</a>
								<a href="/">Facebook</a>
								<a href="/">Facebook</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	)
}
export default Footer;