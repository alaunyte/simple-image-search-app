import React, { useState } from "react";
import styles from "./index.module.scss";
import { FaSearch } from 'react-icons/fa';
import loaderGif from "../../img/loader.gif";

const Gallery = () => {
    const [value, setValue] = useState("");
    const [results, setResults] = useState([]);
    const [loaded, setIsLoaded] = useState(false);
    
    const fetchImages = () => {
        fetch(`https://api.unsplash.com/search/photos/?client_id=Ytv2tQ9muH96PcLfrpaCN3dMus95Z5vdFWmgKjdisqE&query=${value}`)
            .then(response => response.json())
            .then(data => {
                if(data.results.length !== 0) {
                    setResults(data.results);
                } else {
                    window.confirm(`ohh.. sorry, we didn't found ${value}`)
                } 
                setIsLoaded(true)
            })
    }


    return (
       <div>
            <div className={`container ${styles.searchBarBoxShadow}`}>
                <div className={styles.container}>
                    <span>FIND AMAZING IMAGE</span>
                    <div className={styles.searchGroup}>
                        <FaSearch/>
                        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Search free images"/>
                    </div>
                    <button className="btn" onClick={() => fetchImages()} >Search</button>
                </div>
            </div>
            <div className="container">
                <h1>Gallery</h1>
                {
                    !loaded ?
                    <div className={styles.loaderContainer}>
                        <img src={loaderGif} alt=""/>
                    </div>
                    :
                    <div className={styles.imagesPosition}>
                        {
                            results.map((item) => {
                                return <img key={item.id} src={item.urls.regular} alt="" className={styles.images} />
                            })
                        }
                    </div>
                }
            </div>
       </div>
    )
}

export default Gallery;