import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
    render() {
        const {inputPlaceholder, onChangeInput} = this.props;
        return (
            <div>
                <input
                    className='form-control mb-2'
                    type='text'
                    placeholder={inputPlaceholder}
                    onChange={onChangeInput}
                />
            </div>
        );
    }
}


export default Input;
