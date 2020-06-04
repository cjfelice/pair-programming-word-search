
const transpose = function(matrix) {
    let transMaster = [];
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        transMaster.push([]);
      }
    }
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        transMaster[j].push(matrix[i][j]);
      }
    }
    if (transMaster.length !== matrix[0].length) {
      const x = transMaster.length - matrix[0].length;
      for (let i = 1; i <= x; i++) {
        transMaster.pop();
      }
    }
    return transMaster;
  };

const wordSearch = (letters, word) => {
    if (!letters[0]) {
        return false;
    };
    const horizontalJoin = letters.map(ls => ls.join(''));
    const flippedArray = transpose(letters);
    const verticalJoin = flippedArray.map(ls => ls.join(''));

    for (l of horizontalJoin) {
        if (l.includes(word)) return true;
    }
    for (l of verticalJoin) {
        if (l.includes(word)) return true;
    }
    return false;
};

module.exports = wordSearch