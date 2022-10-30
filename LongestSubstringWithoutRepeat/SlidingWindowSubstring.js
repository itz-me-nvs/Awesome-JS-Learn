function SlidingWindowApproachSubstring(str) {
  let map = new Map();
    var LongestLength = 0;
    var left = 0;

    if (str.length == 0) return 0
    if (str.length == 1) return 1

  if (str.length >= 0 && str.length <= 5 * Math.pow(10, 4)) {
      for (let i = 0; i < str.length; i++) { // o (n)
          while (map.has(str[i])) { // o (1)
              map.delete(str[left]); // o(1)
              left++;
          }
          map.set(str[i], i);
          LongestLength = Math.max(LongestLength, i - left + 1);
    }
  }
  return LongestLength;
}

console.log(SlidingWindowApproachSubstring('javaconcept'));
