import React, { Component } from 'react';
import { Logo, Menu, Input, Avatar } from './index';

export class NavBar extends Component {
    state = {
        page: 'home'
    }

    changeMenuMarkerHandler = (page) => this.setState({ page });

    render() {
        return (
            <div className="navbar-container">
                <Logo changeMenuMarker={(page) => this.changeMenuMarkerHandler(page)} />
                <Menu
                    page={this.state.page}
                    changeMenuMarker={(page) => this.changeMenuMarkerHandler(page)}
                />
                <Input
                    placeholder="Movies, people..."
                    onEnterPressed={query => this.props.onSearchMovies(query)}
                    onCollapseInputHandler={() => this.props.onCollapseInputHandler()}
                    onExpandInputHandler={() => this.props.onExpandInputHandler()}
                />
                <Avatar />
            </div>
        );
    }
}