async function btnSend() {
    var data = await fetch('/data');
    return data.json();
}

export { btnSend };