document.querySelectorAll('button[type="logic_button"]').onclick = function() {
    document.querySelectorAll('button[type="logic_button"]').classList.add('active_logic_button');
    document.querySelectorAll('button[type="logic_button"]').classList.remove('non_active_logic_button');
}
