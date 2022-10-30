function DiamondPattern(Input) {
    let alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let MaxLimit = (alphabets.length / 2);
    if (Input <= MaxLimit) {
      for (let i = 0; i < (Input * 2) - 1; i += 2) {
    let substring = alphabets
      .substring(0, i + 1)
      .replace(
        i === 2 * (Input - 1) ? alphabets.slice(0) : alphabets.slice(1, i),
        ' '.repeat((i - 1) != -1 ? (i - 1): 0 )
      );
      let result = substring.padStart(substring.length + (Input - 1) - (i / 2))
      console.log(result);
        }
    }
    else {
        console.log(`Input Must between 0 and ${MaxLimit}`);
    }
}

DiamondPattern(12);