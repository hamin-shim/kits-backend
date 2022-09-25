import mongoose from "mongoose";
const { Schema } = mongoose;

kakao_API_SAMPLE_location = {
    "address_name": "서울 서대문구 창천동 62-59",
    "category_group_code": "",
    "category_group_name": "",
    "category_name": "서비스,산업 > 전문대행 > 공간대여 > 스터디카페,스터디룸",
    "distance": "",
    "id": "1041596354",
    "phone": "02-2135-3196",
    "place_name": "신촌스터디룸 윙스터디",
    "place_url": "http://place.map.kakao.com/1041596354",
    "road_address_name": "서울 서대문구 연세로5다길 14",
    "x": "126.9347703988",
    "y": "37.5566034259156"
}

const LocationSchema = new mongoose.Schema({
    address_name: {
        type: String,
        required: true
    },
    x: {
        type: String,
        required: true
    },
    y: {
        type: String,
        required: true
    },
});

export default mongoose.model("Location", LocationSchema);
