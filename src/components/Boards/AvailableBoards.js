import classes from "./AvailableBoards.module.css";
import Card from "../UI/Card";
import BoardItem from "./BoardItem/BoardItem";

const DUMMY_BOARDS = [
  {
    id: "b1",
    name: "할리갈리",
    description: "👥2인~6인 | ⏳15분",
    price: 2900,
  },
  {
    id: "b2",
    name: "루미큐브",
    description: "👥2인~4인 | ⏳40분",
    price: 3900,
  },
  {
    id: "b3",
    name: "스플렌더",
    description: "👥2인~4인 | ⏳30분",
    price: 2900,
  },
  {
    id: "b4",
    name: "라스베가스",
    description: "👥2인~5인 | ⏳30분",
    price: 4900,
  },
];

const AvailableBoards = () => {
  const boardsList = DUMMY_BOARDS.map((board) => (
    <BoardItem
      id={board.id}
      key={board.id}
      name={board.name}
      price={board.price}
      description={board.description}
    />
  ));

  return (
    <section className={classes.boards}>
      <Card>
        <ul>{boardsList}</ul>
      </Card>
    </section>
  );
};
export default AvailableBoards;
