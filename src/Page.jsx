import React from "react";
import CodeLiberty2050 from "./GamebookClass";

export default function Page() {
    const PageNow = CodeLiberty2050.getCurrentPage();
    const PageText = PageNow?.text;
    const PageChoices = PageNow?.choices;
    const health = CodeLiberty2050.getHealth();

    return(  
        <div id="game-container"> 
            <h1>CodeLiberty 2050</h1>   
            {PageNow?.image && (
                <div id="image-container">
                    <img 
                        src={PageNow.image}
                        alt="Scene"
                        className="scene-image"
                    />
                </div>
            )}
            
            <div id="text-container">
                <p>{PageText}</p>
            </div>          
            
            <div id="options-container">
                <p>What's your decision?</p>
                <p className="health-text">HP: {health}%</p>
                {PageChoices?.map((choice, key) => (
                    <button 
                        key={key}
                        onClick={() => CodeLiberty2050.moveToNextPage(choice.nextPageId)}>
                        {choice.text}
                    </button>
                ))}
            </div>
        </div>
    )
}