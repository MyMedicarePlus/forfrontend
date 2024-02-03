import React from "react";
import { Ri24HoursLine } from "react-icons/ri";
import { FaUserEdit } from "react-icons/fa";
import { RiSearchEyeLine } from "react-icons/ri";
import { RiFileTextLine } from "react-icons/ri";
import { FcSurvey } from "react-icons/fc";
import { FcBusinessman } from "react-icons/fc";
import { SlArrowRight } from "react-icons/sl";



const MainContent = () => {
    return (
       <>
        <div className="container mb-4" style={{marginTop:"1px"}}>
        <div className="bd-example m-0 border-0 bd-example-ratios" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',flexWrap: 'wrap' }}>
        <div style={{ width: '200px', height: '200px', marginTop: '10px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      <div style={{ width: '90%', height: '30%', background: '#E8EDFF', fontSize: "12px", display: 'flex', justifyContent: 'flex-start', flexDirection: 'row', alignItems: 'center' }}>
        <img src="images/hospi.jpg" alt="consult image" style={{ width: "30%", height: "40%", marginRight: '10px' }} />
        <div>
        <p style={{ marginBottom: '5px' }}>Find Doctor</p>
        <p>Pre-Book</p>
       </div>
       </div>
      </div>       
<div style={{ width: '200px', height: '200px', marginTop: '10px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      <div style={{ width: '90%', height: '30%', background: '#FFF5D0', fontSize: "12px", display: 'flex', justifyContent: 'flex-start', flexDirection: 'row', alignItems: 'center' }}>
        <img src="images/hospi.jpg" alt="consult image" style={{ width: "30%", height: "40%", marginRight: '10px' }} />
        <div>
        <p style={{ marginBottom: '5px' }}>Find Hospital</p>
        <p>Pre-Book</p>
       </div>
       </div>
      </div>       
<div style={{ width: '200px', height: '200px', marginTop: '10px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      <div style={{ width: '90%', height: '30%', background: '#E8EDFF', fontSize: "12px", display: 'flex', justifyContent: 'flex-start', flexDirection: 'row', alignItems: 'center' }}>
        <img src="images/consult.jpg" alt="consult image" style={{ width: "30%", height: "40%", marginRight: '10px' }} />
        <div>
        <p style={{ marginBottom: '5px' }}>Video Consult</p>
        <p>Pre-Book</p>
       </div>
       </div>
      </div>       
<div style={{ width: '200px', height: '200px', marginTop: '10px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      <div style={{ width: '90%', height: '30%', background: '#FFF5D0', fontSize: "12px", display: 'flex', justifyContent: 'flex-start', flexDirection: 'row', alignItems: 'center' }}>
        <img src="images/doctor1.jpg" alt="consult image" style={{ width: "20%", height: "40%", marginRight: '10px' }} />
        <Ri24HoursLine size={35} style={{color:"red"}}/>
        <div>
        <p style={{ marginBottom: '5px' }}>Emergency Call</p>
        <p>Pre-Book</p>
       </div>
       </div>
      </div>       
      
       </div>
          
       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',marginTop:"-100px" }}>
          <div style={{ marginRight: '200px', display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
          <img src="images/consult.jpg" alt="New Image" style={{ width: "300px", height: "300px", marginTop: '5px' }} />
          <div style={{ marginLeft: '120px', textAlign: 'left' }}>
            <h5>Why Use DocIndia ?</h5>
            <p>Medicare-plus India's Fastest Growing Online Medical Platform That Makes It Hassle Free And Simple For People To Find And Book Medical Consultation Seamlessly Online Across 180+ Cities In India With Over 1800+ Verified Doctors </p>
          </div>
          </div>
       </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: "50px", padding: '20px', backgroundColor: '#FFF5d0' }}>
         <h2>Top Hospitals</h2> 
         <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', flexWrap: 'wrap' }}>
         <div style={{ width: '120px', height: '130px', backgroundColor: 'lightblue', margin: '10px' }}>
         </div>                          
         <div style={{ width: '120px', height: '130px', backgroundColor: 'lightblue', margin: '10px' }}>
         </div>
         <div style={{ width: '120px', height: '130px', backgroundColor: 'lightblue', margin: '10px' }}>
         </div>
         <div style={{ width: '120px', height: '130px', backgroundColor: 'lightblue', margin: '10px' }}>
         </div>
         <div style={{ width: '120px', height: '130px', backgroundColor: 'lightblue', margin: '10px' }}>
         </div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginTop: "50px", paddingLeft: '200px' }}>  
          <h3>How It Works</h3> 
          </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', marginTop: "15px", paddingLeft: '200px' }}>  
        <div style={{ marginRight: '20px' }}>
          <div style={{ width: '300px', height: '100px', marginTop: '8px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: '20px', marginTop: "20px" }}>
                <h5> <span><FaUserEdit size={35}/></span>Create An Account</h5>
                <span style={{fontSize:"12px"}}>Schedule An Appointment</span>
            </div>
          </div>
          <div style={{ width: '300px', height: '100px', marginTop: '8px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: '20px' }}>
                <h5> <span><RiSearchEyeLine size={30} /></span>Search For Doctor</h5>
                <span style={{fontSize:"12px"}}>Look For Qualified Doctors Based On Your Location And Needs</span>
            </div>
          </div>
          <div style={{ width: '300px', height: '100px', marginTop: '8px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: '20px' }}>
                <h5> <span><RiFileTextLine  size={35}/></span>Schedule An Appointment</h5>
                <span style={{fontSize:"12px"}}>Schedule In-Person Or Online Appointments And Share Your Documents Before The Appointment</span>
            </div>
          </div>
        </div>
        <img src="images/consult.jpg" alt="Your Image" style={{ width: '300px', height: '250px' ,marginLeft:"120px"}} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginTop: "50px", paddingLeft: '200px' }}>
          <h3>Verified Doctors</h3>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '700px' }}>
             <div style={{ width: '120px', height: '150px', backgroundColor: 'lightblue', margin: '2px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center' }}>
             <img src="images/hospi.jpg" alt="Hospital Image" style={{ width: '80px', height: '80px', marginBottom: '5px' }} />
             <span>Apollo Hospital</span>
          </div>
          <div style={{ width: '120px', height: '150px', backgroundColor: 'lightblue', margin: '2px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center' }}>
             <img src="images/hospi.jpg" alt="Hospital Image" style={{ width: '80px', height: '80px', marginBottom: '5px' }} />
             <span>Apollo Hospital</span>
          </div>
          <div style={{ width: '120px', height: '150px', backgroundColor: 'lightblue', margin: '2px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center' }}>
            <img src="images/hospi.jpg" alt="Hospital Image" style={{ width: '80px', height: '80px', marginBottom: '5px' }} />
            <span>Apollo Hospital</span>
          </div>
          <div style={{ width: '120px', height: '150px', backgroundColor: 'lightblue', margin: '2px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center' }}>
            <img src="images/hospi.jpg" alt="Hospital Image" style={{ width: '80px', height: '80px', marginBottom: '5px' }} />
            <span>Apollo Hospital</span>
          </div>
          <div style={{ width: '120px', height: '150px', backgroundColor: 'lightblue', margin: '2px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center' }}>
            <img src="images/hospi.jpg" alt="Hospital Image" style={{ width: '80px', height: '80px', marginBottom: '5px' }} />
            <span>Apollo Hospital</span>
          </div>
        </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginTop: "50px", padding: '20px', backgroundColor: '#FFF5d0', borderTop: '0.25px solid black', borderBottom: '0.25px solid black', height: '200px' }}>
    <div style={{ display: 'flex', alignItems: 'center', marginLeft: '80px' }}>
        <img src="images/seto.jpg" alt="Ask Apollo Image" style={{ width: '50px', height: '50px', marginRight: '5px' }} />
        <div style={{ margin: '0' }}>Ask Apollo</div>
    </div>
    
    <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px', marginRight: '50px' }}>
        <div style={{ padding: '10px', marginBottom: '10px', textAlign: 'center' }}>
            <div> <h5>Feeling Unwell?</h5></div>
            <div style={{ width: "70%", margin: 'auto' }}>Take an assessment in less than 3 min and get suggestions on what to do next</div>
        </div>
    </div>
    
    <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px', marginRight: '50px' }}>
        <div style={{ textAlign: 'center', padding: '10px', borderRadius: '5px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <FcSurvey size="35"/>
                <span>Enter Symptoms</span>
            </div>
        </div>
    </div>
    
    <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px', marginRight: '10px' }}>
        <div style={{ textAlign: 'center', padding: '10px', borderRadius: '5px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img src="images/cause.jpg" alt="Symptoms Image" style={{ width: '50px', height: '50px' }} />
                <span>Understand Causes</span>
            </div>
        </div>
    </div>
    
    <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px', marginRight: '10px' }}>
        <div style={{ textAlign: 'center', padding: '10px', borderRadius: '5px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <FcBusinessman size="35" />
                <span>Book Consult</span>
            </div>
        </div>
    </div>
    
    <button type="button" className="btn btn-primary" style={{width:"200px",height:"40px"}}>get started <SlArrowRight /></button>
</div>
 
<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginTop: "50px", paddingLeft: '50px' }}>
    <h3>Treading Near You</h3>
    <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
        <div style={{ width: '150px', height: '200px', marginRight: '20px', textAlign: 'center' }}>
            <img src="" alt="Image 1" style={{ width: '100%', height: 'auto' }} />
            <p>Text 1</p>
        </div>
        <div style={{ width: '150px', height: '200px', marginRight: '20px', textAlign: 'center' }}>
            <img src="images/ever.jpg" alt="Image 2" style={{ width: '80%', height: 'auto' }} />
            <p>Text 2</p>
        </div>
        <div style={{ width: '150px', height: '200px', marginRight: '20px', textAlign: 'center' }}>
            <img src="images/liv.jpg" alt="Image 2" style={{ width: '80%', height: '70%' }} />
            <p>Text 2</p>
        </div>
        <div style={{ width: '150px', height: '200px', marginRight: '20px', textAlign: 'center' }}>
            <img src="images/super.jpg" alt="Image 2" style={{ width: '80%', height: 'auto' }} />
            <p>Text 2</p>
        </div>
        <div style={{ width: '150px', height: '200px', marginRight: '20px', textAlign: 'center' }}>
            <img src="images/ph.jpg" alt="Image 2" style={{ width: '80%', height: 'auto' }} />
            <p>Text 2</p>
        </div>
        <div style={{ width: '150px', height: '200px', marginRight: '20px', textAlign: 'center' }}>
            <img src="images/evion.jpg" alt="Image 2" style={{ width: '80%', height: 'auto' }} />
            <p>Text 2</p>
        </div>      
        </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginTop: "50px", padding: '20px', backgroundColor: '#FFF5d0', borderTop: '0.25px solid black', borderBottom: '0.25px solid black', height: '200px' }}>
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        <div style={{ position: 'absolute', left: '0', top: '0', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <RiFileTextLine  style={{width:"200px",height:"200px",marginRight:"270px"}} /> 
        </div>
        <div style={{ textAlign: 'center', marginLeft: '60px' }}>
            <h5 style={{ margin: '0' }}>Order With Prescription</h5>
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '10px', width: '50%' }}>
            <p style={{ margin: '0',fontSize:"12px" }}>Upload New Prescription and we will deliver your medicine</p>
        </div>
        <button style={{ padding: '10px 20px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', marginTop: "20px" }}>Upload</button>
    </div>
   <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
    <h5>How This Works</h5>
    <ol style={{ textAlign: 'center', width: '80%',fontSize:"14px" ,marginTop:"20px"}}>
        <li style={{marginBottom:"20px"}}>Upload the photo of your perception</li>
        <li style={{marginBottom:"20px"}}>Add delivery address and place the order</li>
    </ol>
</div>

    <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',flexDirection:"column" }}>
         <ol style={{ textAlign: 'center', width: '80%',fontSize:"14px" ,marginTop:"20px"}} start={3}>
          <li style={{marginTop:"30px"}}>We will call you conform the medicines</li>
          <li style={{marginTop:"20px"}}>Now sit back! Your medicine will get delivered at your doorstop </li>
         </ol>
        </div>
    </div>

    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: "50px", padding: '20px', backgroundColor: '#FFF5d0', borderTop: '0.25px solid black', borderBottom: '0.25px solid black', height: '300px' }}>
    <h3 style={{ textAlign: 'center',marginTop:"15px" }}>What our users says about their online consultation experince</h3>
    <div style={{ display: 'flex', width: '110%', marginTop: '20px',marginBottom:"10px" }}>
    
    <div style={{ width: '320px', height: '200px', border: "1px solid black", borderRadius: "8px", marginRight: "10px", padding: "10px", display: "flex", flexDirection: "column" }}>
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <div style={{ marginRight: "10px" }}>
            <FcBusinessman size="40" />
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
            <h4 style={{ margin: "0",marginRight:"50px" }}>Deepak</h4>
            <h6 style={{ margin: "0",marginRight:"80px",fontSize:"12px" }}>25yr old  </h6> 
        </div>
      </div>
     </div>
     
     <div style={{ width: '320px', height: '200px', border: "1px solid black", borderRadius: "8px", marginRight: "10px", padding: "10px", display: "flex", flexDirection: "column" }}>
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <div style={{ marginRight: "10px" }}>
            <FcBusinessman size="40" />
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
            <h4 style={{ margin: "0",marginRight:"50px" }}>Deepak</h4>
            <h6 style={{ margin: "0",marginRight:"80px",fontSize:"12px" }}>25yr old  </h6> 
        </div>
      </div>
     </div>
     
     <div style={{ width: '320px', height: '200px', border: "1px solid black", borderRadius: "8px", marginRight: "10px", padding: "10px", display: "flex", flexDirection: "column" }}>
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <div style={{ marginRight: "10px" }}>
            <FcBusinessman size="40" />
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
            <h4 style={{ margin: "0",marginRight:"50px" }}>Deepak</h4>
            <h6 style={{ margin: "0",marginRight:"80px",fontSize:"12px" }}>25yr old  </h6> 
        </div>
      </div>
     </div>

     <div style={{ width: '320px', height: '200px', border: "1px solid black", borderRadius: "8px", marginRight: "10px", padding: "10px", display: "flex", flexDirection: "column" }}>
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <div style={{ marginRight: "10px" }}>
            <FcBusinessman size="40" />
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
            <h4 style={{ margin: "0",marginRight:"50px" }}>Deepak</h4>
            <h6 style={{ margin: "0",marginRight:"80px",fontSize:"12px" }}>25yr old  </h6> 
        </div>
      </div>
     </div>

     <div style={{ width: '320px', height: '200px', border: "1px solid black", borderRadius: "8px", marginRight: "10px", padding: "10px", display: "flex", flexDirection: "column" }}>
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <div style={{ marginRight: "10px" }}>
            <FcBusinessman size="40" />
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
            <h4 style={{ margin: "0",marginRight:"50px" }}>Deepak</h4>
            <h6 style={{ margin: "0",marginRight:"80px",fontSize:"12px" }}>25yr old  </h6> 
        </div>
      </div>
     </div>
    </div>
</div>

    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginTop: "50px", paddingLeft: '50px' }}>
      <h3>Health Articles</h3>
      <p>Get up-to-date on our latest health updates</p>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <div style={{ width: '200px', height: '200px', border:"1px solid black",marginLeft:"10px" }}>
        <img src="images/run.jpg" alt="Description" style={{ width: "100%", height: "auto", marginBottom: "10px" }} />
        <p style={{ textAlign: "center" ,fontSize:"12px"}}>Benifites of walking Backward:Unveling the science...</p>
        </div>
        <div style={{ width: '200px', height: '200px',border:"1px solid black",marginLeft:"10px" }}>
        <img src="images/del.jpg" alt="Description" style={{ width: "100%", height: "auto", marginBottom: "10px" }} />
        <p style={{ textAlign: "center" ,fontSize:"12px"}}>pharEasy's on-time promise:Cashback for Any delivery delay</p>
        </div>
        <div style={{ width: '200px', height: '200px', border:"1px solid black",marginLeft:"10px" }}>
        <img src="images/veg.jpg" alt="Description" style={{ width: "100%", height: "auto", marginBottom: "10px" }} />
        <p style={{ textAlign: "center" ,fontSize:"12px"}}>vaginal steaming: Research-Backed Insight on Benifites and.....</p>
        </div>
        <div style={{ width: '200px', height: '200px', border:"1px solid black",marginLeft:"10px" }}>
        <img src="images/mou.jpg" alt="Description" style={{ width: "100%", height: "auto", marginBottom: "10px" }} />
        <p style={{ textAlign: "center" ,fontSize:"12px"}}>Why does Mouthwash Burn? Decoding Oral Health Mystries</p>
        </div>
        <div style={{ width: '200px', height: '200px', border:"1px solid black",marginLeft:"10px" }}>
        <img src="images/bur.jpg" alt="Description" style={{ width: "100%", height: "auto", marginBottom: "10px" }} />
        <p style={{ textAlign: "center" ,fontSize:"12px"}}>Vaginal Burning After Sex: Reasrch Based Reason and  Relief Option..</p>
        </div>
    </div>
    </div>


    </div>          
       </>
    );
};

export default MainContent;