const About = (props) => {
    return (
        <div className="h-auto flex flex-col sm:flex-row mt-10 sm:mt-20 mb-32">
            <div className="w-full sm:w-1/2 flex items-center justify-items-center mb-12 sm:mb-0">
                <div className="flex flex-col items-center gap-10">
                    <h1 className="uppercase w-4/5 sm:w-1/2 h1-color">
                        LIVING IN COLOR
                    </h1>
                    <p className="w-4/5 sm:w-1/2">
                        I’m an digital artist from a magical place surrounded by
                        lakes and mysterious forests in Lithuania. My work is
                        inspired by the beauty of life and nature, it is an
                        invitation to pause, to take a deep breath and be with a
                        present moment.
                    </p>
                </div>
            </div>
            <div className="w-full p-4 sm:w-1/2 sm:m-5 flex justify-center items-center">
                <img
                    src={props.photoPath}
                    alt={props.photoAlt}
                    className="rounded"
                />
            </div>
        </div>
    );
};

export default About;
