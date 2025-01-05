import { useState } from "react";
import Button from "./components/Button";
import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
  const [data, setData] = useState(["Goku", "Tanjiro", "josue"]);
  // const [isLoading, setIsLoading] = useState(false);
  // const handleClick = () => setIsLoading(!isLoading);
  // const list: string[] = ["Goku", "Tanjiro", "josue"];
  // const handSelect = (elemento: string) => {
  //   console.log("Imprimiendo ", elemento);
  // };

  // return (
  //   <Card>
  //     <CardBody title="Hola Mundo" text="Este es el Texto" />
  //     {list.length ? (
  //       <List data={list} onselect={handSelect} />
  //     ) : (
  //       "No hay contenido"
  //     )}
  //     <Button isLoading={isLoading} onClick={handleClick}>
  //       Hola mundo
  //     </Button>
  //   </Card>
  // );

  const addMinio = () => {
    setData([...data, "Minio"]);
  };
  const delMinio = () => {
    setData(data.slice(0, -1));
  };
  return (
    <Card>
      <Button isLoading={true} onClick={addMinio}>
        Agregar
      </Button>
      <Button isLoading={false} onClick={delMinio}>
        Eliminar
      </Button>
      <List data={data} />
    </Card>
  );
}

export default App;
