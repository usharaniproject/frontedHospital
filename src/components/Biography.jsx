import React from 'react'

const Biography = ({imageUrl}) => {
  return (
    <div className='container biography'>
      <div className="banner">
        <img src={imageUrl} alt="aboutImg" />
      </div>
      <div className="banner">
        <h2 className='text-2xl'>About the Hospital</h2>
        {/* <h3>Who we are</h3> */}
        <p style={{fontStyle:"inherit"}} >Founded in 1952, ZEECARE began as a small, community-oriented clinic with a mission to provide accessible healthcare to the residents of Hyderabad. The vision was simple yet ambitious: to ensure that every individual, regardless of their socioeconomic status, could receive high-quality medical care.</p>
        <p style={{fontStyle:"inherit"}}>By the 1970s, ZEECARE had expanded its facilities to accommodate the growing population. New departments were established, including Pediatrics, Obstetrics, Gynaecology and Radiology and Emergency Services. The hospital also invested in state-of-the-art medical equipment, ensuring that patients received the best possible care.</p>
        <p style={{fontStyle:"inherit"}}>Today, ZEECARE is a fully integrated healthcare system with over 500 beds, multiple specialized departments, and a team of more than 1,200 healthcare professionals. The hospital continues to embrace the latest medical technologies and practices, ensuring that patients receive top-tier care in a compassionate environment.</p>
         <p style={{fontStyle:"inherit"}}>Throughout its history, ZEECARE has remained deeply connected to the community. From health fairs and free clinics to educational seminars and wellness programs, the hospital actively promotes public health and preventive care.</p>
         <p style={{fontStyle:"inherit"}}>As we look to the future, ZEECARE is committed to expanding our services and facilities across the country and abroad to meet the evolving needs of our community. Plans are underway for a new outpatient care center, and we continue to explore innovative treatments and technologies that will enhance patient outcomes.</p>
      </div>
    </div>
  )
}

export default Biography

