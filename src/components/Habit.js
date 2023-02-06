const Habit = ({ habit }) => {
  return (
    <>
      <h4>{habit.title}</h4>

      <div className="habit-container">{habit.description}</div>
    </>
  );
};

export default Habit;
