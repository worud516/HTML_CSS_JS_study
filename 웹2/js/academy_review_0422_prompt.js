console.clear();

var age = prompt("숫자로 나이를 입력해 주세요");
var genom = prompt("남자 여자로 성별을 입력해 주세요");

if (genom == "남자") {  
  if (age < 20) {
    console.log("당신은 " + age + " 살 " + genom + "로 미성년자 입니다.");
  } else if (age > 20) {
    console.log("당신은 " + age + " 살" + genom + "로 성인 입니다.");
  } else if (age == 20) {
    console.log("당신은 " + age + " 살" + genom + " 입니다.");
  } else {
    console.log("숫자로 나이를 입력해 주세요.");
  };  
} else if (genom == "여자") {
  if (age < 20) {
    console.log("당신은 " + age + " 살 " + genom + "로 미성년자 입니다.");
  } else if (age > 20) {
    console.log("당신은 " + age + " 살 " + genom + "로 성인 입니다.");
  } else if (age == 20) {
    console.log("당신은 " + age + " 살 " + genom + " 입니다.");
  } else {
    console.log("숫자로 나이를 입력해 주세요.");
  };
} else {
  console.log("남자 또는 여자로 성별을 입력해 주세요.");
}
