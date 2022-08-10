import { BadRequest } from "@bcwdev/auth0provider/lib/Errors.js"
import { dbContext } from "../db/DbContext.js"

class HousesService {
  async getHouses() {
    let houses = await dbContext.Houses.find()
    return houses
  }

  async createHouse(houseData) {
    let house = await dbContext.Houses.create(houseData)
    return house
  }

  async getHouseById(houseId) {
    let house = await dbContext.Houses.findById(houseId)
    if (!house) {
      throw new BadRequest ('Invalid House Id')
    }
    return house
  }

  async editHouse(houseId, houseData) {
    let house = await this.getHouseById(houseId)

    house.bedrooms = houseData.bedrooms || house.bedrooms
    house.bathrooms = houseData.bathrooms || house.bathrooms
    house.levels = houseData.levels || house.levels
    house.imgUrl = houseData.imgUrl || house.imgUrl
    house.year = houseData.year || house.year
    house.price = houseData.price || house.price
    house.description = houseData.description || house.description

    await house.save()
    return house
  }

  async deleteHouse(houseId) {
    let house = await this.getHouseById(houseId)
    await house.remove()
    return house
  }

}


export const housesService = new HousesService()