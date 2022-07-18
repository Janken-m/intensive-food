import React, { Component } from 'react';

class Favorite extends Component {
    state = {
        active : false,
    }
    styles = {
        cursor: "pointer"
    }

    handleActive = ()=>{
        let active = this.state.active;
        active = !active;
        this.setState({active});
    }

    getBadgeClasses (){
        let classes = "fa-star ms-4 mt-3 ";
        classes+=this.state.active ? "fa-solid" : "fa-regular";
        return classes;
    }
    render() {
        return (
            <div>
                <i style={this.styles} className={this.getBadgeClasses()} onClick={this.handleActive}> </i>
            </div>
        );
    }
}

export default Favorite;