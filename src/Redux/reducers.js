const initialState = {
  project: [
    { name: 'test', type: "auto", description: "test" },
  ],
};

const rootReducer = (
  state = initialState,
  actions,
) => {
  const { project } = state;
  const { payload, type } = actions;
  switch (type) {
    case 'ADD_PROJECT':
      return { ...state, project: [...project, payload] };
    case 'DELETE_PROJECT': {
      const newproject = project.filter(obj => obj.id !== payload.id);
      return { ...state, project: newproject };
    }
    case 'UPDATE_PROJECT': {
      const newproject = project.map(todo => (
        todo.id === payload.id
          ? payload
          : todo
      ));
      return { ...state, project: newproject };
    }
    default:
      return state;
  }
};

export default rootReducer;
