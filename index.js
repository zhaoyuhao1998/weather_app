
var app = new Vue({
  el: '.container',
  data: {
    city: '',
    cityKey: 0,
    cityCur: {},
    isShow: false,
    isDay: false,
    weatherIcon: '',
  },
  methods: {
    search: function() {
      // 获取Location key
      var that = this;
      axios.get("http://dataservice.accuweather.com/locations/v1/cities/search?apikey=" + "dMb1tPHeIb8QgeX7HOS9jbbLslyQkmAX" + "&q=" + that.city)
      .then(function(res) {
        // console.log(res);
        that.cityKey = parseInt(res.data[0].Key);
        // 获取天气情况
        axios.get("http://dataservice.accuweather.com/currentconditions/v1/" + that.cityKey + "?" + "apikey=" + "dMb1tPHeIb8QgeX7HOS9jbbLslyQkmAX" )
        .then(function(res) {
          // console.log(res);
          that.cityCur = res.data[0]
          console.log(that.cityCur);
          that.isShow = true
          that.isDay = res.data[0].IsDayTime
          Weather = res.data[0].WeatherText
          // 设置天气icon
          if (Weather === "Overcast")
            that.weatherIcon = 'bi-cloudy'
          else if (Weather === "Sunny")
            that.weatherIcon = 'bi-brightness-high'
          else
            that.weatherIcon = 'bi-cloud-rain'
          that.cityCur.LocalObservationDateTime = that.cityCur.LocalObservationDateTime.slice(0, 10)
        }, function(err) {
          console.log(err);
        })
      }, function(err) {
          console.log(err);  
        }
      )
    },

  }
})
