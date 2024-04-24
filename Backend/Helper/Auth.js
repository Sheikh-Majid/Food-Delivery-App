const bcrypt = require("bcrypt");


 const hashPassword = async (password) => {
    try {
         const saltround = 10;
        const hashedPassword = await bcrypt.hash(password, saltround);
        return hashedPassword;
    } catch (error) {
        console.log("Error while Hashing the Password" , error);
     }

}

// compare Password

 const ComparePassword = async (password, hashedPassword) => {
    
    try {
        const ComparedPassword = await bcrypt.compare(password, hashedPassword);
    return ComparedPassword;
    } catch (error) {
        
        console.log("Error while Comparing the Password" , error);
    }
    
}

module.exports = {
    hashPassword,
    ComparePassword
}