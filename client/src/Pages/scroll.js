import React, {useState} from 'react';

import { IconButton } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import styled from 'styled-components';

const Button = styled.div`
   position: fixed; 
   width: 100%;
   left: 93%;
   bottom: 80px;
   height: 20px;
   font-size: 3rem;
   z-index: 1;
   cursor: pointer;
   color: green;
`

const ScrollButton = () =>{

const [visible, setVisible] = useState(false)

const toggleVisible = () => {
	const scrolled = document.documentElement.scrollTop;
	if (scrolled > 300){
	setVisible(true)
	}
	else if (scrolled <= 300){
	setVisible(false)
	}
};

const scrollToTop = () =>{
	window.scrollTo({
	top: 0,
	behavior: 'smooth'
	/* you can also use 'auto' behaviour
		in place of 'smooth' */
	});
};

window.addEventListener('scroll', toggleVisible);

return (
	<Button>
	<IconButton>
	<KeyboardArrowUpIcon onClick={scrollToTop}
	sx={{ fontSize: 50 }}
	style={{display: visible ? 'inline' : 'none'}} />
	</IconButton></Button>
);
}

export default ScrollButton;
