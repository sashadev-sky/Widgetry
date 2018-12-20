import React from 'react';

const TabParts = (props) => {

  const clickHandler = (e) => {
    e.preventDefault();
    e.currentTarget.parentNode.childNodes.forEach((node, idx) => node.classList.remove("active"));
    e.currentTarget.classList.add("active");
    props.clickHandler(e.currentTarget.innerText);
  }

  return (
    <div className="tab-parts">
      <ul className="tab-headers">
        {
          props.panes.map((pane, idx) => <li key={idx} onClick={clickHandler}>{pane.title}</li>)
        }
      </ul>
      <article className="tab-contents">
      {
        props.panes.map((pane, idx) => {
          if (idx === props.value) {
            return pane.content
          }
        })
      }
      </article>
    </div>
  );
}

export default TabParts;

