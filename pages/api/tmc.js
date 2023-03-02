import tmc from '../../dummyData.json'
export default function handler(req, res) {

  if (req.method === "GET") {
    if (req.query.start && req.query.end) {

      const filter = getByPeriod(req.query.start, req.query.end)
      res.send(filter)
      return;
    }
    else {
      res.send(tmc.TMC)
    }
  }

}

function getByPeriod(start, end) {
  start = new Date(start).getTime()
  end = new Date(end).getTime()

  const result = tmc.TMC.filter(d => {
    const time = new Date(parseInt(d.entry_date)).getTime();
    return (start <= time && time <= end)
  })

  return result;
}