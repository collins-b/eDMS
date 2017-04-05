import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

const Login = () => {
  return (
<div>
<section className="site-container padding-tb">
		
		<section className="card wow fadeInLeft">
			
			<h3 className="wow fadeInDown" data-wow-delay="0.4s">Please Sign In</h3>

			<form action="#" className="form" method="post">
			    <div className="form__wrapper wow fadeInDown" data-wow-delay="0.5s">
			        <input type="text" className="form__input" id="username" name="username" required />
			        <label className="form__label" htmlFor="email">
						<span className="form__label-content">Username</span>
					</label>
			     </div>

			    <div className="form__wrapper wow fadeInDown" data-wow-delay="0.6s">
			        <input type="password" className="form__input" id="password" name="password" required />
			        <label className="form__label" htmlFor="password">
						<span className="form__label-content">Password</span>
					</label>
			       
			     </div>

			    <div className="form__wrapper--submit wow fadeInLeft" data-wow-delay="0.7s">
			    	<div className="form__input-submit">
			        	<button type="submit" name="submit" className="btn btn-block">Submit</button>
			        </div>
			    </div>
			</form>
			<div className="text-center text-small wow fadeInLeft" data-wow-delay="0.8s"><a href="#" className="modal__toggle">Forgot Password ?</a></div>
			 
			<div className="modal">
				<a href="#" className="modal--close modal__toggle">&times;</a>
				
				<h3>Recover Password</h3>

				<p className="text-small">Your new password will be send to this email.</p>

				<form action="#" className="form2" method="post">
				    <div className="form__wrapper">
				        <input type="email" className="form__input" id="email" name="email" />
				        <label className="form__label" htmlFor="email">
							<span className="form__label-content">Email</span>
						</label>
				    </div>

					<div className="form__wrapper--submit">
				    	<div className="form__input-submit">
				        	<button type="submit" name="submit" className="btn btn-block">Submit</button>
				        </div>
				    </div>

			    </form>

			</div>

		</section>
			</section>

</div>
  );
};

module.exports = Login;
