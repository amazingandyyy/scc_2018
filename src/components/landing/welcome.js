import React from 'react';
import { connect } from 'react-redux';

class Welcome extends React.Component {
  render() {
    return (
      <div id='wrapper' className='divided'>
					<section className='hero banner style1 orient-left content-align-left image-position-right fullscreen onload-image-fade-in onload-content-fade-right'>
						<div className='content'>
						<img src='../../assets/images/SCC-black-logo.png' className='hero-logo'/>
							<p className='major'>We are senior class council. We are senior class council. We are senior class council. We are senior class council. We are senior class council.</p>
							<ul className='actions vertical'>
								<li><a href='#first' className='button big wide smooth-scroll-middle'>About Us</a></li>
							</ul>
						</div>
						<div className='image'>
							<img src='../../assets/images/banner.jpg' alt='' />
						</div>
					</section>

					<section className='spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in' id='first'>
						<div className='content'>
							<h2>2018 is UC {"Berkeley's"} 150 anniversary</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id ante sed ex pharetra lacinia sit amet vel massa. Donec facilisis laoreet nulla eu bibendum. Donec ut ex risus. Fusce lorem lectus, pharetra pretium massa et, hendrerit vestibulum odio lorem ipsum dolor sit amet.</p>
							<ul className='actions vertical'>
								<li><a href='#' className='button'>Learn More</a></li>
							</ul>
						</div>
						<div className='image'>
							<img src='../../assets/images/spotlight01.jpg' alt='' />
						</div>
					</section>

					<section className='spotlight style1 orient-left content-align-left image-position-center onscroll-image-fade-in'>
						<div className='content'>
							<h2>March 08: Big Give</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id ante sed ex pharetra lacinia sit amet vel massa. Donec facilisis laoreet nulla eu bibendum. Donec ut ex risus. Fusce lorem lectus, pharetra pretium massa et, hendrerit vestibulum odio lorem ipsum dolor sit amet.</p>
							<ul className='actions vertical'>
								<li><a href='#' className='button'>Learn More</a></li>
							</ul>
						</div>
						<div className='image'>
							<img src='../../assets/images/spotlight02.jpg' alt='' />
						</div>
					</section>

					<section className='spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in'>
						<div className='content'>
							<h2>April XX: Senior Formal</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id ante sed ex pharetra lacinia sit amet vel massa. Donec facilisis laoreet nulla eu bibendum. Donec ut ex risus. Fusce lorem lectus, pharetra pretium massa et, hendrerit vestibulum odio lorem ipsum dolor sit amet.</p>
							<ul className='actions vertical'>
								<li><a href='#' className='button'>Learn More</a></li>
							</ul>
						</div>
						<div className='image'>
							<img src='../../assets/images/spotlight03.jpg' alt='' />
						</div>
					</section>

					<section className='wrapper style1 align-center'>
						<div className='inner'>
							<h2>April XX: Senior Week</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id ante sed ex pharetra lacinia sit amet vel massa. Donec facilisis laoreet nulla eu bibendum. Donec ut ex risus. Fusce lorem lectus, pharetra pretium massa et, hendrerit vestibulum odio lorem ipsum.</p>
						</div>

							<div className='gallery style2 medium lightbox onscroll-fade-in'>
								<article>
									<a href='../../assets/images/gallery/fulls/01.jpg' className='image'>
										<img src='../../assets/images/gallery/thumbs/01.jpg' alt='' />
									</a>
									<div className='caption'>
										<h3>Monday</h3>
										<p>Lorem ipsum dolor amet, consectetur magna etiam elit. Etiam sed ultrices.</p>
										<ul className='actions'>
											<li><span className='button small'>Details</span></li>
										</ul>
									</div>
								</article>
								<article>
									<a href='../../assets/images/gallery/fulls/02.jpg' className='image'>
										<img src='../../assets/images/gallery/thumbs/02.jpg' alt='' />
									</a>
									<div className='caption'>
										<h3>Tuesday</h3>
										<p>Lorem ipsum dolor amet, consectetur magna etiam elit. Etiam sed ultrices.</p>
										<ul className='actions'>
											<li><span className='button small'>Details</span></li>
										</ul>
									</div>
								</article>
								<article>
									<a href='../../assets/images/gallery/fulls/03.jpg' className='image'>
										<img src='../../assets/images/gallery/thumbs/03.jpg' alt='' />
									</a>
									<div className='caption'>
										<h3>Wednesday</h3>
										<p>Lorem ipsum dolor amet, consectetur magna etiam elit. Etiam sed ultrices.</p>
										<ul className='actions'>
											<li><span className='button small'>Details</span></li>
										</ul>
									</div>
								</article>
								<article>
									<a href='../../assets/images/gallery/fulls/04.jpg' className='image'>
										<img src='../../assets/images/gallery/thumbs/04.jpg' alt='' />
									</a>
									<div className='caption'>
										<h3>Thursday</h3>
										<p>Lorem ipsum dolor amet, consectetur magna etiam elit. Etiam sed ultrices.</p>
										<ul className='actions'>
											<li><span className='button small'>Details</span></li>
										</ul>
									</div>
								</article>
								<article>
									<a href='../../assets/images/gallery/fulls/05.jpg' className='image'>
										<img src='../../assets/images/gallery/thumbs/05.jpg' alt='' />
									</a>
									<div className='caption'>
										<h3>Friday</h3>
										<p>Lorem ipsum dolor amet, consectetur magna etiam elit. Etiam sed ultrices.</p>
										<ul className='actions'>
											<li><span className='button small'>Details</span></li>
										</ul>
									</div>
								</article>
							</div>

					</section>

					<section className='wrapper style1 align-center'>
						<div className='inner'>
							<h2>May 11: Commencement</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id ante sed ex pharetra lacinia sit amet vel massa. Donec facilisis laoreet nulla eu bibendum. Donec ut ex risus. Fusce lorem lectus, pharetra pretium massa et, hendrerit vestibulum odio lorem ipsum.</p>
							<div className='items style1 medium onscroll-fade-in'>
								<section>
									<span className='icon style2 major fa-diamond'></span>
									<h3>Lorem</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui turpis, cursus eget orci amet aliquam congue semper. Etiam eget ultrices risus nec tempor elit.</p>
								</section>
								<section>
									<span className='icon style2 major fa-save'></span>
									<h3>Ipsum</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui turpis, cursus eget orci amet aliquam congue semper. Etiam eget ultrices risus nec tempor elit.</p>
								</section>
								<section>
									<span className='icon style2 major fa-bar-chart'></span>
									<h3>Dolor</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui turpis, cursus eget orci amet aliquam congue semper. Etiam eget ultrices risus nec tempor elit.</p>
								</section>
								<section>
									<span className='icon style2 major fa-wifi'></span>
									<h3>Amet</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui turpis, cursus eget orci amet aliquam congue semper. Etiam eget ultrices risus nec tempor elit.</p>
								</section>
								<section>
									<span className='icon style2 major fa-cog'></span>
									<h3>Magna</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui turpis, cursus eget orci amet aliquam congue semper. Etiam eget ultrices risus nec tempor elit.</p>
								</section>
								<section>
									<span className='icon style2 major fa-paper-plane'></span>
									<h3>Tempus</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui turpis, cursus eget orci amet aliquam congue semper. Etiam eget ultrices risus nec tempor elit.</p>
								</section>
							</div>
						</div>
					</section>

					{/* <section className='wrapper style1 align-center'>
						<div className='inner medium'>
							<h2>Get in touch</h2>
							<form method='post' action='#'>
								<div className='field half first'>
									<label>Name</label>
									<input type='text' name='name' id='name' value='' />
								</div>
								<div className='field half'>
									<label>Email</label>
									<input type='email' name='email' id='email' value='' />
								</div>
								<div className='field'>
									<label>Message</label>
									<textarea name='message' id='message' rows='6'></textarea>
								</div>
								<ul className='actions'>
									<li><input type='submit' name='submit' id='submit' value='Send Message' /></li>
								</ul>
							</form>

						</div>
					</section> */}

					<footer className='wrapper style1 align-center'>
						<div className='inner'>
							<ul className='icons'>
								{/* <li><a href='#' className='icon style2 fa-twitter'><span className='label'>Twitter</span></a></li> */}
								<li><a target='_blank' rel="noopener noreferrer" href='https://www.facebook.com/ucberkeleyscc2018/' className='icon style2 fa-facebook'><span className='label'>Facebook</span></a></li>
								<li><a target='_blank' rel="noopener noreferrer" href='#' className='icon style2 fa-instagram'><span className='label'>Instagram</span></a></li>
								<li><a target='_blank' rel="noopener noreferrer" href='#' className='icon style2 fa-linkedin'><span className='label'>LinkedIn</span></a></li>
								<li><a href='mailto:berkeleyscc@gmail.com?subject=Hello%20Berkeley%20Senior%20Class%20Council' className='icon style2 fa-envelope'><span className='label'>Email</span></a></li>
							</ul>
							<p>&copy; Build by a bear, <a href='https://github.com/amazingandyyy'>Amazingandyyy</a>.</p>
						</div>
					</footer>

			</div>
)
  }
}

const mapStateToProps = ({ auth }) => ({
  isLoggedin: auth.authenticated
});

export default connect(mapStateToProps, null)(Welcome);