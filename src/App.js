//voy a instalar y importar 3 modulos, el boostrap, react-boostrap y los @dnd-kit
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import {
  DndContext,
  closestCenter
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy
} from "@dnd-kit/sortable";
import { useState } from 'react';
import { SortableItem } from './SortableItem';


function App() {
  
  const [languages, setLanguages] = useState(["Javascript", "Python", "Php"]);
  
  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <Container className='p-3' style={{"width":"50%"}} align="center">
      <h3>The best progamming languages</h3>
      </Container>

      <SortableContext
        items={languages}
        strategy={verticalListSortingStrategy}
      >

        {/*Here, we're gonna put the Components that use the useSortable hook*/}
        {languages.map(language => <SortableItem key={language} id={language} />)}

      </SortableContext>
      
    </DndContext>

  );

  function handleDragEnd(event){
    // console.log("Drag end callet");
    const {active ,over } = event;
    // console.log("active" + active.id);
    // console.log("over" + over.id);

    if(active.id !== over.id){
      setLanguages((items) => {
        const activeIndex = items.indexOf(active.id);
        const overIndex = items.indexOf(over.id);

        return arrayMove(items, activeIndex, overIndex)
      });
    }

  }
}

export default App;
