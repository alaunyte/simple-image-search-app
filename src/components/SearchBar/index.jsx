import React from "react";
import styles from "./index.module.scss";
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
    return (
        <div className={`container ${styles.searchBarBoxShadow}`}>
            <div className={styles.container}>
                <span>FIND AMAZING IMAGE</span>
                <div className={styles.searchGroup}>
                    <FaSearch/>
                    <input type="text" placeholder="Search free photos"/>
                </div>
                <button className="btn">Search</button>
            </div>
        </div>
    )
}

export default SearchBar;