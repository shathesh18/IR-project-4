import React from 'react';

const Iframe = ( ) => {
    const source='https://video.twimg.com/amplify_video/1038156949966270466/vid/320x180/YVDYsJTOj2CZT9r2.mp4?tag=8'
    if (!source) {
        return <div>Loading...</div>;
    }

    const src = source;     
    return (
        // basic bootstrap classes. you can change with yours.
        <div className="col-md-12">
            <div className="emdeb-responsive">
                <iframe autoplay={false} src={src}></iframe>
            </div>
        </div>
    );
};

export default Iframe;