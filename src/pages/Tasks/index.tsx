import React from 'react';
import DraggableList from './components/DraggableList';
export enum ListType {
    ENABLED = 'enabled',
    DISABLED = 'disabled'
}

function Tasks() {
  const handleEndSort = (result: any) => {

  };

  const renderCard = (item: any) => {
    return (<div>item</div>);
  };

  return (
      <>
        <div>Tasks</div>
        <DraggableList
            list={['dasdasd']}
            direction="vertical"
            renderItem={renderCard}
            onSortEnd={handleEndSort}
            droppableId={ListType.ENABLED}
        />
      </>
  );
}

export default Tasks;
