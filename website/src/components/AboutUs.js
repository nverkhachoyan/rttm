import React from 'react';
import "./subcomponents/sub-AboutUs/AboutUs.css"

const AboutUs = () => { 
    return(
        <section>
          <div className="box">
                  <h1 className="about-title">About Us</h1>
                  
                  <div className="main-content">
                  <h2>Our Project</h2>  
                      <p>Vehicle detection plays an important role in analyzing traffic flow data for efficient planning in intelligent transportation. Machine Learning technology has been increasingly used for vehicle detection in both 2D real-time traffic flow video and 3D point clouds. Adverse weather conditions, such as fog, rain, snow, extreme wind, and other conditions prove to be challenging for 2D vehicle detection. 3D LiDAR point clouds can be more resistant to adverse weather conditions. Most of the existing research on 3D vehicle detection are used for autonomous vehicle driving with the LiDAR cameras are deployed on vehicles. There is a lack of research on real-time vehicle detection for intelligent transportation with LiDAR cameras deployed by highway/freeway. In this project, we propose to build a system that collects real-time traffic flow data through 3D LiDAR cameras, processes the 3D point cloud data for vehicle detection and classification, and provides a web-based service with vehicles detected and classified in real-time traffic flow and data visualization for statistical traffic flow data.</p>
                  </div>
                  <h2>Our team</h2>
                  
                                  
                  <div class="container">
                    <div class="membersDisplay">
                      <div class="member">
                        <div class="name">Andres Mercado</div>
                        <img src="/images/img-AboutUs/Andres.jpg" alt="Student pfp" class="pfp-photo"></img>
                        <br></br>
                        <div class="description">I am a graduating Senior, interested in Robotics and Machine Learning. On this project I helped the Machine Learning team integrate the tiny Yolo algorithm that was the best fit for our project. </div>
                        <a href="https://github.com/andymerc">
                        <img src="/images/img-AboutUs/githublogo.png" alt="Git hub logo" class="github-photo"></img>
                        </a>
                      </div>
                      
                      <div class="member">
                        <div class="name">Alondra Gonzalez</div>
                        <img src="/images/img-AboutUs/alondra_resize.jpg" alt="Student pfp" class="pfp-photo"></img>
                        <br></br>
                        <div class="description">Hello my name's Alondra Gonzalez, I worked on the data acquisition process and configuring the AWS Kinesis Video Streams module to add a stream to the project website.</div>
                        <a href="https://github.com/AlondraGonzalez211">
                          <img src="/images/img-AboutUs/githublogo.png" alt="Git hub logo" class="github-photo"></img>
                        </a>
                      </div>
                      <div class="member">
                        <div class="name">Alexander Rose</div>
                        <img src="/images/img-AboutUs/rose_alexander.jpg" alt="Student pfp" class="pfp-photo"></img>
                        <br></br>
                        <div class="description">Graduate student - M.S. Software Engineering at CSUN. I helped build the real-time system on AWS</div>
                        <a href="https://github.com/rosealexander">
                          <img src="/images/img-AboutUs/githublogo.png" alt="Git hub logo" class="github-photo"></img>
                        </a>
                      </div>
                      <div class="member">
                        <div class="name">Brian Uribe</div>
                        <img src="/images/img-AboutUs/brian_resize.jpg" alt="Student pfp" class="pfp-photo"></img>
                        <br></br>
                        <div class="description">Hello! My name is Brian and I am a senior pursuing a bachelor's in computer science. I helped work on the backend of the RTTM website and was the one behind the video players that display the real-time video feed coming from the cameras connected to our system.</div>
                        <a href="https://github.com/ItsBrianUribe">
                          <img src="/images/img-AboutUs/githublogo.png" alt="Git hub logo" class="github-photo"></img>
                        </a>
                      </div>
                      <div class="member">
                        <div class="name">Icess Nisce</div>
                        <img src="/images/img-AboutUs/icess_resize.jpg" alt="Student pfp" class="pfp-photo"></img>
                        <br></br>
                        <div class="description">Hi, I'm Icess. I'm an undegraduate senior majoring in Computer Science, with interests in machine learning, AI, AR/VR, web development and design. My role in the Real-Time Traffic Monitoring Project involves the development of the 3D vehicle detection model and real-time streaming capabilities of the system.</div>
                        <a href="https://github.com/sseci">
                          <img src="/images/img-AboutUs/githublogo.png" alt="Git hub logo" class="github-photo"></img>
                        </a>
                      </div>
                      
                      <div class="member">
                        <div class="name">Matthew Davis</div>
                        <img src="/images/img-AboutUs/matthew_resize.jpg" alt="Student pfp" class="pfp-photo"></img>
                        <br></br>
                        <div class="description">My name is Matthew Davis. I am a 22 year old CSUN student working towards a bachelor’s in Computer Science. My work within the Real-Time Traffic Monitoring group has solely revolved around designing the model for 2D object detection.</div>
                        <a href="https://github.com/CalTransProject">
                          <img src="/images/img-AboutUs/githublogo.png" alt="Git hub logo" class="github-photo"></img>
                        </a>
                      </div>
                      <div class="member">
                        <div class="name">Javier Carranza</div>
                        <img src="/images/img-AboutUs/javier3_resize.jpg" alt="Student pfp" class="pfp-photo"></img>
                        <br></br>
                        <div class="description">Hello, I'm Javier pursuing a bachelor's in computer science. My main role in the project is to help make progress on the RTTM website and was the one behind the charts that display the real-time data coming from the cameras connected to our system.</div>
                        <a href="https://github.com/JavierACarranza">
                          <img src="/images/img-AboutUs/githublogo.png" alt="Git hub logo" class="github-photo"></img>
                        </a>
                      </div>
                      <div class="member">
                        <div class="name">Robin Rosculete</div>
                        <img src="/images/img-AboutUs/Robin.png" alt="Student pfp" class="pfp-photo"></img>
                        <br></br>
                        <div class="description">Hello, My name is Robin. Im a CS undegrad student. NA di worked on Web development and Machine Learning</div>
                        <a href="https://github.com/RobinRosculete">
                        <img src="/images/img-AboutUs/githublogo.png" alt="Git hub logo" class="github-photo"></img>
                        </a>
                      </div>
                      <div class="member">
                        <div class="name">Jose Flores</div>
                        <img src="/images/img-AboutUs/Jose.jpeg" alt="Student pfp" class="pfp-photo"></img>
                        <br></br>
                        <div class="description">Hello! Im a undergrad student majoring in computer science. In this project I focused on labeling LiDar data and Web Development  </div>
                        <a href="https://github.com/Jose-Flor">
                          <img src="/images/img-AboutUs/githublogo.png" alt="Git hub logo" class="github-photo"></img>
                        </a>
                      </div>
                    </div>
                  </div>
    
        <img src="/images/img-AboutUs/CSUNlogo.png" alt="Image at the bottom"></img>
     
            </div>
        </section>
    )
}
export default AboutUs; 
