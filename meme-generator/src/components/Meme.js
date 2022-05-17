import React from 'react';

function Meme() {
    return (
        <div className="meme">
            <form>
                <div className="meme__input-fields">
                    <input type="text" name="meme-top-text" placeholder="Meme top text"/>

                    <input type="text" name="meme-bottom-text" placeholder="Meme bottom text"/>
                </div>

                <input type="submit" value="Get a new meme image 🖼"/>
            </form>
        </div>
    );
}

export default Meme;