import { useState } from 'react';
import './styles.scss';

export function CardSort() {

  const [ list, setList ] = useState<number[]>(() => {
    const savedlist = localStorage.getItem('cards-order');

    return savedlist !== null ? JSON.parse(savedlist) : [];
  });

  let id = 0; // id usado para identificar cada um dos cards
  let heldItem: HTMLElement;

  function dragStart(e: any) {
    heldItem = e.target;
  }

  function dragDrop(e: any) {
    [heldItem.innerHTML, e.target.innerHTML] = [e.target.innerHTML, heldItem.innerHTML];
    e.target.classList.remove('drag-over');
  }

  function dragOver(e: any) {
    e.preventDefault();
  }

  function addOverClass(e: any) {
    e.target.classList.add('drag-over');
  }

  function removeOverClass(e: any) {
    e.preventDefault();
    e.target.classList.remove('drag-over');
  }

  function addNewCard() {
    const list_aux = [...list, list.length];

    localStorage.setItem('cards-order', JSON.stringify(list_aux));
    setList(list_aux);
  }

  return (
    <div className="card-sort">
      <div className="card-container">
        {
          list.map((e, i) =>
            (
              <div 
                key={i}
                draggable
                onDragEnter={addOverClass}
                onDragLeave={removeOverClass}
                onDragStart={dragStart}
                onDragOver={dragOver}
                onDrop={dragDrop}
                className="card-sorted"
              >
                {i + 1}
              </div>
            )
          )
        }
        <div className="card-sorted" onClick={addNewCard}>
            <span className="material-icons">add</span>
        </div>
      </div>
    </div>
  )

}