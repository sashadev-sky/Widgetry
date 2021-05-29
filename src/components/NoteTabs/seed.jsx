import uuid from 'uuid';


export const initialPanes = [
  {
    id: uuid.v4(),
    title: 'React',
    content:
      'JS library for building UIs. Declarative, Virtual DOM, Diffing Algorithm, one-way binding, JSX. Manages efficient re-rendering, a task left to the developer to handle in jQuery.',
  },
  {
    id: uuid.v4(),
    title: 'JSX',
    content:
      'XML-like syntax extension to ECMAScript, intended to be transpiled into std. JS. Defines a concise & familiar syntax for defining tree structures with attributes. Visual aid, helps prevent XSS attacks.',
  },
  {
    id: uuid.v4(),
    title: 'jQuery',
    content:
      'JS library that builds on top of the DOMs functionality (wrapper). Interface for DOM manipulation is standardized and simpler than the traditional browser DOM API .',
  }
];
