export default class ParkedCar {
  code: string
  plate: string
  date: Date
  constructor(code: string, plate: string, date: Date) {
    !/[A-Z]{3}-[0-9]{4}/.test(plate) && Error('Invalid Plate')
    this.code = code
    this.plate = plate
    this.date = date
  }
}
