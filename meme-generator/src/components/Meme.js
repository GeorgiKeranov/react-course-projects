import React from 'react';
import memesData from '../memesData';

function Meme() {
    const [meme, setMeme] = React.useState({
        image: '',
        topText: '',
        bottomText: ''
    });

    function generateRandomMeme() {
        const memes = memesData.data.memes;
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