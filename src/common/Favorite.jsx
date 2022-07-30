import React, { Component } from 'react';

class Favorite extends Component {
    render() {
        const {onFavorite, isFavorite} = this.props;
        
        let classes = "fa-star ms-4 mt-3 fa-";
        classes+= isFavorite ? "solid" : "regular";
        return (
                <i style={{cursor:"pointer"}} className={classes} onClick={onFavorite}> </i>
        );
    }
}

export default Favorite;