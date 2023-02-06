import { useState } from 'react';
import Habit from '../components/Habit';

const HabitPage = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
  });

  const handleSubmit = () => {
    console.log('submitted');
  };

  return (
    <div className="HabitPage">
      <div className="HabitPage-container">
        <h1 className="HabitPage-header">Habits</h1>
        <div className="HabitPage-list">
          <section>
            What habits would you like to change?
            <form onSubmit={handleSubmit}>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                id="title"
                value={formData.title}
              />

              <label htmlFor="description">Description</label>
              <input
                type="text"
                name="description"
                value={formData.description}
              />

              <label htmlFor="goal">Goal Date</label>
              <input type="date" name="goal" id="goal" value={formData.goal} />

              <input type="submit" />
            </form>
          </section>
          {/* <section>
            <h3>Habitssss</h3>
            {habits?.map((habit) => (
              <Habit habit={habit} />
            ))}
            <Habit habit={habits} />
          </section> */}
        </div>
      </div>
    </div>
  );
};

export default HabitPage;
