import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import PlayerAPI from '../playerAPI';

const divStyle = {
    padding: '50px',
    border: '10px solid yellowgreen',
    maxWidth: 'fit-content',
    boxShadow: '25px 15px 20px yellowgreen',
    borderRadius: '25%'
}

const Player = () => {
    //The useParams hook returns an object of key/value pairs of the dynamic params from the current URL
    // that were matched by the <Route path>.
    const { id } = useParams(); // to get parameters

    // useNavigate hook returns a function that lets you navigate programatically / imperatively

    const navigate = useNavigate();

    const player = PlayerAPI.get(parseInt(id));

    if (!player) {
        return <div>Sorry, Player not found!</div>
    }
    return (
        <div className='container' style={divStyle}>
            <h1 style={{ margin: '20px', color: 'black', textShadow: '2px 13px 10px maroon' }}>
                {player.name} (#{player.id})
            </h1>
            <h2 style={{ margin: '20px', color: 'navy', textShadow: '2px 13px 10px navy' }}>
                Position: {player.position}
            </h2>

            <Link className='btn btn-success'
                style={{margin:'15px'}}
                to={`/cricketer/allCricketers`}>
                Back
            </Link>
            <button className='btn btn-danger'
                onClick={() => {
                    // here is the code to take me home
                    navigate('/home');
                }}>
                Home
            </button>
        </div>
    )
}

export default Player;