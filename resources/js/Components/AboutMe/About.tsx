const About = ({ photoPath, photoAlt }: { photoPath: string, photoAlt: string }) => {
    return (
        <div className="h-auto flex flex-col sm:flex-row mt-10 sm:mt-20 mb-32">
            <div className="w-full md:w-1/2 sm:2/3 flex items-center justify-items-center mb-12 sm:mb-0">
                <div className="flex flex-col items-center gap-10">
                    <h1 className="uppercase w-4/5 sm:w-3/5  h1-color">
                        LIVING IN COLOR
                    </h1>
                    <p className="w-4/5 sm:w-3/5 text-justify">
                        I'm 3D/digital artist based in the magical region of
                        Lithuania, surrounded by picturesque lakes and
                        mysterious forests. My work is a testament to my love
                        for nature and my passion for art, and it has earned
                        recognition and awards in the industry.
                        <br />
                        <br />
                        My work is known for its dreamy and captivating
                        qualities, offering a form of visual escapism to those
                        who view it. My use of pastel colors and ethereal
                        imagery creates a sense of wonder and serenity, inviting
                        the audience on a journey to a world filled with beauty,
                        hope, and the manifestation of their dreams. Each piece
                        is an invitation to pause and appreciate the present
                        moment, to take a deep breath and immerse oneself in a
                        world of art.
                        <br />
                        <br />
                        I'm also NFT artist who has been making waves in the
                        industry since 2020. As a proud member of the NFT
                        community, I am honored to have my art collected by some
                        of the most well-known and discerning collectors in the
                        NFT space. I look forward to continuing to push the
                        boundaries of the NFT space and delivering works of art
                        that inspire, captivate, and evoke emotions in those who
                        experience them.
                        <br />
                        <br />I believe collaboration is key when it comes to
                        creating art that truly stands out, and I believe that
                        by working together, we can create something truly
                        special. Whether you're looking for a specific style or
                        have a specific vision in mind, I'm up for the challenge
                        and eager to bring your ideas to life.
                    </p>
                </div>
            </div>
            <div className="w-full p-4 sm:w-3/5 md:w-1/2 sm:m-4 flex justify-center items-center">
                <img
                    src={photoPath}
                    alt={photoAlt}
                    className="rounded"
                />
            </div>
        </div>
    );
};

export default About;
