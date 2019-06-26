function xuatham() {
    let browser = document.getElementById('input').value;
    console.log(browser);

    switch (browser) {
        case 'Edge':
            alert("You've got the Edge!");
            break;

        case 'Firefox':
            alert('Okay we support these browsers too');
            break;

        case  'Safari':
            alert('Okay we support these browsers too');
            break;

        case  'Opera':
            alert('Okay we support these browsers too');
            break;

        default:
            alert('We hope that this page looks ok!');

    }
}