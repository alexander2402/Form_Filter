import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Form from './components/form'
import fakeList from './FakeList/FakeList'
import Button from './components/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import BookSVG from './BookSVG/bookSVG';
import Input from './components/input/Input'

class App extends Component {
    constructor() {
        super();
        this.state = {
            searchValue: '',
        }
    };

_onChangeInput = (e) => {
    const {value} = e.target;
    this.setState({searchValue: value.toLowerCase()});
};

render()
{
    console.log(this.state.searchValue);
    return (
        <div className='app'>
            <Form
                searchValue={this.state.searchValue}
                title='Repositories'
                button={<Button
                    className='btn btn-success  btn-sm'
                    buttonName='New repository'
                    path='https://github.com/new'
                />}
                input={<Input
                    onChangeInput={this._onChangeInput}
                    inputPlaceholder='Find a repository...'
                />}

                list={fakeList}
                listIcon={<BookSVG
                    margin='mr-2'
                />}
            />
        </div>
    );
}
}


export default App;
