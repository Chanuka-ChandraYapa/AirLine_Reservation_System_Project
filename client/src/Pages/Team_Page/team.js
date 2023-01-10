import './team.css'
import Member1 from './1.png';
import Member2 from './2.png';
import Member3 from './3.png';
import Member4 from './4.png';
import Member5 from './5.png';


import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Paper } from '@mui/material';

export default function Model1() {
  return (
    // <Paper elevation={24}
    //   sx={{
    //     position: "relative",
    //     backgroundColor: 'grey.900',
    //     color: '#fff',
    //     mb: 4,
    //     backgroundSize: 'cover',
    //     backgroundRepeat:'repeat',
    //     backgroundPosition: 'center',
    //     backgroundImage: `url(${image})`,
    //     width: 'auto',
    //     height: 1100,
    //   }}
    // >
    <div id='model1'>
        <h1 className='model-title'>Our Team</h1>
        <div className="divider"></div>
        <div className="members">
          <div className="member">
            <img width={400} height={400} src={Member1}/>
            <div className="description">
                <h1>Lauren Davis</h1>
                     
                <div className="social-media">
                  <LinkedInIcon />
                  <GitHubIcon />
                </div>
            </div>
          </div>

          <div className="member">
            <img width={400} height={400} src={Member2}/>
            <div className="description">
                <h1>John Smith</h1>             
                
                <div className="social-media">
                  <LinkedInIcon />
                  <GitHubIcon />
                </div>
            </div>
          </div>

          <div className="member">
            <img width={400} height={400} src={Member3}/>
            <div className="description">
                <h1>Emily Williams</h1>
              
                
                <div className="social-media">
                  <LinkedInIcon />
                  <GitHubIcon />
                </div>
            </div>
          </div>

          <div className="member">
            <img width={400} height={400} src={Member4}/>
            <div className="description">
                <h1>Sarah Johnson</h1>
              
               
                <div className="social-media">
                  <LinkedInIcon />
                  <GitHubIcon />
                </div>
            </div>
          </div>

          <div className="member">
            <img width={400} height={400} src={Member5}/>
            <div className="description">
                <h1>David Chen</h1>
             
                
                <div className="social-media">
                  <LinkedInIcon />
                  <GitHubIcon />
                </div>
            </div>
          </div>

         
          
        </div>
    </div>
    
  );
}