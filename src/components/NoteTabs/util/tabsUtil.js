import uuid from 'uuid';


export const formatPane = pane => {
  return {
    id: uuid.v4(),
    title: pane.title,
    content: pane.content
  };
};
