export const addProject = Project =>
  ({ type: 'ADD_PROJECT', payload: Project });
export const updateProject = Project =>
  ({ type: 'UPDATE_PROJECT', payload: Project });
export const deleteProject = Project =>
  ({ type: 'DELETE_PROJECT', payload: Project });
