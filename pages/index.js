import React from 'react';
import { style } from 'next/css';

const styles = {
    h1:{
        fontSize: '100px',
        color:'#FF0000'
    }
}
export default class extends React.Component{
    render() {
        let i = 1;
        return (
            <div>
                <h1>Header</h1>
                <h2>Content</h2>
                <p data-myattribute="somevalue">This is the content!!!</p>
                <h1 className={style(styles.h1)}>{i==1?'True':'False'}</h1>    
            </div>    
        )
    }
}