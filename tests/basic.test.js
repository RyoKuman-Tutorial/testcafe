import { Selector } from "testcafe";

fixture`Getting started with TestCafe`.page("../pages/page1.html");

test("page1 test", async (t) => {
  await t.typeText("#text", "hello"); // id 가 text인 htmlElement 를 찾은 뒤에, hello 를 타이핑
  await t.click("#submit"); // id 가 submit인 htmlElement 를 찾은 뒤에, 클릭

  await t.expect(Selector("#result").innerText).contains("hel"); // id 가 reuslt인 htmlElement 를 찾은 뒤에, innerText 가 hel 를 포함하는지 확인
  await t.expect(Selector("#result").innerText).eql("hello"); // id 가 reuslt인 htmlElement 를 찾은 뒤에, innerText 가 hello 와 일치하는지 확인
  await t.expect(Selector("#result").innerText).eql("hell"); // id 가 reuslt인 htmlElement 를 찾은 뒤에, innerText 가 hell 와 일치하는지 확인, 에러 발생
});
