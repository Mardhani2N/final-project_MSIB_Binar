module.exports = {
    // Login
    login: require("./user/login"),

    // Register
    register: require("./user/register"),

    // Product
    productPost: require("./product/product_post"),
    productGet: require("./product/product_get"),
    productGetByID: require("./product/product_get_id"),
    productPut: require("./product/product_put"),
    productDelete: require("./product/product_delete"),

    // Encrypt and Decrpyt
    encryptPass: require("./encrypt-decrypt/encrypt_pass"),
    decryptPass: require("./encrypt-decrypt/decrypt_pass"),
    
    // Authenticator
    authenticator: require("./middleware/authenticator")
};
