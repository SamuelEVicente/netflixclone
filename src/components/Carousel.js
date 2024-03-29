import React, { Component } from 'react'
import ItemsCarousel from 'react-items-carousel'

export class Carousel extends Component {
    state = {
        activeItemIndex: 1
    }

    changeActiveItem = (activeItemIndex) => this.setState({ activeItemIndex })

    render() {
        const { title, children } = this.props

        return (
            <div className="carousel-container">
                <div className="carousel-title">
                    {title}
                </div>
                <div className="carousel-content">
                    <ItemsCarousel
                        enablePlaceholder
                        numberOfPlaceholderItems={5}
                        minimumPlaceholderTime={1000}
                        placeholderItem={<div style={{ height: 250, background: '#202020' }}></div>}
                        numberOfCards={3}
                        gutter={12}
                        showSlither={true}
                        firstAndLastGutter={true}
                        freeScrolling={false}
                        requestToChangeActive={this.changeActiveItem}
                        activeItemIndex={this.state.activeItemIndex}
                        activePosition={'center'}
                        chevronWidth={24}
                        rightChevron={'>'}
                        leftChevron={'<'}
                        // rightChevron={<i className="fa fa-angle-right fa-5x" aria-hidden="true" style={{ color: '#fff' }}></i>}
                        // leftChevron={<i className="fa fa-angle-left fa-5x" aria-hidden="true" style={{ color: '#fff' }}></i>}
                        outsideChevron={false}
                    >
                        {children}
                    </ItemsCarousel>
                </div>
            </div>
        )
    }
}