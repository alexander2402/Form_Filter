import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Form from './components/form'
import fakeList from './FakeList/FakeList'
import Button from './components/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import Icon from './components/ListIcon';
import BookSVG from './BookSVG/bookSVG';

class App extends Component {
    render() {
        return (
            <div className='app'>
                <Form
                    title='Repositories'
                    button={<Button
                        className='btn btn-success  btn-sm'
                        buttonName='New repository'
                    />}
                    inputPlaceholder='Find a repository...'
                    list={fakeList}
                    listIcon={<BookSVG
                        margin = 'mr-2'
                    />}
                />
            </div>
        );
    }
}


export default App;
