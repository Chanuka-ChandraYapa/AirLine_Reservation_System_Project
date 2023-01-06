import './team.css'
import Member1 from './aravinda.jpg';
import image from "./team.jpg";

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
                <h1>H.W.K Aravinda</h1>
                <h2>CEO</h2>
                <p>
                One and Only project saviour
                </p>
                <div className="social-media">
                  <LinkedInIcon />
                  <GitHubIcon />
                </div>
            </div>
          </div>

          <div className="member">
            <img width={400} height={400} src={Member1}/>
            <div className="description">
                <h1>Chanuka Lakshan</h1>
                <h2>200742E</h2>
                
                <div className="social-media">
                  <LinkedInIcon />
                  <GitHubIcon />
                </div>
            </div>
          </div>

          <div className="member">
            <img width={400} height={400} src={Member1}/>
            <div className="description">
                <h1>Nadun Sanjeevana</h1>
                <h2>200746U</h2>
                
                <div className="social-media">
                  <LinkedInIcon />
                  <GitHubIcon />
                </div>
            </div>
          </div>

          <div className="member">
            <img width={400} height={400} src={Member1}/>
            <div className="description">
                <h1>Tharindu Madhusanka</h1>
                <h2>200735K</h2>
               
                <div className="social-media">
                  <LinkedInIcon />
                  <GitHubIcon />
                </div>
            </div>
          </div>

          <div className="member">
            <img width={400} height={400} src={Member1}/>
            <div className="description">
                <h1>Nadeesha Pabasara</h1>
                <h2>Unknown</h2>
                
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