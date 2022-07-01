const jwt = require("jsonwebtoken");
const { Users } = require("../../models");
const decryptFunction = require("../encrypt-decrypt/decrypt_pass");

async function login(req, res) {
  try {
    let check = await Users.findOne({
      where: { email: req.body.email },
    });
    
    if (check) {
      let idGenerator = check.id;
      let validation = await Users.findOne({
        where: { id: idGenerator },
      });
      let checkPassword = await decryptFunction(
        validation.password,
        req.body.password
      );
      if (req.body.email === validation.email && checkPassword) {
        let user = {
          id: validation.id, 
          email: validation.email,
          img_url: validation.img_url,
          name: validation.name,
          city: validation.city,
          address: validation.address,
          phone: validation.phone
        };
        // let user = {
        //   ...validation
        // };
        // user.password = undefined;
        let token = jwt.sign(user, "s3cr3t");
        res.status(200).json({
          user: user,
          token: token,
        });
        return;
      } else {
        res.send("invalid");
      }
    } else {
      res.send("invalid");
    }
  } catch (err) {
    res.send(err);
  }

}

module.exports = login;
