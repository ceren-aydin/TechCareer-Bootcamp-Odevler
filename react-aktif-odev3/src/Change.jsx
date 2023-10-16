import React, { useState } from 'react';

function BorderChange() {
    const [boxWidth, setBoxWidth] = useState(100);
    const [boxHeight, setBoxHeight] = useState(100);
    const [boxWidthInput, setBoxWidthInput] = useState("");
    const [boxHeightInput, setBoxHeightInput] = useState("");

    const changeSize = () => {
        setBoxWidth(parseInt(boxWidthInput, 10));
        setBoxHeight(parseInt(boxHeightInput, 10));
    }

    return (<>
        <div>
            <input
                type="text"
                placeholder="Width"
                value={boxWidthInput}
                onChange={(e) => setBoxWidthInput(e.target.value)}
            />
        </div>
        <div>
            <input
                type="text"
                placeholder="Height"
                value={boxHeightInput}
                onChange={(e) => setBoxHeightInput(e.target.value)}
            />
        </div>
        <button onClick={changeSize}>Change</button>
        <div style={{ width: boxWidth, height: boxHeight, backgroundColor: "black" }}></div>
    </>
    );
}

export default BorderChange;