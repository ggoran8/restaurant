import React from 'react';
import Layout from '../fragments/Layout';
import contactStyles from './Contact.module.css';

const Contact = () => {
	return (
		<Layout>
			<div className={contactStyles.container}>
				<h2 className={contactStyles.title}>Reservation</h2>
				<h3 className={contactStyles.secondTitle}>
					Got any questions? We will be happy to answer!
				</h3>

				<div className={contactStyles.borderPosition}>
					<div className={contactStyles.border}></div>
				</div>

				<div className={contactStyles.formStyle}>
					<form action='' id='formid'>
						<input type='text' name='' id='' placeholder='Name*' required />

						<input type='text' name='' id='' placeholder='Email*' required />

						<input type='text' name='' id='' placeholder='Contact number' />

						<input
							className={contactStyles.inputDate}
							type='text'
							placeholder='Date of reservation'
							onFocus={(e) => (e.target.type = 'date')}
							onBlur={(e) => (e.target.type = 'text')}
						/>

						<select placeholder='Number of guests'>
							<option value='' disabled selected hidden>
								Number of guests
							</option>
							<option value='2'>2</option>
							<option value='3'>3</option>
							<option value='4'>4</option>
							<option value='5'>5</option>
							<option value='6'>6</option>
							<option value='7'>7</option>
							<option value='8'>8</option>
							<option value='9'>9</option>
							<option value='10+'>10+</option>
						</select>

						<input
							type='text'
							placeholder='Time of reservation'
							onFocus={(e) => (e.target.type = 'time')}
							onBlur={(e) => (e.target.type = 'text')}
						/>

						<textarea
							name=''
							id=''
							cols='30'
							rows='10'
							placeholder='Any additional information'
						></textarea>
					</form>
				</div>

				<div className={contactStyles.button}>
					<button
						className={contactStyles.buttonStyle}
						type='submit'
						form='formid'
						value='Submit'
					>
						Submit
					</button>
				</div>
			</div>
		</Layout>
	);
};

export default Contact;
