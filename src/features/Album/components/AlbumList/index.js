import React from 'react';
import PropTypes from 'prop-types';
import Album from "../Album";
import './styles.scss'

const AlbumList = props => {
    const {albums} = props
    return (
        <ul className="albumList">
            {albums.map((album) => (
                <Album key={album.id} album={album}/>
            ))}
        </ul>
    );
};

AlbumList.propTypes = {
    albums: PropTypes.array.isRequired
};

export default AlbumList;