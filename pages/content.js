import React from 'react';
import { style } from 'next/css';

const styles = {
    h1:{
        fontSize: '100px',
        color:'#FF0000'
    }
}

export default class Content extends React.Component{
    render() {
        let i = 1;
        return (
            <div>
                <h1>Content</h1>
                <p data-myattribute="somevalue">This is the content!!!</p>
                <h1 className={style(styles.h1)}>{i==1?'True':'False'}</h1>     
            </div>    
        )
    }
}