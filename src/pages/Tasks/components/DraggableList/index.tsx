import React from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import { ListWrapper, ListItemsWrapper } from './styles';

type Props = {
  list: unknown[];
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  renderItem: (item: any, isDragging?: boolean) => React.ReactNode;
  onSortEnd: (result: DropResult) => void;
  direction: 'horizontal' | 'vertical';
  droppableId?: string;
};

function DraggableList({ list, direction, renderItem, onSortEnd, droppableId }: Props) {
  const onDragEnd = (result: DropResult) => {
    onSortEnd(result);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId={droppableId || 'droppable'} direction={direction}>
        {(provided: any) => (
          <ListWrapper ref={provided.innerRef} $direction={direction} {...provided.droppableProps}>
            <ListItemsWrapper>
              {list.map((item, index) => (
                <Draggable
                  key={index}
                  draggableId={index.toString()}
                  index={index}
                  disableInteractiveElementBlocking
                >
                  {(provided: any, snapshot: any) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {renderItem(item, snapshot.isDragging)}
                    </div>
                  )}
                </Draggable>
              ))}
            </ListItemsWrapper>
            {provided.placeholder}
          </ListWrapper>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default DraggableList;
