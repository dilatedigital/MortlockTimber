import React from 'react';
import { Link } from 'gatsby';

const Button = ({ ...props }) =>  {
    return (
      <a href={(props.link) ? props.link : '/'} className={(props.style) ? 'button ' + props.style : 'button'}>{(props.text) ? props.text : 'Learn more'}</a>
    )
}

export default Button;