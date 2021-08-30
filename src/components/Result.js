function index({ hava }) {
  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }

  return (
    <>
      {typeof hava.main != "undefined" && (
        <div className="result">
          <div className="state">
            {hava.name}, {hava.sys.country}
          </div>
          <div className="detail">
            <div className="derece">{Math.round(hava.main.temp)} °c</div>
            <div className="statu">{hava.weather[0].description}</div>
            <div className="statu">{formatDate(Date(hava.dt))}</div>
            <div className="statu">
              <img alt=" " src={require('../images/'+hava.weather[0].icon+'.svg').default}/>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default index;