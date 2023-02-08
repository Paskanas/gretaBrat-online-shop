const Achievements = (props) => {
    return (
        <>
            <div className="flex w-full justify-center mb-5">
                <div className="flex  items-center w-9/12 lg:w-10/12">
                    <h1 className="h1-color">EXHIBITIONS, SHOWS & AWARDS</h1>
                </div>
            </div>
            <div className="flex w-full justify-center">
                <div className="flex flex-col lg:flex-row gap-5 w-9/12 lg:w-10/12">
                    <div className="lg:w-2/3 flex flex-col mb-3 lg:mb-0">
                        {props.achievements.map((achievement, i) => {
                            return (
                                <p className="achievement-text mb-3" key={i}>
                                    {achievement.achievement}
                                </p>
                            );
                        })}
                    </div>
                    <div className="justify-center lg:w-1/3 flex items-center">
                        <img
                            src={props.photoPath}
                            alt="photoAlt"
                            className="max-w-sm lg:max-w-full"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Achievements;
