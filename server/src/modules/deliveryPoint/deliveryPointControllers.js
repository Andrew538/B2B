import { deliveryPoints } from "./deliveryPointService.js"


export const getDeliveryPointsOfOrganization = async (req, res, next) => {
    const {orgId} = req.query
    const point = await deliveryPoints.fetchDeliveryPoints(orgId)

    return res.json(point)     
}