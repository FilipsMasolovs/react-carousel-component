import React from 'react';

export default class Slide extends React.Component {
    render () {
        const { content, bgImage, bgColor } = this.props

        return (
            <div className={'slide'} style={{backgroundImage: `url(${bgImage})`, backgroundColor: `${bgColor}`}}>
                {content}
            </div>
        )
    }
};