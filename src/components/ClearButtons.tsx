const ClearButtons: React.FC<{ onClear: (clearType: string) => void }> = ({ onClear }) => {
    return (
      <button onClick={() => onClear('completed')}>Clear completed</button>
    );
  };
  
  export default ClearButtons;