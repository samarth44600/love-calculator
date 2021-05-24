// const capitalize = (name) => {
//   var res = "";
//   name
//     .trim()
//     .split(" ")
//     .forEach((split) => {
//       res += `${split.charAt(0).toUpperCase()}${split.slice(1)} `;
//     });
//   return res.trim();
// };

const capitalize = (req, res, next) => {
  var partner1 = "";
  var partner2 = "";
  req.body.partner1
    .trim()
    .split(" ")
    .forEach((split) => {
      res += `${split.charAt(0).toUpperCase()}${split.slice(1)} `;
    });
  req.body.partner2
    .trim()
    .split(" ")
    .forEach((split) => {
      res += `${split.charAt(0).toUpperCase()}${split.slice(1)} `;
    });
  req.body.partner1 = partner1;
  req.body.partner2 = partner2;
  next();
};
module.exports = capitalize;
