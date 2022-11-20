import React, { useState } from "react";
import { TaskCardDeleteButton } from "./Button/TaskCardDeleteButton";
import { TaskAddInput } from "./Input/TaskAddInput";
import { Tasks } from "./Tasks";
import { TaskCardTitle } from "./TaskCardTitle";
import { Draggable } from "react-beautiful-dnd";

export const TaskCard = ({
  taskCardsList,
  setTaskCardsList,
  taskCard,
  index,
}) => {
  const [inputText, setInputText] = useState("");
  const [taskList, setTaskList] = useState([]);

  return (
    <Draggable draggableId={taskCard.id} index={index}>
      {(provided) => (
        <div
          className="TaskCard"
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <div
            className="taskCardTitleAndTaskCardDeleteArea"
            {...provided.dragHandleProps}
          >
            <TaskCardTitle />
            <TaskCardDeleteButton
              taskCardsList={taskCardsList}
              setTaskCardsList={setTaskCardsList}
              taskCard={taskCard}
            />
          </div>
          <TaskAddInput
            inputText={inputText}
            setInputText={setInputText}
            taskList={taskList}
            setTaskList={setTaskList}
          />
          <Tasks
            inputText={inputText}
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
      )}
    </Draggable>
  );
};
