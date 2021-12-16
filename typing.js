let target = document.querySelector("#dynamic");
// dynamic이라는 id를 가진 문서 객체를 선택해!
// 이렇게하면 target이라는 변수에 html에서 작성한 p태그로 감싼 부분이 할당된다.

function randomString(){
//randomString이라는 함수를 만들어주고,
    let stringArr = ["#Design_Player!"]
    // stringArr이라는 변수에 배열을 만들어 LOWN KIM이라는 문자를 넣어뒀다.
let selectString = stringArr[0];
// srtingArr 배열 속 문자 중 0번째 문자를 선택하고,
let selectStringArr = selectString.split("");
// 해당 문자열을 ""를 기준으로 두고 배열로 분리시키렴!
// 이렇게해서 단어를 한 글자씩 낱개로 분리할 수 있다.

return selectStringArr;
// 최종값 반환해주기!
}

//이하 텍스트를 한 글자씩 페이지에 출력하는 함수-------------------------
function dynamic(randomArr){
// 배열화된 값이 매개변수로 전달된다.
    if(randomArr.length > 0){
    // 만약 randomArr속 문자열의 갯수가 0보다 크면
        target.textContent += randomArr.shift();
        // randomArr속 쪼개진 문자를 맨 앞부터 하나씩 출력해!
        // shift라는 메소드가 배열의 맨 앞 값부터 빼내 출력하는 역할을 한다.
        
        setTimeout(function(){
            dynamic(randomArr);
        }, 100);
        // 아직도 randomArr속 문자열의 갯수가 0보다 크면 계속 글자를 빼내렴. 단 0.1초의 간격으로!
        // 이렇게 하면 randomArr이 0보다 크다는 전제 하에 함수가 계~속 반복된다. 

    }else{
        setTimeout(resetTyping, 3000);
        // 만약에 randomArr이 0보다 크지 않으면(하나씩 다 빼서 남아있는게 하나도 없으면)
        // 3초뒤에 resetTyping함수를 호출해라.
    }
}
dynamic(randomString());
// randomString함수 호출!


// 이하 타이핑 후 리셋시키기------------------------------------------
function resetTyping(){
    target.textContent = "";
    // 타이핑이 끝나고 3초 뒤 다시 아무것도 없는 상태여야만
    // 새로운 타이핑을 시작할 수 있으니, 아무것도 없는 빈 문자열을 만들어 넣어준다.
    dynamic(randomString());
    // randomString함수 또 호출!
}