
const uuid = (str) => {
  let nums = '';
  for(let i = 0; i < 4; i++) {
    nums += parseInt(Math.random() * 9, 10);
  }
  return str + '-' + nums;
};
module.exports = uuid;
