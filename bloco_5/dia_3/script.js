function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
};
  
  createDaysOfTheWeek();
  
let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function addDays () {
    let listDay = document.querySelector('#days');
    
    for (let i = 0; i < dezDaysList.length; i +=1) {
    let day = dezDaysList[i];
    let dayItemLi = document.createElement('li');
    
      if (day === 24 | day === 31) {
        dayItemLi.className = 'day holiday'
        dayItemLi.innerHTML = day;
        listDay.appendChild(dayItemLi)
      } else if (day === 4 | day === 11 | day === 18) {
        dayItemLi.className = 'day friday'
        dayItemLi.innerHTML = day;
        listDay.appendChild(dayItemLi);
      } else if (day === 25) {
        dayItemLi.className = 'day friday holiday';
        dayItemLi.innerHTML = day;
        listDay.appendChild(dayItemLi);
      } else {
        dayItemLi.innerHTML = day;
        listDay.appendChild(dayItemLi);
      }

    };
};
addDays();

