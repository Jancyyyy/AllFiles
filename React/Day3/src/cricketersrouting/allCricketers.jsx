import React from 'react';
import PlayerAPI from '../playerAPI';
import {Link} from 'react-router-dom';

const AllCricketers = () => (
    <div className='container'>
        <h1 style={{ margin: '20px', fontWeight: 'bolder' }}
            className='display-2 text-success'>Cricketers List</h1>
        <ul className='list-unstyled display-6'>
            {
                PlayerAPI.all().map(p =>(
                    <li key={p.id}>
                        <Link to={`/cricketer/${p.id}`}
                        style={{textShadow:'2px 12px 8px green',color:'black'}}>
                            {p.name}
                        </Link>
                    </li>
                ))
            }
        </ul>
    </div>
)

export default AllCricketers;