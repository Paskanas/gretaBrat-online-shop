import Footer from "@/Components/Footer";
import Gallery from "@/Components/Gallery/Gallery";
import Header from "@/Components/Header";

export default function Home() {
    return (
        <div>
            <Header />
            <Gallery />
            <div className="quote">
                <p className="text1">
                    I found I could say things with color and shapes that I
                    couldn’t say any other way—things I had no words for.
                </p>
                <p className="text2">- Georgia O Keeffe</p>
            </div>
            <Footer />
        </div>
    );
}
