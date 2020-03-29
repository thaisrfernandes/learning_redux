import React from "react";
import { connect } from "react-redux";
import toggleLesson from "../../store/actions/course";

const Sidebar = ({ modules, dispatch }) => (
  <aside>
    {modules.map(module => (
      <div key={module.id}>
        <strong>{module.title}</strong>
        <ul>
          {module.lessons.map(lesson => (
            <li key={lesson.id}>
              {lesson.title}
              <button onClick={dispatch(toggleLesson(module, lesson))}>
                Selecionar
              </button>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </aside>
);

const mapStateToProps = state => ({
  modules: state.course.modules
});

export default connect(mapStateToProps)(Sidebar);
