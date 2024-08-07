function getElement() {
    const modal = document.getElementById('modal');
    const modalBackground = document.getElementById('modal-background');
    let nameSection = document.getElementsByClassName('dialog-detail-name');
    if (nameSection.length > 0) {
        nameSection = nameSection[0];
    }
    return { modal, modalBackground, nameSection }
}
function openModal(speaker) {
    const { modal, modalBackground, nameSection } = getElement();
    if (modal && modalBackground && nameSection) {
        nameSection.innerHTML = `<p>${speaker.name}</p>`;
        modal.classList.remove('hidden');
        modalBackground.classList.remove('hidden');
        return;
    }
    console.error('Error: no modal avaiable');
}

function closeModal() {
    const { modal, modalBackground } = getElement();
    modal.classList.add('hidden');
    modalBackground.classList.add('hidden');
}
