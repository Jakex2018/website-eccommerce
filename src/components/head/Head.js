import React from 'react';

const Head = (props) => {
    document.title = 'Last Shop -' + props.title
    return (
        <div>{props.children}</div>
    );
}

export default Head;
