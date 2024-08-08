import React from 'react';
import '../project.css';
import first from '../assets/SECOND.mp4'
const Footer = () => {
  return (
    <div>
<div className='projectContainer'>

<div className='projectVideo'>
{/* <video width="100%" height="100%" controls>
        <source src={first} type="video/mp4" />
        Your browser does not support the video tag.
        </video> */}

<iframe
        width="800"
        height="415"
        src="https://www.youtube.com/embed/Jp5VIOMmTuU"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
</div>

<div className='projectText'>
    <div className='projectHeading'>
    FEATURED PROJECT
    </div>
    <div className='projectHeading' style={{fontSize: '19px', color: 'rgb(189 147 232)'}}>
    Enhancing Connectivity 
    </div>

    <div className='projectPara'>
        Board rooms with AI Auto tracking camera <br />
        Meeting Rooms/Huddle Spaces <br />
        Town hall with Fine Pixel Pitch Curved LED <br />
        Traninig Hall with HyFlex Facility <br />
        Smart Desk Management for Workspace 

        <br />
        <br />

        <div style={{color: 'rgb(189 147 232)'}}>
        "Behind Every Successful Project is a Stellar Team!" <br/>
        Kudos to the Aesthetix Technologies Crew
        </div>
        
    </div>
</div>

</div>
        <div style={{height: '40vh', display: 'flex', justifyContent:'center', alignItems: 'center', flexDirection: 'column'}}>
        <div style={{position: 'relative', top: 0, width: '60px', height: '3px', backgroundColor: 'rgb(120, 68, 172)', borderRadius: '4px', margin: '10px'}}></div>

            <div className='helpHead'>
                HOW CAN WE HELP ?
            </div>
            <div className='helpText'>
                Connect with one of our audiovisual experts and start creating an unforgettable AV experience today!
            </div>
            <input type='button' className='TouchButton' value="GET IN TOUCH" /> 
        </div>
    </div>
   
  );
};

export default Footer;