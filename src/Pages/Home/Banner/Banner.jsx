import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
    return (
        <Carousel className="px-5 md:px-0">
            <div>
                <img src="https://www.chipukafootball.com/images/Youth-soccer-indiana.jpg" />
            </div>
            <div>
                <img src="https://thumbs.dreamstime.com/b/kids-play-football-outdoor-field-children-score-goal-soccer-game-girl-boy-kicking-ball-running-child-team-jersey-120383202.jpg" />
            </div>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHIM9tq6LE-Gl1cHrYfzGzkK6UePhYa6Fz4XkRRvvGO5MACC7-EHXhY1trTksUQ6Bsy6M&usqp=CAU" />
            </div>
            <div>
                <img src="https://media.istockphoto.com/id/827507456/photo/coach-instructing-junior-football-team-in-practice.jpg?s=612x612&w=is&k=20&c=cxG_NBwtkaP92X8SEAw2n7d7qip1do3yYQ0cGkNlxz4=" />
            </div>
            <div>
                <img src="https://media.istockphoto.com/id/849258948/photo/junior-football-team-at-practice.jpg?s=612x612&w=is&k=20&c=6uZ9reVrQdZYyEbVGatMt3Ygu3wMwo9Pl5_-FBB2WPE=" />
            </div>
            <div>
                <img src="https://media.istockphoto.com/id/1183994081/photo/young-footballers-practicing-running-drills-during-practice.jpg?s=1024x1024&w=is&k=20&c=VYaFRYNRb3ei2UBlEdATc6BomWvh2YaHOW_6bMjz-tE=" />
            </div>
        </Carousel>
    );
};

export default Banner;