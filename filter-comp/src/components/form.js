import React, {Component} from 'react';
import PropTypes from 'prop-types';
import fakeList from '.././FakeList/FakeList'
import Button from '.././components/Button'

class Form extends Component {
    render() {
        const {title, inputPlaceholder, list, listIcon, button,} = this.props;
        const fakeListTo = list.map((value) =>
            <li key={value.id} className=''>
                {listIcon}
                <a href={value.link}>{value.linkName}</a>
            </li>
        );
        return (
            <div className='col-3 m-5 '>
                <div className='card'>
                    <div className='card-header'>
                        <div className='row'>
                            <div className='col-6'>{title}</div>
                            <div className='col-6'>{button}</div>
                        </div>
                    </div>
                    <div className='card-body'>
                        <div>
                            <input className='form-control mb-2'
                                   type='text'
                                   placeholder={inputPlaceholder}>
                            </input>
                        </div>
                        <ul className='list-unstyled'>
                            {fakeListTo}
                        </ul>
                    </div>
                </div>
            </div>

        );
    }
}


export default Form;
