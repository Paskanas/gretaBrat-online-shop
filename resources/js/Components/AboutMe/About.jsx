const About = (props) => {
    return (
        <div className="h-auto flex flex-col sm:flex-row mt-10 sm:mt-20 mb-32">
            <div className="w-full md:w-1/2 sm:2/3 flex items-center justify-items-center mb-12 sm:mb-0">
                <div className="flex flex-col items-center gap-10">
                    <h1 className="uppercase w-4/5 sm:w-3/5  h1-color">
                        LIVING IN COLOR
                    </h1>
                    <p className="w-4/5 sm:w-3/5 text-justify">
                        I’m an digital artist from a magical place surrounded by
                        lakes and mysterious forests in Lithuania. My work is
                        inspired by the beauty of life and nature, it is an
                        invitation to pause, to take a deep breath and be with a
                        present moment. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Reiciendis, vero ab accusamus saepe
                        rerum esse ipsum provident ipsam laudantium maiores
                        <br />
                        <br />
                        alias et harum quae labore quisquam molestiae non nobis
                        praesentium neque dolorem officia quibusdam in. Dicta
                        autem maiores et eaque illum iusto aspernatur voluptatem
                        impedit doloribus, nisi dolor laudantium? Ex architecto
                        itaque aliquam quidem, veritatis dignissimos soluta
                        tempora numquam laborum esse officiis reprehenderit
                        <br />
                        <br />
                        adipisci, voluptatum explicabo rerum nam accusantium qui
                        fugiat voluptatibus sit nisi consequuntur sint
                        laudantium. Incidunt nihil fuga earum veritatis magni
                        iste sed ratione obcaecati atque consequuntur dolore
                        quae dignissimos voluptate iure sapiente pariatur quasi,
                        ullam autem repellendus rerum eos maiores eligendi.
                        Cupiditate, enim aliquam nostrum quasi hic ipsa possimus
                        facilis repellendus. Maxime iusto nostrum recusandae
                        dolore dignissimos iste ea provident, libero voluptatum
                        unde quo, praesentium distinctio. Consequatur iure
                        quidem cupiditate nemo aperiam veniam libero delectus
                        saepe inventore blanditiis cumque, ullam qui nam atque
                        molestiae earum magni? Accusantium!
                    </p>
                </div>
            </div>
            <div className="w-full p-4 sm:w-3/5 md:w-1/2 sm:m-4 flex justify-center items-center">
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
