import EnterParkingLot from '../core/usecase/EnterParkingLot'
import GetParkingLot from '../core/usecase/GetParkingLot'
import ParkingLotRepositoryMem from '../infra/repository/ParkingLotRepositoryMem'
import ParkingLotRepositorySQL from '../infra/repository/ParkingLotRepositorySQL'

test('Should get parking lot', async () => {
  const parkingLotRepositorySQL = new ParkingLotRepositorySQL()
  const getParkingLot = new GetParkingLot(parkingLotRepositorySQL)
  const parking_lot = await getParkingLot.execute('Shopping')
  expect(parking_lot.code).toBe("Shopping")

})

test('Should enter parking lot', async () => {
  const parkingLotRepositoryMem = new ParkingLotRepositoryMem()
  const parkingLotRepositorySQL = new ParkingLotRepositorySQL()
  const enterParkingLot = new EnterParkingLot(parkingLotRepositorySQL)
  const getParkingLot = new GetParkingLot(parkingLotRepositorySQL)
  const parkingLotBeforeEnter = await getParkingLot.execute('Shopping')
  expect(parkingLotBeforeEnter.occupiedSpaces).toBe(0)
  await enterParkingLot.execute(
    'Shopping',
    'MMM-0001',
    new Date('2022-03-01T10:00:00'),
  )
  const parkingLotAfterEnter = await getParkingLot.execute('Shopping')
  expect(parkingLotAfterEnter.occupiedSpaces).toBe(1)
  // expect(parkingLot.code).toBe('Shopping')
})

test.skip('Should be closed', async () => {
  const parkingLotRepositoryMem = new ParkingLotRepositoryMem()

  const enterParkingLot = new EnterParkingLot(parkingLotRepositoryMem)
  const getParkingLot = new GetParkingLot(parkingLotRepositoryMem)
  const parkingLotBeforeEnter = await getParkingLot.execute('Shopping')
  expect(parkingLotBeforeEnter.occupiedSpaces).toBe(0)
  await enterParkingLot.execute(
    'Shopping',
    'MMM-0001',
    new Date('2022-03-01T23:00:00'),
  )
})

test.skip('Should be Full', async () => {
  const parkingLotRepositoryMem = new ParkingLotRepositoryMem()
  const enterParkingLot = new EnterParkingLot(parkingLotRepositoryMem)
  const getParkingLot = new GetParkingLot(parkingLotRepositoryMem)
  const parkingLotBeforeEnter = await getParkingLot.execute('Shopping')
  expect(parkingLotBeforeEnter.occupiedSpaces).toBe(0)
  await enterParkingLot.execute(
    'Shopping',
    'MMM-0001',
    new Date('2022-03-01T10:00:00'),
  )
  await enterParkingLot.execute(
    'Shopping',
    'MMM-0002',
    new Date('2022-03-01T10:00:00'),
  )
  await enterParkingLot.execute(
    'Shopping',
    'MMM-0003',
    new Date('2022-03-01T10:00:00'),
  )
  await enterParkingLot.execute(
    'Shopping',
    'MMM-0004',
    new Date('2022-03-01T10:00:00'),
  )
  await enterParkingLot.execute(
    'Shopping',
    'MMM-0005',
    new Date('2022-03-01T10:00:00'),
  )
  await enterParkingLot.execute(
    'Shopping',
    'MMM-0006',
    new Date('2022-03-01T10:00:00'),
  )
})
