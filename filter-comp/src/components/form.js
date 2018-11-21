import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Form.css'

class Form extends Component {
    render() {


        const {title, list, listIcon, button, input, searchValue} = this.props;
        const fakeListTo = list.filter(item =>
            item.linkName.toLowerCase().indexOf(searchValue) > -1 ).map((value) =>
            <li key={value.id} className=''>
                {listIcon}
                <a href={value.link}>{value.linkName}</a>
            </li>
        );

        return (

            <div className='col-3 m-5'>
                <div className='card'>
                    <div className='card-header'>
                        <div className='row'>
                            <div className='col-6'>{title}</div>
                            <div className='col-6'>{button}</div>
                        </div>
                    </div>
                    <div className='card-body'>
                        <div>
                            {input}
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
