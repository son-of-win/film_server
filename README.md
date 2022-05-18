## Nuxt and Node Streaming Application

## Các cài đặt
* các file video .mp4 sẽ được lưu ở thư mục /backend/assets
* Danh sách các film sẽ lưu ở trong file mockData.js với cấu trúc
    * id: là tên của file .mp4 **viết không dấu**
    * poster: là link ảnh hiển thị của film
    * hai trường còn lại tùy chọn
* Chỉnh sửa ip trong file /frontend/src/App.vue và /frontend/src/VideoPlayer.vue thành ip của máy bạn
## Setup Node Server
``` bash
cd backend
yarn install
yarn start
```

## Setup Nuxt Application
``` bash
cd frontend
yarn install
yarn dev
```
