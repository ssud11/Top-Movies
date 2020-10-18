var axios = require('axios');
const publicIp = require("react-public-ip");

exports.findAll = function (req, res, next) {

  axios
    .get(
      'http://api.themoviedb.org/3/movie/top_rated?api_key=196a5e62d61a85e1a4d7aa52c237c10d'
    )
    .then(resp => {
      console.log(resp);
      res.send(resp.data.results);
    })
    .catch((function (err) {
      console.log(err);
    })
    );

};

exports.findByOwnCountry = async function (req, res, next) {

  const ipv4 = await publicIp.v4() || "";

  axios
    .get(
      `http://ip-api.com/json/${ipv4}`
    ).then(data => {
      console.log(`http://ip-api.com/json/${ipv4}`);
      console.log(data.data);

      var country = data.data.countryCode;

      axios
        .get(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=196a5e62d61a85e1a4d7aa52c237c10d&region=${country}`
        )
        .then(resp => {
          console.log(`https://api.themoviedb.org/3/movie/top_rated?api_key=196a5e62d61a85e1a4d7aa52c237c10d&region=${country}`);
          console.log(resp);
          res.send(resp.data.results);


        })
        .catch((function (err) {
          console.log(err);
        })
        );
    })
};

exports.findByCountry = async function (req, res, next) {
  var country = req.params.country;

  axios
    .get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=196a5e62d61a85e1a4d7aa52c237c10d&region=${country}`
    )
    .then(resp => {
      console.log(`https://api.themoviedb.org/3/movie/top_rated?api_key=196a5e62d61a85e1a4d7aa52c237c10d&region=${country}`);
      
      console.log(resp);
      res.send(resp.data.results);
    })
    .catch((function (err) {
      console.log(err);
    })
    )

};