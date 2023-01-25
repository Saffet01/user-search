import React, { Component } from 'react';
import './List.css';
import PropTypes from "prop-types"

class List extends Component {
    static propTypes={
        contacts:PropTypes.array.isRequired
    }
    render() {
        return (
            <div className='listArea'>

                <input type="text" name='filter' id='filter' placeholder={"Filter by name or phone"} />
                <ul className='list'>

                    {
                        this.props.contacts.map(item =>

                            <li key={item.phone}>
                                <span className='name'>{item.name}</span>
                                <span className='phone'>{item.phone}</span>
                            </li>

                        )
                    }


                    {/* <li>
                        <span className='name'>Saffet Ramazan Kaban</span>
                        <span className='phone'>0531 494 06 92</span>
                    </li>
                    <li>
                        <span className='name'>Furkan Ertantu</span>
                        <span className='phone'>0545 567 87 13</span>
                    </li> */}
                </ul>

            </div>
        )
    }
}
export default List