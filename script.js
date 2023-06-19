const addBtn = document.getElementById('add');

addBtn.addEventListener("click", () => {
    addNewNote();
});

function addNewNote() {
    const notes = document.createElement('div');
    notes.classList.add("notes");

    notes.innerHTML = `
        <div class="notes">
            <div class="tools">
                <button class="edit"><i class="fas fa-edit"></i></button>
                <button class="delete"><i class="fas fa-trash-alt"></i></button>
            </div>
            <div class="main hidden"></div>
            <textarea></textarea>
        </div>
    `;

    const editBtn = notes.querySelector(".edit");
    const deleteBtn = notes.querySelector(".delete");

    const main = notes.querySelector(".main");
    const textArea = notes.querySelector("textarea");

    editBtn.addEventListener("click", () => {
        main.classList.toggle("hidden");
        textArea.classList.toggle('hidden');
    });

    deleteBtn.addEventListener("click", () => {
        notes.remove("");
    })

    textArea.addEventListener("input", (e) => {
        // const { value } = e.target;
        // main.innerHTML = marked(value);
        main.innerHTML = e.target.value;
    });

    document.body.appendChild(notes);
}
