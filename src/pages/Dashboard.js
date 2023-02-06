// import { useState } from 'react';
import Habit from '../components/Habit';

const Dashboard = () => {
  const habits = [
    {
      title: 'drinking',
      description: 'wine || beer || spirits',
      category: 'health',
    },
    {
      title: 'working out',
      description: 'running || walking || gym',
      category: 'health',
    },
    {
      title: 'studying',
      description: 'book in face for too long',
      category: 'mind',
    },
  ];

  const uniqueHabits = [...new Set(habits?.map(({ category }) => category))];
  console.log(uniqueHabits);
  // const [habits, setHabits] = useState(null);

  return (
    <div className="dashboard-container">
      {habits &&
        uniqueHabits?.map((uniqueHabit, _index) => (
          <div key={_index} className="dashboard-habit-card">
            <h3>{uniqueHabit}</h3>
            {habits
              .filter((habit) => habit.category === uniqueHabit)
              .map((filterHabit, _index) => (
                <Habit
                  key={_index}
                  id={_index}
                  color="red"
                  habit={filterHabit}
                />
              ))}
          </div>
        ))}
    </div>
  );
};

export default Dashboard;
