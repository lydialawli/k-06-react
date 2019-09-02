import React from 'react'



class Place extends React.Component {
    state = {
        images: [
            'https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg',
            'https://q-ak.bstatic.com/images/hotel/max1280x900/186/186223171.jpg',
            'https://r-ak.bstatic.com/images/hotel/max1280x900/186/186223174.jpg',
            'https://r-ak.bstatic.com/images/hotel/max1280x900/186/186223178.jpg'
        ]
    }

    render() {
        return (
            <div style={{ height: `100vh`, width: `100vw`, backgroundSize: `cover`, backgroundImage: `url(${this.state.images[0]})` }}>
                <div>
                    {
                        this.state.images.map((e, i) => {
                            if (i !== 0)
                                return (
                                    <div style={{ height: `200px`, width: `300px`, backgroundSize: `contain`, backgroundImage: `url(${this.state.images[i]})` }} ></div>
                                )

                        })


                    }
                </div>

            </div>

        )
    }

}


export default Place


