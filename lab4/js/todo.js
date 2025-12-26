window.onload = function () {
    document.querySelector('#push').onclick = function () {
        if (document.querySelector('#newtask input').value.length == 0) {
            alert("Пожалуйста, введите название задачи!");
        }
        else {
            document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
                </button>
            </div>
            `;

            // Re-bind delete events to all buttons (simplest approach for this scope)
            var current_tasks = document.querySelectorAll(".delete");
            for (var i = 0; i < current_tasks.length; i++) {
                current_tasks[i].onclick = function () {
                    this.parentNode.remove();
                }
            }

            // Clear input
            document.querySelector('#newtask input').value = "";
        }
    }
}
