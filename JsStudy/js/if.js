function ageCheck(age , gen) {
    if (gen == "남자") {
      document.write("당신은 " + gen + " 입니다.");
      if (age > 20) {
        document.write("당신은 " + age + " 살 " + gen + " 로 20살 초과입니다.");
      } else if (age == 20) {
        document.write("당신은 " + age + " 살 " + gen + "입니다.");
      } else if (age < 20) {
        document.write("당신은 " + age + " 살 " + gen + "로 20살 미만입니다.");
      } else {
        document.write("나이를 숫자로 입력해 주세요");
      }
    } else if (gen == "여자") {
      document.write("당신은 " + gen + " 입니다.");
      if (age > 20) {
        document.write("당신은 " + age + " 살 " + gen + "로 20살 초과입니다.");
      } else if (age == 20) {
        document.write("당신은 " + age + " 살 " + gen + "입니다.");
      } else if (age < 20) {
        document.write("당신은 " + age + " 살 " + gen + "로 20살 미만입니다.");
      } else {
        document.write("나이를 숫자로 입력해 주세요");
      }
    }
  }
  
  var age = prompt("나이를 입력해주세요.");
  var gen = prompt("성별을 입력해주세요. (남자 or 여자로 기입.)");
  ageCheck(age, "남자");