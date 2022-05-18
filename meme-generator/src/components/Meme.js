import React from 'react';

function Meme() {
    const [memes, setMemes] = React.useState([]);
    const [meme, setMeme] = React.useState({
        image: 'https://i.imgflip.com/7bk2.jpg',
        topText: 'Top text',
        bottomText: 'Bottom text'
    });

    function generateRandomMeme() {
        const randomMemeIndex = Math.floor(Math.random() * memes.length);
        const randomMeme = memes[randomMemeIndex];

        setMeme(prevMeme => {
            return {
                ...prevMeme,
                image: randomMeme.url
            };
        });
    }

    function handleChange(event) {
        const element = event.target;

        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [element.name]: element.value
            };
        });
    }

    React.useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then(response => response.json())
            .then(response => {
                if (!response.data.memes) {
                    return;
                }
        
                setMemes(response.data.memes);
            });
    }, []);

    return (
        <div className="meme">
            <div className="meme__input-fields">
                <input type="text" name="topText" placeholder="Meme top text" onChange={handleChange} value={meme.topText}/>

                <input type="text" name="bottomText" placeholder="Meme bottom text" onChange={handleChange} value={meme.bottomText}/>
            </div>

            <input type="submit" onClick={generateRandomMeme} value="Get a new meme image 🖼"/>

            <div className="meme__image">
                {meme.topText && <h2 className="meme__top-text">{meme.topText}</h2>}

                {meme.image && <img src={meme.image} alt="meme" />}

                {meme.bottomText && <h2 className="meme__bottom-text">{meme.bottomText}</h2>}
            </div>
        </div>
    );
}

export default Meme;