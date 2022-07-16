let _tabs = document.getElementsByClassName('tabs')
let _navlink = document.getElementsByClassName('tab-link')
function _openTabs(event, tab) {
    for(let i = 0; i < _tabs.length; i++) {
        _tabs[i].classList.remove('active')
    }
    for(let j = 0; j < _navlink.length; j++) {
        _navlink[j].className = _navlink[j].className.replace(" actived", "")
    }
    document.getElementById(tab).classList.add('active')
    event.currentTarget.className += " actived"
}
// let _css = document.getElementById('css-code').innerHTML
// let _js = document.getElementById('js-code').innerHTML
document.querySelector('.run-code').addEventListener('click', function() {
    let _body = document.querySelector('iframe').contentWindow.document.querySelector('html>body')
    let _style = document.querySelector('iframe').contentWindow.document.querySelector('html>head')
    let _script = document.querySelector('iframe').contentWindow.document.querySelector('html')

    let temp1 = document.createElement('script')
    let temp2 = document.createElement('style')
    _script = _script.appendChild(temp1)
    _style = _style.appendChild(temp2)

    let _html = document.querySelector('#html-code').value
    let _css = document.querySelector('#css-code').value
    let _js = document.querySelector('#js-code').value

    _body.innerHTML = _html
    _style.innerHTML = _css
    _script.innerHTML = _js
})
for(let q = 0; q < _tabs.length; q++) {
    _tabs[q].addEventListener('keydown', function(event) {
        if(event.key == 'Tab') {
            event.preventDefault()
            var _start = this.selectionStart 
            var _end = this.selectionEnd
            this.value = this.value.substring(0, _start) + "\t" + this.value.substring(_end)
            this.selectionStart = this.selectionEnd = _start + 1
        }
    })
}
let _closeChars = new Map([
    ['(', ')'],
    ['[', ']'],
    ['{', '}'],
    ['<', '>'],
    [':', ';'],
    [`'`, `'`],
    [`"`, `"`]
])
for(let z = 0; z < _tabs.length; z++) {
    _tabs[z].addEventListener('input', function(event) {
        let _pos = event.target.selectionStart
        let _val = [...event.target.value]
        let _char = _val.slice(_pos-1, _pos)[0]
        let _closeChar = _closeChars.get(_char)

        if(_closeChar) {
            _val.splice(_pos, 0, _closeChar);
            event.target.value = _val.join('');
            event.target.selectionEnd = _pos
        }
    })
}



/* <h1>hi this is heading</h1> */