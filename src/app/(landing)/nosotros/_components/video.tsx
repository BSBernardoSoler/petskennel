import React from 'react';

const Video = () => {
    return (
        <section className="w-full px-80">
            <div className="container mx-auto">
                <div className="w-full">
                    <div className="w-full">
                        <div className="w-full">
                            <div className="w-full">
                                <div className="aspect-video w-full">
                                    <iframe
                                        className="w-full h-full"
                                        allowFullScreen
                                        title="YouTube Video Player"
                                        src="https://www.youtube.com/embed/kYr_8wtTnX4?feature=oembed&start&end&wmode=opaque&loop=0&controls=1&mute=0&rel=0&modestbranding=0"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Video;