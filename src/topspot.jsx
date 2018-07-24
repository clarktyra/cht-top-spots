import React from 'react';
export default props => (
<div className='well'>
    <h4>{props.name}</h4>
    <p>{props.description}</p>
    <a className="btn btn-info" href={`https://maps.google.com/?q=${props.location[0]},${props.location[1]}`}
>Google Map Locatiom</a>
</div>
);