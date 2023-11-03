import React from 'react';

export default function GifList(props) {
    //console.log(props.gifyOriginal)
    const { url, height, width } = props.gifyOriginal //destructuring

    return (
        <div>
            <ul>
                <li><img src={url} alt="GIF Loading" height={height} width={width}/></li>
            </ul>
        </div>
    );
}
