import React from 'react';
import memesData from '../memesData';

function Meme() {
    const [memeImage, setMemeImage] = React.useState('');

    async function generateRandomMeme() {
        const memes = memesData.data.memes;
        const mathRandom = Math.random();
        const randomMemeIndex = Math.floor(mathRandom * memes.length);

        const randomMeme = memes[randomMemeIndex];
        setMemeImage(randomMeme.url);
    }

    return (
        <div className="meme">
            <div className="meme__input-fields">
                <input type="text" name="meme-top-text" placeholder="Meme top text"/>

                <input type="text" name="meme-bottom-text" placeholder="Meme bottom text"/>
            </div>

            <input type="submit" onClick={generateRandomMeme} value="Get a new meme image 🖼"/>

            <div className="meme__image">
                <img src={memeImage} alt="meme" />
            </div>
        </div>
    );
}

export default Meme;