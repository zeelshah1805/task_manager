import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

interface Task {
  id: string;
  content: string;
  assignedTo: string;
  dueDate: string;
}

interface Column {
  id: string;
  title: string;
  tasks: Task[];
}

const initialData: Column[] = [
  // Initial data goes here
];

function App() {
  const [columns, setColumns] = useState(initialData);

  const onDragEnd = (result: any) => {
    // Drag and drop logic goes here
  };

  return (
    <div>
      <h1>Task Management Tool</h1>
      <DragDropContext onDragEnd={onDragEnd}>
        {columns.map((column) => (
          <div className="column" key={column.id}>
            <h2>{column.title}</h2>
            <Droppable droppableId={column.id}>
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  {column.tasks.map((task, index) => (
                    <Draggable key={task.id} draggableId={task.id} index={index}>
                      {(provided) => (
                        <div
                          className="task"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <div>{task.content}</div>
                          <div>Assigned to: {task.assignedTo}</div>
                          <div>Due date: {task.dueDate}</div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        ))}
      </DragDropContext>
    </div>
  );
}

export default App;
