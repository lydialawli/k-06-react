import React from 'react'



class Place extends React.Component {
    state = {
        images: [
            'https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg',
            'https://q-ak.bstatic.com/images/hotel/max1280x900/186/186223171.jpg',
            'https://r-ak.bstatic.com/images/hotel/max1280x900/186/186223174.jpg',
            'https://r-ak.bstatic.com/images/hotel/max1280x900/186/186223178.jpg'
        ],
        bigImage: 'https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg'
    }

    changeBigImage = (i) => {
        this.setState({
            bigImage: this.state.images[i]
        })
    }


    render() {
        return (
            <div style={{ height: `100vh`, width: `100vw`, backgroundSize: `cover`, backgroundImage: `url(${this.state.bigImage})` }}>
                <div>
                    {
                        this.state.images.map((e, i) => {
                                return (
                                    <div style={{ height: `200px`, width: `300px`, backgroundSize: `contain`, backgroundImage: `url(${this.state.images[i]})` }} onClick={() => this.changeBigImage(i)}></div>
                                )

                        })


                    }
                </div>

            </div>

        )
    }

}


export default Place


