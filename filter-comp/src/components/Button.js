import React, {Component} from 'react';

class Button extends Component {
    render() {
        const {buttonName, className, path} = this.props;
        return (
            <div>
                <a href={path}>
                    <button className={className}>
                        {buttonName}
                    </button>
                </a>
            </div>
        );
    }
}

export default Button;