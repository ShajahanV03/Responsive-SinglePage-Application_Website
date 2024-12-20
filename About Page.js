import React from "react";
import pic6  from '../images/pic6.jpg';

function About() {
  return (
    <div>
        <div className="about">
             <section className='section'>
          <div className='container'>
            <div className='card shadow'>
            <div className='card-body'>
           <div className='row'>
            <div className='col-md-8'>
                  <div>
                  <h2 className="title1">Over 25 years of expertise</h2><br />

                <h5 className="content1">Surya Exports & Imports is a leading global provider of audit and assurance, consulting, financial advisory, risk advisory, tax, and related services. Deloitte currently has 330,000 people in more than 150 countries and territories. Our culture and purpose – to make an impact that matters – is shared by our member firms all over the world.</h5>

                  </div>
            </div>
            <div className='col-md-4 border-start'>

            <img src={pic6} className="w-100 border-bottom" alt='services' />

            </div>
           </div>
        </div>
            </div>
        </div>
          </section>

        <section>

        <p className="content2">We empower organisations and equip individuals with the expertise to trade effectively, sustainably and competitively</p>

        <p className="content3">The Institute was established over 25 years ago to support Indian businesses in growing their international markets and trade. The Institute is the leading association of exporters and importers. We provide education and training to professionalise the India’s international traders.</p>

        <p className="content3">As a partner with Indian government, we deliver national and international programmes, acting as evangelists for the India and establishing Indian processes and standards globally.</p>

        <p className="content3">The Institute co-partners in running the online Customs Academy, the world’s first training platform dedicated to customs skills and developed at the request of IM Revenue & Customs (IMRC).</p>
        </section>
        </div>

    </div>
  );
}

export default About;


