import axios from "axios";
import {useState, useEffect} from "react"
import './RandoMeme.css';

export default function RandoMeme({ memeNumber }){

    const [memes, setMemes] = useState()
    const [memeIndex, setMemeIndex] = useState()
    const [upperT, setUpperT] = useState();
    //implement the fetching
    
    useEffect(() => {
        axios.get('https://api.imgflip.com/get_memes')
        .then(res => setMemes(res.data.data.memes))

        setMemeIndex(memeNumber);
    }, [])

    function handleNextMemeClick(){
        setMemeIndex(prev => prev + 1);
        console.log("handleNextMemeClick has been executed")
        console.log("memeIndex: " + memeIndex)
    };

    function handlePreviousMemeClick(){
        setMemeIndex(prev => prev - 1);
        console.log("handlePreviousMemeClick has been executed")
        console.log("memeIndex: " + memeIndex)
    };

    function handleSubmit(e){
        e.preventDefault()
        console.log("handleSubmit has been executed")
        console.log(e.target.parentElement[0].value)

    };

    function handleOnChange(e){
        console.log(e.target.value)
    };
    
    return (
            <>
            <form>
                <input onChange={handleOnChange} type="text" value="write upper text"/>
                <input type="text" value="write bottom text" />
                <button onClick={handleSubmit} >submit</button>
            </form>

            <div className="meme-container" 
                style={{
                    backgroundImage: `url( ${memes && memes[memeIndex].url} )`,
                }}
                >
                <p className="topText">topText</p>
                <button disabled={!memeIndex ? true : false} onClick={handlePreviousMemeClick}>previous meme</button>
                <button onClick={handleNextMemeClick}>next meme</button>
                <p className="bottomText">bottomText</p>
            </div> 
            </>
    );
};


/*-----------

function handlePreviousMemeClick(){
    setMemeIndex(prev => prev - 1);
    console.log("handlePreviousMemeClick has been executed")
    console.log("memeIndex: " + memeIndex)
};

return (

<div className="meme-container" 
                style={{
                    backgroundImage: `url( ${memes && memes[memeIndex].url} )`
                }}>
                <p className="topText">topText</p>
                <button onClick={handlePreviousMemeClick}>Previous meme</button>
                
                <p className="bottomText">bottomText</p>
            </div> 
   );
};


`url(${Background})`

<img src={memes && memes[memeIndex].url} alt="there should be a picture"/>

https://api.imgflip.com/get_memes

componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
  }

*/