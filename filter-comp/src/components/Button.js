import React, {Component} from 'react';

class Button extends Component {
    render() {
        const {buttonName, className} = this.props;
        return (
            <div>
                <button className={className}>
                    {buttonName}
                </button>
            </div>
        );
    }
}

export default Button;