import React, { useState } from "react";
import styles from "./index.module.scss";
import { FaSearch } from 'react-icons/fa';
import loaderGif from "../../img/loader.gif";
import { connect } from "react-redux";
import { getQueries } from "../../store/selectors";
import { addQuery, deleteQuery } from "../../store/actionCreators";

const Gallery = ({ queries, addQuery, deleteQuery }) => {
    
    const [value, setValue] = useState("");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    
    const fetchImages = () => {
        fetch(`https://api.unsplash.com/search/photos/?client_id=Ytv2tQ9muH96PcLfrpaCN3dMus95Z5vdFWmgKjdisqE&query=${value}`)
            .then(response => response.json())
            .then(data => {
                setLoading(false);
                if(data.results.length !== 0) {
                    
                    setResults(data.results);
                } else {
                    window.confirm(`ohh.. sorry, we didn't found ${value}`)
                } 
            })
            setLoading(true)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addQuery({title: value})
    }

    const handleDelete = (id) => {
        deleteQuery(id);
    }
    
    return (
       <div>
            <div className={`container ${styles.searchBarBoxShadow}`}>
                <form className={styles.container} onSubmit={handleSubmit}>
                    <span>FIND AMAZING IMAGE</span>
                        <div className={styles.searchGroup}>
                            <FaSearch/>
                            <input type="text" id={value} value={value} onChange={(e) => setValue(e.target.value)} placeholder="Search free images"/>
                        </div>
                        <button className="btn" type="submit" onClick={() => fetchImages()} >Search</button>
                </form>
            </div>
            <div className="container">
                <div className={styles.imagesHeaderContainer}>
                    <h1>Gallery</h1>
                    <div className={styles.dropdown}>
                        <button className="btn">Saved Queries</button>
                        {
                            queries.queries.length > 0 ?
                            <div className={styles.dropdownContent}>
                                {
                                    queries.queries.map(({id, title}) => 
                                        <div key={id}>
                                            <span className={styles.listAlign} key={id}>
                                                {title}
                                                <button className="btn btn--sm" onClick={() => handleDelete(id)}>Delete</button>
                                            </span>
                                        </div>
                                    )
                                }
                            </div>
                            :
                            <div className={styles.dropdownContent}>
                                <span>empty</span>
                            </div>
                        }
                    </div>
                </div>
                    {
                        loading?

                        <div className={styles.loaderContainer}>
                            <img src={loaderGif} alt="" className={styles.loader}/>
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
};

const mapStateToProps = state => ({
    queries: getQueries(state)
});

const mapDispatchToPropos = dispatch => ({
    addQuery: (title) => dispatch(addQuery(title)),
    deleteQuery: (id) => dispatch(deleteQuery(id))
})

export default connect(mapStateToProps, mapDispatchToPropos)(Gallery);