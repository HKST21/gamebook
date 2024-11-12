import React, { useState, useEffect} from "react";
import CodeLiberty2050 from "./GamebookClass";
import App from "./App";
import initializeGame from "./GameContent";
import Page from "./Page";

export default function Main() {

    const [y, redrawComponent] = useState();

    const [isInitialized, setInitialized] = useState(false);

    useEffect(() => {
        initializeGame();
        setInitialized(true);
        return CodeLiberty2050.addListener(() => redrawComponent(Symbol()));
    }, []);


    return(
        <div>
            {isInitialized ? <Page/> : <p>Loading...</p>}
        </div>
        
    )
}
