function set_storege(key, val, set_expire_day) {

    var date = new Date;
    var expire_day = date.getTime() + (set_expire_day * 24 * 60 * 60 * 1000);
    var key_val = JSON.stringify({
        "val": val,
        "set_expire_day": expire_day,
    })
    var test = JSON.parse(key_val);
    localStorage.setItem(key, key_val);
}

function check_storege(key) {
    var key_storage = localStorage.getItem(key);
    var key_storage_json = JSON.parse(key_storage);
    var storage_expire;
    var date = new Date;
    var now_day = date.getTime();

    if (storage_expire < now_day) {
        localStorage.removeItem(key);
    }

    if (localStorage.getItem("pop_up_01_test") != null) {
        storage_expire = key_storage_json.set_expire_day;
        $(".popup-box-wrap").addClass("active");
        // 내 팝업 클래스 안 보이게 하기
    } else {
        $(".popup-box-wrap").removeClass("active");
        // 내 팝업 클래스 보이게 하기
    }
}

check_storege("pop_up_01_test");

$(document).ready(function () {

    $(".popup-box-wrap .closeBtn").click(function () {
        // 닫기 버튼을 누르면...
        $(".popup-box-wrap").addClass("active");
        // 내 팝업 클래스 이름 변경
        var $today__checked = $(".btn-area input").prop("checked");
        // 내 팝업 안의 input 박스가 체크되어있을떄

        if ($today__checked) {
            set_storege("pop_up_01_test", "pop_up_01_test", 1);
        }

    });

    $(".reset").click(function () {
        // 리셋버튼
        alert("팝업 활성화 및 오늘하루 열지 않기 해제");
        $(".popup-box-wrap").removeClass("active");
        localStorage.removeItem("pop_up_01_test");
    });

});