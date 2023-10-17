
## DEMO
https://miwth.codes

## Description
**Các chức năng chính:**
- Xử lý javascript cơ bản: validation, DOM, event, ...
- GEO Location: ở trang checkout, sau khi chọn book phòng thì sẽ nhận được yêu cầu cấp quyền truy cập vị trí, sau khi cấp quyền thì sẽ hiển thị vị trí hiện tại của người dùng. Nếu người dùng đồng ý thì sẽ hiển thị vị trí hiện tại của người dùng vào input Address.
- Authentication: đăng ký, đăng nhập, đăng xuất.
- Authorization: chỉ có người dùng đã đăng nhập mới có thể đặt phòng.
- MongoDB: lưu trữ thông tin người dùng, thông tin phòng.


## Installation

1. Clone the repo
2. Install NPM packages
    ```bash
    npm install
    ```
3. Start the server
    ```bash
    npm run start
    ```
4. Open http://localhost:3000 in your browser

## If problems occur

1. Delete the `node_modules` folder
2. Install NPM packages
    ```bash
    npm install
    ```
3. If the npm install fails, try to install the packages manually
    ```bash
    npm install express
    npm install express-handlebars
    npm install cookie-parser
    npm install express-jwt
    npm install jsonwebtoken
    npm install mongoose
    npm install bcrypt
    npm install nodemon
    ```
4. Start the server
    ```bash
    npm run start
    ```
5. Open http://localhost:3000 in your browser

6. Try sudo if still fails
    ```bash
    sudo npm install
    sudo npm run start
    ```

7. If the problem still occurs, please contact me: 
    - Zalo: 0879 159 499
    - Email: nongnguyenthanh.0106@gmail.com

## License
[MIT](https://choosealicense.com/licenses/mit/)
