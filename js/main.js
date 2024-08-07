function getElement() {
    const modal = document.getElementById('modal');
    const modalBackground = document.getElementById('modal-background');
    let nameSection = document.getElementById('dialog-detail-name');
    return { modal, modalBackground, nameSection };
}

function handleScrollPage(enable = true) {
    const onScrollDisable = () => {
        scrollTop =
            window.scrollY ||
            document.documentElement.scrollTop;
        scrollLeft =
            window.scrollX ||
            document.documentElement.scrollLeft,
            window.scrollTo(scrollLeft, scrollTop);
    }
    if (!enable) {
        window.onscroll = onScrollDisable();
        return;
    }
    window.onscroll = null;
}
function openModal(speaker) {
    const { modal, modalBackground, nameSection } = getElement();
    nameSection.innerHTML = `<p>${speaker.name}</p>`;
    modal.classList.remove('hidden');
    handleScrollPage(false);
    modalBackground.classList.remove('hidden');
    scrollTop =
        window.scrollY ||
        document.documentElement.scrollTop;
    scrollLeft =
        window.scrollX ||
        document.documentElement.scrollLeft;
    window.onscroll = function () {
        window.scrollTo(scrollLeft, scrollTop);
    };
}

function closeModal() {
    const { modal, modalBackground } = getElement();
    modal.classList.add('hidden');
    handleScrollPage();
    modalBackground.classList.add('hidden');
}
