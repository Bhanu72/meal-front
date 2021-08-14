import React from 'react';
import './flex.scss';
import Button from '../Flexbox/Button';


function Flex() {
    return (
        <div className="flex">
<div className="d-flex flex-row bd-highlight mb-3">
    <h6 className='sday'>Select your day:</h6>
<Button text="Day 1"></Button>
<Button text='Day 2'></Button>
<Button text='Day 3'></Button>
<Button text='Day 4'></Button>
<Button text='Day 5'></Button>
<Button text='Day 6'></Button>
<Button text='Day 7'></Button>
</div>
        </div>
        
    )
}

export default Flex
