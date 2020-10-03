var username = prompt('정지되었는지 확인할 유저의 이름을 입력해주세요.');
fetch(
'https://playentry.org/api/getUserByUsername/'+username
).then(
(response) => {
  if (response.ok) {
    response.json().then(
      (json) => {
        if (json.isBlocked) {
          console.log('해당 유저는 정지되었습니다.');
        } else {
          console.log('해당 유저는 정지되지 않았습니다.');
        }
      }
    )
  } else {
    console.log('해당 유저가 존재하지 않습니다.');
  }
}
)
