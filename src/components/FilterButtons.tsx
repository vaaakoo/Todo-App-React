const FilterButtons: React.FC<{ onFilter: (filter: string) => void }> = ({ onFilter }) => {
    return (
      <>
        <button onClick={() => onFilter('all')}>All</button>
        <button onClick={() => onFilter('completed')}>Completed</button>
        <button onClick={() => onFilter('active')}>Active</button>
      </>
    );
  };
  
  export default FilterButtons;