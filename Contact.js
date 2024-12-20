import React from 'react';

function Contact () {
    return(
        <div class="bg-light">

          <section className='section'>
          <div className='container'>
            <div className='card shadow'>
            <div className='card-body'>
           <div className='row'>
            <div className='col-md-6'>
                    <h6>Contact Form</h6>
                    <hr />

                    <div className='form-group'>
                    <label className='mb-1'>Full Name</label>
                    <input type="text" className='form-control' placeholder='Enter Full Name' />
                    </div>

                    <div className='form-group'>
                    <label className='mb-1'>Phone Number</label>
                    <input type="text" className='form-control' placeholder='Enter Full Name' />
                    </div>

                    <div className='form-group'>
                    <label className='mb-1'>Email Id</label>
                    <input type="text" className='form-control' placeholder='Enter Full Name' />
                    </div>

                    <div className='form-group'>
                    <label className='mb-1'>Message</label>
                    
                    <textarea rows="3"  className='form-control' placeholder='Enter Your Message..'></textarea>
                    </div>

                    <div className='form-group py-3'>
                        <button type="button" className='btn btn-primary shadow w-100'> Send Message</button>
                    </div>

            </div>
            <div className='col-md-6 border-start'>

            <h5 className='main-heading'>Address Information</h5>
            <div className='underline'></div>
                <p>
               <h6> #297\68 Byrathi Layout MG Road Bengaluru</h6>
                </p>

                <p>
                   <h6> Phone :+91 8374****37</h6>
                </p>

                <p>
                   <h6> Phone :+91 8919****06</h6>
                </p>

                <p>
                   <h6> Email :SuryaExports&Imports@gmail.com</h6>
                </p>

            </div>
           </div>
        </div>
            </div>
        </div>
          </section>

        </div>
    );
}

export default Contact ;

