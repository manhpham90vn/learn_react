import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss'

const Album = ({album}) => {
    return (
        <li className="album">
            <div className="album__thumbnail">
                <img src={album.img} alt={album.title}/>
            </div>
            <div className="album__title">
                <p>{album.title}</p>
            </div>
        </li>
    );
};

Album.propTypes = {
    album: PropTypes.object.isRequired
};

export default Album;