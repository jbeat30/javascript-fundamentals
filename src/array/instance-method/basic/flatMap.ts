(() => {
  const array = [1, 2, 3, 4, 5];

  const result = array.flatMap((x) => [x, x * 2]);
  // flatMap은 map + flat(1단계) 효과를 가짐
  // 즉, 각 요소 x에 대해 [x, x * 2] 배열을 반환하고, 이 결과들을 하나의 배열로 "평탄화(1단계)"함
  // [1, 2], [2, 4], [3, 6], [4, 8], [5, 10] -> 이중 배열이 아니라 그냥 [1, 2, 2, 4, 3, 6, 4, 8, 5, 10] 으로
  console.log(result); // [1, 2, 2, 4, 3, 6, 4, 8, 5, 10]

  const result2 = array.flatMap(i => i);
  // flatMap의 콜백이 단일 값(i)을 반환하고 있음. 즉, [1, 2, 3, 4, 5]에서 그냥 각각 i -> i로 반환됨
  // 하지만 반환값이 배열이 아니기 때문에 flat이 할 일이 없음 (평탄화할 게 없음)
  // 결국 원본 배열 그대로 리턴됨
  console.log(`인자값은 배열로 리턴됨 ${result2}`); // [1, 2, 3, 4, 5]

  const sentences = ["Hello world", "FlatMap is useful", "TypeScript is great"];
  const words = sentences.flatMap(sentence => sentence.split(" "));
  // 각 문자열(sentence)을 단어 단위로 나눔 -> split(" ") -> ["Hello", "world"] ...
  // map을 쓰면 [["Hello", "world"], ["FlatMap", "is", "useful"], ["TypeScript", "is", "great"]]
  // flatMap은 여기서 한 단계 평탄화해서 -> ["Hello", "world", "FlatMap", "is", "useful", "TypeScript", "is", "great"]
  console.log(words);
})();