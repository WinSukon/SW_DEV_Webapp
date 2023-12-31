/* ทดสอบการแสดงผล ข้อมูลโรงพยาบาลของ Hospital Catalog 
ส าหรับ Component HospitalCatalog โดย mock ข้อมูล
โรงพยาบาลที่เดิม fetch มาจาก Backend API ใน Assignment 9 Data Fetching*/

// ตรวจสอบว่าจ านวนรูปภาพโรงพยาบาลที่แสดงใน HospitalCatalog ต้องเป็นจ านวนที่ถูกต้อง
import HospitalCatalog from "@/components/HospitalCatalog";
import {render,screen, waitFor} from "@testing-library/react"

const mockFetchHos = {
    "success": true,
    "count": 3,
    "pagination": {},
    "data": [
      {
        "_id": "652c0493cc2f138224414aab",
        "name": "Chulalongkorn Hospital",
        "address": "1873 Rama IV Rd",
        "district": "Pathum Wan",
        "province": "Bangkok",
        "postalcode": "10330",
        "tel": "026494000",
        "picture": "https://drive.google.com/uc?id=1nekIjHnFtGMdbmsYrBao55dGvtYER62P",
        "__v": 0,
        "id": "652c0493cc2f138224414aab"
      },
      {
        "_id": "652c04f1cc2f138224414aae",
        "name": "Rajavithi Hospital",
        "address": "2 Phaya Thai Rd, Thung Phaya Thai",
        "district": "Ratchathewi",
        "province": "Bangkok",
        "postalcode": "10400",
        "tel": "022062900",
        "picture": "https://drive.google.com/uc?id=15kWfVT9wchkH3I9BHKeqftTmj0bFgJtu",
        "__v": 0,
        "id": "652c04f1cc2f138224414aae"
      },
      {
        "_id": "652c054ccc2f138224414ab1",
        "name": "Thammasat University Hospital",
        "address": "95 Moo 8 Phaholyothin Frontage Rd, Khlong Nueng",
        "district": "Khlong Luang",
        "province": "Pathum Thani",
        "postalcode": "12120",
        "tel": "029269999",
        "picture": "https://drive.google.com/uc?id=1jit7S4cRATEfDi64YjjK1ur2jGlZYs2e",
        "__v": 0,
        "id": "652c054ccc2f138224414ab1"
      }
    ]
}

describe('hospitalCatalog',()=>{


    it('num hos pic dhould be equal',async ()=>{
        
        const hosCat = await HospitalCatalog({hosJson: mockFetchHos})
        render(hosCat)

        await waitFor(
            ()=>{
                const hosImgs = screen.queryAllByRole('img')
                expect(hosImgs.length).toBe(3)
            }
        )

    })
})