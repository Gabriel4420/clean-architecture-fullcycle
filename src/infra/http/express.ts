import Express from 'express'
import ExpressAdapter from '../../adapter/ExpressAdapter'
// import GetParkingLot from '../../core/usecase/GetParkingLot'
import ParkingLotController from '../../controller/ParkingLotController'
// import ParkingLotRepositorySQL from '../repository/ParkingLotRepositorySQL'

const app = new Express()

/* 
  >> OLD WAY

  app.get('/parkingLots/:code', async (req, res) => {
  const parkingLotRepositorySQL = new ParkingLotRepositorySQL()
  const getParkingLot = new GetParkingLot(parkingLotRepositorySQL)
  const parkingLot = await getParkingLot.execute(req.params.code)

  res.json(parkingLot)
}) */

app.get(
  '/parkingLots/:code',
  ExpressAdapter.create(ParkingLotController.getParkingLot),
)

app.listen(3000)

console.log('starter with express')
