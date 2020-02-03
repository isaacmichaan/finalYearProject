import React from 'react';

import './MPSecond.css';


const MPSecond = props => {
    return (
        <div className="background">
            <div className="mpsecond">
                <h1 className="display-4">
                    How It Works
                </h1>
                <p>
                    But careful, reader Pierre Orsander said they tried this and had some problems with links on the page going dead.

                    Update: Matt Litherland writes in to say that anyone trying to use the above
                    IE filters and having problems with scrollbars or dead links or whatever else (like Pierre above)
                    should try NOT using them on the html or body element. But instead a fixed position div with 100% width and height.
                </p>
            </div>
        </div>
    );
};

export default MPSecond;