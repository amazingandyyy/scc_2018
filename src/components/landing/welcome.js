import React from 'react';
import { connect } from 'react-redux';
import { seniorEvents, seniorweekEvents } from './events';

function OpenLink(props){
	return (<a href={props.href} className={props.className} target='_blank' rel='noopener noreferrer'>{props.children}</a>)
}

class Welcome extends React.Component {
	renderButton(btn){
		return Object.keys(btn).map((key, i)=>(<li key={key}>
				<OpenLink href={btn[key]} target='_blank' rel="noopener noreferrer" className='button actionsButton'>
					{key}
				</OpenLink>
			</li>)
		)
	}
	renderEvents(){
		return seniorEvents.map((e,i)=>{
			if(e.title == 'SeniorWeek'){
				return (<section className='senior-week-events wrapper style1 align-center'>
					<div className='inner'>
					<h4>April 18 - 22</h4>
						<h2>Senior Week</h2>
						<p>The Senior Class Council of 2018 presents to you the annual week of senior-exclusive events! Senior Week 2018 will be from April 18 - 22, 2018. All events are FREE for seniors.</p>
					</div>
						<div className='gallery style2 medium lightbox onscroll-fade-in' style='height: 250px;'>
							{this.renderSeniorweekEvents()}
						</div>
					</section>)
			}
			if(!e.image){
					return (<section className='senior-week-events wrapper style1 align-center'>
					<div className='inner'>
					<h4>{e.date}</h4>
						<h2>{e.title}</h2>
						<p>{e.description}</p>
					</div>
					</section>)
			}
			return (<div key={i}>
			<section className={(i%2==0)?`orient-right content-align-left spotlight style1 image-position-center onscroll-image-fade-in`:`orient-left content-align-right spotlight style1 image-position-center onscroll-image-fade-in`}>
				<div className='content'>
					<h4>{e.date}</h4>
					<h2>{e.title}</h2>
					<p>{e.description}</p>
					<ul className='actions vertical'>
						{this.renderButton(e.button)}
					</ul>
				</div>
				<div className='image'>
					<img src={`../../assets/bk/${e.image}`} alt='' />
				</div>
			</section>
				</div>)
		})
	}
	renderSeniorweekEvents(){
		return seniorweekEvents.map((d, i)=>(<article key={d.date}>
			<img src={`../../assets/seniorweek/date-${i}.jpg`} alt='' />
			<div className='caption'>
				<h3>{d.title}</h3>
				<p>{d.date}</p>
				<ul className='actions'>
					<a target='_blank' rel='noopener noreferrer' href={d.link}>
						<span className='button small'>Join</span>
					</a>
				</ul>
			</div>
		</article>))
	}
  render() {
    return (
      <div id='wrapper' className='divided section-block'>
			<section className='hero banner style1 orient-left content-align-left image-position-right fullscreen onload-image-fade-in onload-content-fade-right'>
				<div className='content'>
				<img src='../../assets/images/SCC-black-logo.png' className='hero-logo'/>
					<p className='major'>We work directly with University Relations to organize and execute social and community events that will build and strengthen class unity, senior engagement, class pride and alumni connection. We play a role planning Spring 2018 Commencement as well as hosting numerous fun, food-filled senior events such as Senior Formal, Last Lecture, and Pub Night for Senior Week. In addition, we choose our class banner and design exclusive Class of 2018 merchandise. Make sure to follow us and join us in making this year unforgettable! </p>
					<ul className='actions vertical'>
						<li><a href='#first' className='button big wide smooth-scroll-middle'>About Us</a></li>
					</ul>
				</div>
				<div className='image'>
					<img src='../../assets/images/banner.jpg' alt='' />
				</div>
			</section>
			{this.renderEvents()}
					<section className='wrapper style1 align-center'>
						<div className='inner'>
							<div>
								<h4>All day, May 11</h4>
								<h2>Commencement</h2>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id ante sed ex pharetra lacinia sit amet vel massa. Donec facilisis laoreet nulla eu bibendum. Donec ut ex risus. Fusce lorem lectus, pharetra pretium massa et, hendrerit vestibulum odio lorem ipsum.</p>
							</div>
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
								<li><a href='mailto:berkeleyscc@gmail.com?subject=Hello%20Berkeley%20Senior%20Class%20Council' className='icon style2 fa-envelope'><span className='label'>Email</span></a></li>
							</ul>
							<p>&copy; Built by bears</p>
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