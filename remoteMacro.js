//원격 매크로
let name = prompt('어떤 작품에 매크로를 실행할까요?');
let time = prompt('몇초마다 작품을 업로드 할까요?');
let id;
if (time > 180) {
    $.get(`https://playentry.org/api/project/find?user=${user._id}`,
    get => {
        get.data.forEach(project => {
            if (project.name == name) {
                id = project._id;
            }
        });
        if (id == undefined) {
            console.log('지정하신 작품을 찾을 수 없습니다.');
        } else {
            console.log('매크로를 시작합니다. 새로고침하면 매크로가 중단됩니다.');
            setInterval(() => {
                fetch(`https://playentry.org/api/project/${id}`, {
                    method: 'PUT'
                });
                console.log('작품이 업로드 되었습니다.');
            }, time * 1000);
        }
    });
} else {
    console.log('작품 업로드 주기는 3분보다 많아야 합니다.');
}
