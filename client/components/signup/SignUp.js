import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

const SignUp = () => {
  return (
<div>
   <section className="site-container padding-tb">
		
		<section className="card wow fadeInLeft">
			
			<h3 className="wow fadeInDown" data-wow-delay="0.4s">Create An Account</h3>
			<form action="#" className="form" method="post">
			    <div className="form__wrapper wow fadeInDown" data-wow-delay="0.5s">
			        <input type="text" className="form__input" id="firstName" name="firstName" required />
			        <label className="form__label" htmlFor="firstName">
						<span className="form__label-content">First Name</span>
					</label>
			     </div>

                 <div className="form__wrapper wow fadeInDown" data-wow-delay="0.5s">
			        <input type="text" className="form__input" id="otherNames" name="otherNames" required />
			        <label className="form__label" htmlFor="otherNames">
						<span className="form__label-content">Other Name(s)</span>
					</label>
			     </div>

                 <div className="form__wrapper wow fadeInDown" data-wow-delay="0.5s">
			        <input type="email" className="form__input" id="email" name="email" required />
			        <label className="form__label" htmlFor="email">
						<span className="form__label-content">Email Address</span>
					</label>
			     </div>

                 <div className="form__wrapper wow fadeInDown" data-wow-delay="0.5s">
			        <input type="number" className="form__input" id="phone" name="phone" required />
			        <label className="form__label" htmlFor="phone">
						<span className="form__label-content">Phone Number</span>
					</label>
			     </div>

                 <div className="form__wrapper wow fadeInDown" data-wow-delay="0.5s">
			        <input type="text" className="form__input" id="username" name="username" required />
			        <label className="form__label" htmlFor="username">
						<span className="form__label-content">Username</span>
					</label>
			     </div>

			    <div className="form__wrapper wow fadeInDown" data-wow-delay="0.6s">
			        <input type="password" className="form__input" id="password"  name="password" required />
			        <label className="form__label" for="password">
						<span className="form__label-content">Password</span>
					</label> 
			     </div>

                 <div className="form__wrapper wow fadeInDown" data-wow-delay="0.5s">
			        <input type="text" className="form__input" id="role" name="role" value="user" readOnly required />
			        <label className="form__label" htmlFor="role">
						<span className="form__label-content">Role</span>
					</label>
			     </div>

			    <div className="form__wrapper--submit wow fadeInLeft" data-wow-delay="0.7s">
			    	<div className="form__input-submit">
			        	<button type="submit" name="submit" className="btn btn-block">Submit</button>
			        </div>
			    </div>
			</form>
			<div className="modal">
				<a href="#" className="modal--close modal__toggle">&times;</a>
				
				<h3>Recover Password</h3>

				<p className="text-small">Your new password will be send to this email.</p>

				<form action="#" className="form2" method="post">
				    <div className="form__wrapper">
				        <input type="email" className="form__input" id="email" name="email" />
				        <label className="form__label" for="email">
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

module.exports = SignUp;
