const Achievements = (props) => {
    return (
        <>
            <div className="flex w-full justify-center mb-10">
                <div className="flex  items-center w-9/12 lg:w-10/12">
                    <h2 className="h2-color">EXHIBITIONS, SHOWS & AWARDS</h2>
                </div>
            </div>
            <div className="flex w-full justify-center">
                <div className="flex flex-col lg:flex-row gap-10 w-9/12 lg:w-10/12">
                    <div className="lg:w-2/3 flex flex-col mb-3 lg:mb-0">
                        <ul className="list-disc">
                            {props.achievements.map((achievement, i) => {
                                return (
                                    <li
                                        className="achievement-text mb-3"
                                        key={i}
                                    >
                                        {achievement.achievement}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="justify-center lg:w-1/3 flex items-center">
                        <img
                            src={props.photoPath}
                            alt="photoAlt"
                            className="max-w-xs sm:max-w-md lg:max-w-full rounded"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Achievements;
