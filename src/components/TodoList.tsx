import { Todo } from "../App";
// import { Droppable, Draggable } from 'react-beautiful-dnd';
import React from "react";
import ClearButtons from "./ClearButtons";
import FilterButtons from "./FilterButtons";

const TodoList: React.FC<{
  todos: Todo[];
  onComplete: (i: number) => void;
  onRemove: (i: number) => void;
  onFilter: (filter: string) => void;
  onClear: (clearType: string) => void;
  iconCheck: any;
  iconCross: any;
}> = ({
  todos,
  onComplete,
  onRemove,
  onFilter,
  onClear,
  iconCheck,
  iconCross,
}) => {
  return (
    <div className="todoList flex flex-col gap-4 mt-4 tablet:mt-6 mx-auto w-[327px] tablet:w-[540px]">
      <div className="flex flex-col bg-white dark:bg-darkCover rounded-md shadow-[0_35px_50px_-15px_rgba(194,195,214,0.5)] dark:shadow-[0_35px_50px_-15px_rgba(0,0,0,0.5)]">
        <ul >
          {todos.map((todo, i) => (
            <li
              key={i}
              className={`group/item border-b border-borderGrayLight dark:border-borderGrayDark px-5 py-4 flex justify-between  ${
                todo.completed ? "completed" : ""
              }`}
            >
              <div className="flex gap-4">
                {todo.completed ? (
                  <div
                    onClick={() => onComplete(i)}
                    className="bg-gradient-to-r from-[#55DDFF] to-[#C058F3] form-checkbox w-5 h-5 tablet:w-6 tablet:h-6 rounded-full flex p-1"
                  >
                    <img src={iconCheck} alt="iconCheck" />
                  </div>
                ) : (
                  <div
                    onClick={() => onComplete(i)}
                    className="border dark:border-borderGrayDark hover:bg-gradient-to-r from-[#55DDFF] to-[#C058F3] focus:outline-none form-checkbox p-[1px] w-5 h-5 tablet:w-6 tablet:h-6 rounded-full flex cursor-pointer "
                  >
                    <div className="bg-white dark:bg-darkCover w-full rounded-full focus:outline-none"></div>
                  </div>
                )}
                <label
                  onClick={() => onComplete(i)}
                  className={`self-center text-[12px] text-lightGrayText dark:text-darkGrayText leading-[12px] tablet:text-[18px] tablet:leading-[18px] focus:outline-none cursor-pointer ${
                    todo.completed && "line-through dark:text-[#4D5067] text-[#D1D2DA]"
                  }`}
                >
                  {todo.task}
                </label>
              </div>
              <button onClick={() => onRemove(i)}>
                <img
                  src={iconCross}
                  alt="iconCross"
                  className="w-4 tablet:w-[18px] invisible group/edit group-hover/item:visible"
                />
              </button>
            </li>
            
          ))}
          <div className=" text-[12px] tablet:text-[14px] font-normal leading-3 tablet:leading-[14px]  text-[#9495A5] dark:text-[#5B5E7E] px-5 py-4 flex justify-between ">
            <span>{todos.length} items left</span>
          <div className="bg-white dark:bg-darkCover rounded-md  shadow-[0_35px_50px_-15px_rgba(194,195,214,0.5)] dark:shadow-[0_35px_50px_-15px_rgba(0,0,0,0.5)] hidden tablet:block">
          <div className="text-[14px] font-bold leading-[18px] flex flex-row gap-2 justify-between text-[#9495A5] dark:text-[#5B5E7E]">
      <FilterButtons onFilter={onFilter} />
      </div>
          </div>
          <ClearButtons onClear={onClear} />
          </div>
        </ul>
        
      </div>
     
      <div className="bg-white dark:bg-darkCover rounded-md  shadow-[0_35px_50px_-15px_rgba(194,195,214,0.5)] dark:shadow-[0_35px_50px_-15px_rgba(0,0,0,0.5)] tablet:hidden ">
      <div className="flex justify-around mx-auto text-[14px] w-full font-bold leading-[14px]  text-[#9495A5] dark:text-[#5B5E7E] px-5 py-4">
      <FilterButtons onFilter={onFilter} />
      </div>
      </div>
    </div>
    
  );
};

export default TodoList;
