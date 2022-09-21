import mongoose from "mongoose";
const { Schema } = mongoose;

kakao_API_SAMPLE_address = {
    "address": {
        "address_name": "서울 강남구 삼성동",
        "b_code": "1168010500",
        "h_code": "",
        "main_address_no": "",
        "mountain_yn": "N",
        "region_1depth_name": "서울",
        "region_2depth_name": "강남구",
        "region_3depth_h_name": "",
        "region_3depth_name": "삼성동",
        "sub_address_no": "",
        "x": "127.062831022499",
        "y": "37.514322572329"
    },
    "address_name": "서울 강남구 삼성동",
    "address_type": "REGION",
    "road_address": null,
    "x": "127.062831022499",
    "y": "37.514322572329"
}

const AddressSchema = new mongoose.Schema({
    address_name: {
        type: String,
        required: true
    },
    region_1depth_name: {
        type: String,
        required: true
    },
    region_2depth_name: {
        type: String,
        required: true
    },
    region_3depth_h_name: {
        type: String,
        required: true
    },
    region_3depth_name: {
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

export default mongoose.model("Address", AddressSchema);
