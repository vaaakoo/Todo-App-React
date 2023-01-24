

const TodoForm: React.FC<{ onSubmit: (task: string) => void }> = ({ onSubmit }) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const task = e.currentTarget.task.value;
      if (task) {
        onSubmit(task);
      }
      e.currentTarget.reset();
    };
  
    return (
      <form onSubmit={handleSubmit} className="mt-8 mx-auto w-[327px] tablet:w-[540px]">
        {/* <span className=""></span> */}
        <div className="flex h-12 bg-white dark:bg-darkCover outline-none pl-5 rounded-[5px] gap-3 items-center">
          <div className="bg-white dark:bg-darkCover border border-borderGrayLight dark:border-borderGrayDark form-checkbox w-5 h-5 tablet:w-6 tablet:h-6 rounded-full">
          </div>
          <input type="text" name="task" placeholder="Create a new todo…" className=" dark:bg-darkCover text-blackText dark:text-darkGrayText text-[12px] placeholder:text-[#9495A5] font-normal leading-3 outline-none tablet:leading-[18px] tablet:text-[18px]"/>
        </div>
      </form>
    );
  };
  
  export default TodoForm;