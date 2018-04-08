function isAnagram(originalStr, testStr) {
  
  // test if they are equal, then they aren't anagrams
  if (originalStr.trim() === testStr.trim()) {
    console.log('They are not an anagrams, these words are the same!');
    return false;
  }
  

  if (sortString(originalStr) !== sortString(testStr)) {
    console.log('Eh... They are not the anagrams');
    return false;
  }
  
  console.log('Bingo! They are the anagrams');
  return true;
}

function sortString(str) {
  return str.replace(/\s+/g, '').toLowerCase().split('').sort().join('');
}

isAnagram('стационар', 'соратница');
