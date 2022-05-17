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
        const mathRandom = Math.random();
        const randomMemeIndex = Math.floor(mathRandom * memes.length);

        const randomMeme = memes[randomMemeIndex];
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                image: randomMeme.url
            };
        });
    }

    return (
        <div className="meme">
            <div className="meme__input-fields">
                <input type="text" name="meme-top-text" placeholder="Meme top text" value={meme.topText}/>

                <input type="text" name="meme-bottom-text" placeholder="Meme bottom text" value={meme.bottomText}/>
            </div>

            <input type="submit" onClick={generateRandomMeme} value="Get a new meme image 🖼"/>

            <div className="meme__image">
                <img src={meme.image} alt="meme" />
            </div>
        </div>
    );
}

export default Meme;