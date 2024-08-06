import dragula from 'dragula';

dragula([document.getElementById('backlog'), 
         document.getElementById('in-progress'), 
         document.getElementById('complete')])
  .on('drop', function (el, target) {
    // Change color based on swimlane
    if (target.id === 'backlog') {
      el.style.backgroundColor = 'grey';
    } else if (target.id === 'in-progress') {
      el.style.backgroundColor = 'blue';
    } else if (target.id === 'complete') {
      el.style.backgroundColor = 'green';
    }
  });

