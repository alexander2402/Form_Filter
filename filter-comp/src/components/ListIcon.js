import React, {Component} from 'react';

class Icon extends Component {
    render() {
        const {src, className} = this.props;
        return (
            <div>
                <svg className={className} version="1.1" width="12" height="16" role='img'>
                    <path d={src}></path>
                </svg>
            </div>
        );
    }
}

export default Icon;
