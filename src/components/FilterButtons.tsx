const FilterButtons: React.FC<{ onFilter: (filter: string) => void }> = ({ onFilter }) => {
    return (
      <>
        <button className="hover:text-[#3A7CFD] focus:text-[#494C6B] dark:focus:text-white" onClick={() => onFilter('all')}>All</button>
        <button className="hover:text-[#3A7CFD] focus:text-[#494C6B] dark:focus:text-white" onClick={() => onFilter('active')}>Active</button>
        <button className="hover:text-[#3A7CFD] focus:text-[#494C6B] dark:focus:text-white" onClick={() => onFilter('completed')}>Completed</button>
      </>
    );
  };
  
  export default FilterButtons;