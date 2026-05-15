function openDescBox(id) {
    document.getElementById(id).style.display = 'flex';
}

function closeDescBox(id) {
    document.getElementById(id).style.display = 'none';
}

function showTab(btn, type) {
    const modal = btn.closest('.modal');
    modal.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    modal.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    modal.querySelector('.tab-content.' + type).classList.add('active');
}