document.addEventListener('[logic_button]').onClick = function() {
    document.querySelector('[logic_button]').classList.add('active_logic_button');
    document.querySelector('[logic_button]').classList.remove('non_active_logic_button');
}
